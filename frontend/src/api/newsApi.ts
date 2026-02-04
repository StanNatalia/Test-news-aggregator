import type { NewsApiResponse } from "@/types/news";
import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    language: "en",
  },
});

export const fetchNews = async () => {
  const { data } = await newsApi.get<NewsApiResponse>("/everything", {
    params: {
      q: "news",
      pageSize: 50,
    },
  });
  return data.articles;
};
