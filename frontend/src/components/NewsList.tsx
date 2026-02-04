import FilterBar from "./FilterBar";
import { useFilter } from "@/hooks/useFilter";
import { useNews } from "@/hooks/useNews";
import { useNavigate } from "react-router";

import { useCMSConfig } from "@/hooks/useCMSConfig";
import { detectTopic } from "@/lib/utils";

const NewsList = () => {
  const { data: articles = [] } = useNews();
  const { sources, topics } = useCMSConfig();

  const articlesWithTopic = articles.map((article) => ({
    ...article,
    topic: article.title ? detectTopic(article.title, topics) : null,
  }));

  const filters = useFilter();

  const navigate = useNavigate();

  const filtered = articlesWithTopic

    .filter((a) => sources.some((s) => s.name === a.source?.id))

    .filter((a) => a.title.toLowerCase().includes(filters.search.toLowerCase()))

    .filter((a) => !filters.source || a.source?.id === filters.source)

    .sort((a, b) =>
      filters.sort === "newest"
        ? +new Date(b.publishedAt) - +new Date(a.publishedAt)
        : +new Date(a.publishedAt) - +new Date(b.publishedAt),
    );

  return (
    <div className="space-y-6">
      <FilterBar
        search={filters.search}
        onSearchChange={filters.setSearch}
        source={filters.source}
        onSourceChange={filters.setSource}
        sort={filters.sort}
        onSortChange={filters.setSort}
        sources={sources}
      />

      <div className="grid gap-4">
        {filtered.map((article) => (
          <div
            onClick={() =>
              navigate(`/article/${encodeURIComponent(article.url)}`, {
                state: article,
              })
            }
            key={article.url}
            className="border p-4 rounded"
          >
            <h3 className="font-semibold text-lg">{article.title}</h3>

            <p>{article.description}</p>
            <p className="text-sm text-muted-foreground">
              {article.source.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
