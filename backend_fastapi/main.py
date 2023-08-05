from fastapi import FastAPI, HTTPException, Query, Depends
from typing import List
import requests
from dotenv import load_dotenv
import os

app = FastAPI()
load_dotenv()

# Chemin est le endpoint
@app.get("/customers/")
async def root():
    return {"message": "Hello World"}
