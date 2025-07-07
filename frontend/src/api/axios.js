import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Update if hosted elsewhere
});

export default instance;
