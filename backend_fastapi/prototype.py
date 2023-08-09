from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
import requests
from dotenv import load_dotenv
import os
from math import ceil

app = FastAPI()
load_dotenv()


# Identifiants de connexion à l'API
username = os.getenv("HIBOUTIK_USERNAME")
api_key = os.getenv("HIBOUTIK_API_KEY")


def api_url(params=''):
  if params == '':
    return "https://techtest.hiboutik.com/api/customers/"
  return f"https://techtest.hiboutik.com/api/customer/{params}"

# Connexion à l'API pour les clients
def get_clients_from_external_api(username: str, api_key: str, params: str = ''):
  customers_api = api_url(params)
  response = requests.get(url=customers_api, auth=(username, api_key))
  if response.status_code == 200:
      customers_data = response.json()
      return customers_data
  else:
      raise HTTPException(status_code=response.status_code, detail="Failed to fetch clients from the external API")


# The code snippet is configuring Cross-Origin Resource Sharing (CORS) middleware in the FastAPI application.
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint qui retourne la liste des clients enregistrés
@app.get("/clients")
async def get_clients_page(page: int = 1):
  clients_data = get_clients_from_external_api(username, api_key)
  # filtered_clients = [client for client in clients_data if (client["first_name"] != "") and (client["last_name"] != "")]
  total_clients = len(clients_data)
  total_pages = ceil(total_clients / 5)
  start_index = (page - 1) * 5
  end_index = page * 5
  clients = clients_data[start_index:end_index]
  return {
    "total_pages": total_pages,
    "clients": clients
  }

# Endpoint pour retourner la liste des clients enregistrés pour un nom donné
@app.get("/clients/{param}")
async def get_clients_by_name(param: Union[str, str]):
  clients = get_clients_from_external_api(username, api_key)
  filtered_clients = [client for client in clients if (client["first_name"] == param) or (client["last_name"] == param)]
  return filtered_clients

# Endpoint qui retourne la liste des ventes pour un client donné
@app.get("/ventes/")
async def get_sales_by_client(
  nom: str = Query(..., description="Last_name"),
  prenom: str = Query(..., description="First_name")
):
  clients = get_clients_from_external_api(username, api_key)
  for client in clients:
    if client['first_name'] == prenom and client['last_name'] == nom:
      client_id = client['customers_id']

  sales = get_clients_from_external_api(username, api_key, params=f"{client_id}/sales")
  return sales




if __name__ == "__main__":
  import uvicorn
  uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)