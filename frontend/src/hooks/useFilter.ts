import { useState } from "react";

export type SortOrder = "newest" | "oldest";

export const useFilter = () => {
  const [search, setSearch] = useState("");
  const [source, setSource] = useState<string | null>(null);
  const [sort, setSort] = useState<SortOrder>("newest");

  return { search, setSearch, source, setSource, sort, setSort };
};
