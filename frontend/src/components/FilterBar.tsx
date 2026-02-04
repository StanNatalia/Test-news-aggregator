import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { AllowedSource } from "@/types/cms";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  source: string | null;
  onSourceChange: (v: string | null) => void;
  sort: "newest" | "oldest";
  onSortChange: (v: "newest" | "oldest") => void;
  sources: AllowedSource[];
};

const FilterBar = ({
  search,
  onSourceChange,
  sort,
  onSearchChange,
  source,
  onSortChange,
  sources,
}: Props) => {
  return (
    <div className="p-4 flex flex-wrap gap-4 items-center">
      {/* Search */}
      <Input
        placeholder="Search by title..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-[220px]"
      />

      {/* Source filter */}
      <Select
        value={source ?? "all"}
        onValueChange={(value) =>
          onSourceChange(value === "all" ? null : value)
        }
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Source" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All sources</SelectItem>
          {sources.map((s) => (
            <SelectItem key={s.name} value={s.name}>
              {s.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select value={sort} onValueChange={onSortChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Sort by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest first</SelectItem>
          <SelectItem value="oldest">Oldest first</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterBar;
