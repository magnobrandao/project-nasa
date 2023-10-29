import axios from "axios";

export default axios.create({
  baseURL: `https://api.nasa.gov/planetary`,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
