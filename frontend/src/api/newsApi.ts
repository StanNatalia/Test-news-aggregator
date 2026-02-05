import axios from "axios";
import type { Article } from "@/types/news";

const api = axios.create({
  baseURL: "https://abundant-ducks-a0a7f07f12.strapiapp.com/api",
});

export const fetchNews = async (): Promise<Article[]> => {
  const { data } = await api.get("/news");
  return data;
};
