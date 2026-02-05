import axios from "axios";

export default {
  async index(ctx) {
    const { q = "news", pageSize = 50 } = ctx.query;

    const { data } = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q,
        language: "en",
        pageSize,
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    ctx.send(data.articles);
  },
};
