from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Union
import requests
from dotenv import load_dotenv
from pydantic import BaseModel
import os
from math import ceil

app = FastAPI()
load_dotenv()


username = os.getenv("HIBOUTIK_USERNAME")
api_key = os.getenv("HIBOUTIK_API_KEY")

  
# Connexion à l'API pour les clients
def get_clients_from_external_api(username: str, api_key: str):
  customers_api = "https://techtest.hiboutik.com/api/customers"
  response = requests.get(url=customers_api, auth=(username, api_key))
  
  if response.status_code == 200:
      customers_data = response.json()
      return customers_data
  else:
      raise HTTPException(status_code=response.status_code, detail="Failed to fetch clients from the external API")




origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint qui retourne la liste des clients enregistrés
# @app.get("/clients/")
# async def get_clients():
#   clients = get_clients_from_external_api(username, api_key)
  
#   return clients

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
    # "current_page": page,
    # "clients_per_page": 5,
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
  customers_first_name: str = Query(None, description="Prénom du client"),
  customers_last_name: str = Query(None, description="Nom du client"),
  customers_email: str = Query(None, description="Email"),
):
  sales = []
  
  for sale_id in range(1, 21):
    sales_api = f"https://techtest.hiboutik.com/api/sales/{sale_id}"
    response = requests.get(url=sales_api, auth=(username, api_key))
    if response.status_code == 200:
        sales_data = response.json()[0]
        if len(sales_data) == 102:
          if (sales_data["customers_first_name"] == customers_first_name) or (sales_data["customers_last_name"] == customers_last_name) or (sales_data["customers_email"] == customers_email):
            sales.append(sales_data)
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch sales from the external API")
  
  return sales
  
  
  
  
# Endpoint du challenge 3 pour ajouter de la pagination par tranche de 5
@app.get("/ventes/")
async def get_sales_by_client(
  page: int = Query(1, gt=0, description="Page") # Nombre de pages comme paramètre
):
  sales = []
  
  for sale_id in range(1, 21):
    sales_api = f"https://techtest.hiboutik.com/api/sales/{sale_id}"
    response = requests.get(url=sales_api, auth=(username, api_key))
    if response.status_code == 200:
        sales_data = response.json()[0]
        if len(sales_data) == 102:
          sales.append(sales_data)
    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to fetch sales from the external API")
    
  # Pagination
  items_per_page = 5
  start_index = (page - 1) * items_per_page
  end_index = start_index + items_per_page
  
  page_clients = sales[start_index:end_index]
  
  return {
    "page": page,
    "items_per_page": items_per_page,
    "total_items": len(page_clients),
    "items": page_clients
  }


  
  
  
  



# if __name__ == "__main__":
#   import uvicorn
#   uvicorn.run(app, host="127.0.0.1", port=8000)