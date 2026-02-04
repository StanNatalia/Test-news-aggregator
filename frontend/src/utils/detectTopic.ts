import type { Topic } from "@/types/cms";

export const detectTopic = (title: string, topics: Topic[]): Topic | null => {
  const normalizedTitle = title.toLowerCase();

  for (const topic of topics) {
    const match = topic.keywords.some((keyword) =>
      normalizedTitle.includes(keyword.toLowerCase()),
    );

    if (match) return topic;
  }

  return null;
};
