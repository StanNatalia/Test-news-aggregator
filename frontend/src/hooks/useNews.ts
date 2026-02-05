import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/newsApi";
import type { Article } from "@/types/news";

export const useNews = () => {
  return useQuery<Article[]>({
    queryKey: ["news"],
    queryFn: fetchNews,
  });
};
