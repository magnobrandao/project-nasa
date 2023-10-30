import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export const useApiNearEarth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?&api_key=aZY4Scxk3GwAsUJBdiVJ6FLn5g61qB6uY2Jirr57`
        );
        const date = format(new Date(), "yyyy-MM-dd");
        const dataFromApi = response?.data?.near_earth_objects[date];
        setData(dataFromApi);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // O segundo argumento vazio [] garante que a função seja chamada apenas uma vez

  return data;
};
