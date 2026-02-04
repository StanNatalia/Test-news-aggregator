import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Topic } from "@/types/cms";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const detectTopic = (title: string, topics: Topic[]): string | null => {
  const lowerTitle = title.toLowerCase();

  for (const topic of topics) {
    if (
      topic.keywords.some((keyword) =>
        lowerTitle.includes(keyword.toLowerCase()),
      )
    ) {
      return topic.name;
    }
  }

  return null;
};
