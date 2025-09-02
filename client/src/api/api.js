import axios from "axios";

const api = axios.create({
  baseURL: "https://studenttrack-crud-authentication.onrender.com/api", // backend ka base url
  withCredentials: true, // cookies handle karne ke liye
});

export default api;
