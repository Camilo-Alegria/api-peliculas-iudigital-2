import axios from 'axios';

const API = axios.create({
  baseURL: "https://api-peliculas-iudigital-2.onrender.com",
});

export default API;
