import axios from "axios";

const BASE_URL = "http://localhost:8000";

const headers = {
  Authorization: process.env.HIBOUTIK_API_KEY,
  "Content-Type": "application/json",
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, { headers });

    return response;
  } catch (error) {
    console.log("Error fetching data from API", error);
  }
};
