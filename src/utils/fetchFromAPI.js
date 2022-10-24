import axios from "axios";

export const BASE_URL = "​https://youtube138.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "414c022541msh6ca9a1f92cd529ap193674jsn417bada6bd23",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
