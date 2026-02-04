export type Article = {
  title: string;
  description: string;
  source: {
    id: string | null;
    name: string;
  };
  publishedAt: string;
  url: string;
};

export type NewsApiResponse = {
  articles: Article[];
};
