import type { AllowedSource, Topic } from "@/types/cms";
import axios from "axios";

const strapiApi = axios.create({
  baseURL: "https://unwavering-charity-6dbc8ad899.strapiapp.com/api",
});

export const getAllowedSources = async (): Promise<AllowedSource[]> => {
  const { data } = await strapiApi.get("/sources");
  return data.data;
};

export const getTopics = async (): Promise<Topic[]> => {
  const { data } = await strapiApi.get("/topics?populate=keywords");
  return data.data;
};
