import { getAllowedSources, getTopics } from "@/api/strapiApi";
import { useQuery } from "@tanstack/react-query";

export const useCMSConfig = () => {
  const sourcesQuery = useQuery({
    queryKey: ["sources"],
    queryFn: getAllowedSources,
  });

  const topicsQuery = useQuery({
    queryKey: ["topics"],
    queryFn: getTopics,
  });

  return {
    sources: sourcesQuery.data ?? [],
    topics: topicsQuery.data ?? [],
    isLoading: sourcesQuery.isLoading || topicsQuery.isLoading,
  };
};
