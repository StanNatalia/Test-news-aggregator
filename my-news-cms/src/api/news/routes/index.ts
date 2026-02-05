export default {
  routes: [
    {
      method: "GET",
      path: "/news",
      handler: "news.index",
      config: {
        auth: false,
      },
    },
  ],
};
