import { client } from "lib/client";
import { cache } from "react";
import { OFFSET, PER_PAGE } from "@/constants/index";
import type { Article, Tag } from "@/types/index";

type getBlogListProps = {
  offset?: number;
  limit?: number;
  category?: string;
  tagId?: string;
};

export const getBlogList = async ({
  offset = 1,
  limit = PER_PAGE,
  category = "all",
  tagId = "",
}: getBlogListProps) => {
  const today = new Date().toISOString();
  const offset_num = OFFSET(offset);
  const filters = [`published_at[less_than]${today}`];

  if (category !== "all") {
    filters.push(`category[contains]${category}`);
  }

  if (tagId) {
    filters.push(`tags[contains]${tagId}`);
  }

  const filter = filters.join("[and]");

  try {
    const res = await client.getList<Article>({
      endpoint: "blog",
      queries: {
        offset: offset_num,
        limit: limit,
        filters: filter,
      },
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    });
    return { contents: res.contents, totalCount: res.totalCount };
  } catch (_error) {
    return false;
  }
};

export const getSitemapPosts = () =>
  client.getAllContents<Pick<Article, "id" | "published_at">>({
    endpoint: "blog",
    queries: {
      fields: ["id", "published_at"],
      filters: `published_at[less_than]${new Date().toISOString()}`,
    },
    customRequestInit: { next: { revalidate: 60 } },
  });

export const getBlog = cache(async (id: string) => {
  try {
    const res = await client.get<Article>({
      endpoint: "blog",
      contentId: id,
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    });
    return res;
  } catch (error) {
    // The microCMS SDK exposes the HTTP status in the error message.
    if (
      error instanceof Error &&
      /^fetch API response status: 404(?:\s|$)/.test(error.message)
    ) {
      return null;
    }
    throw error;
  }
});

export const getTagList = async ({ offset = 1, limit = PER_PAGE }) => {
  const offset_num = OFFSET(offset);

  try {
    const res = await client.getList<Tag>({
      endpoint: "tags",
      queries: { limit: limit, offset: offset_num },
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    });
    return { contents: res.contents, totalCount: res.totalCount };
  } catch (_error) {
    return false;
  }
};
