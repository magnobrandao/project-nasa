import { useContext, useEffect, useState } from "react";
import api from "../services/ApodApi";
import { dataContext } from "../pages/home/Home";
import { format } from "date-fns";

function useApodApi() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const apiKey = "Ie25M3zSZBhfrQdesyHL1O7jQHJQwWHp5voA4BCE";

  const { startDate } = useContext(dataContext);

  async function fetchApi() {
    try {
      const dateFormat = format(
        new Date("2023-10-29T15:53:59.856Z"),
        "yyyy-MM-dd"
      );

      const response = await api.get(
        `apod?api_key=${apiKey}&date=${dateFormat}`
      );

      setImageUrl(response.data.url);
      setTitle(response.data.title);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { imageUrl, title };
}

export default useApodApi;
