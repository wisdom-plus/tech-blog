import { notFound } from "next/navigation";
import { use } from "react";
import { getBlogList } from "@/api/microcms";
import ArticleCard from "@/component/ArticleCard";
import Pagination from "@/component/Pagination";
import { PER_PAGE } from "@/constants";

const ArticleCardArea = ({
  category,
  searchParams,
  tagId,
}: {
  category?: string;
  searchParams: { page: number };
  tagId?: string;
}) => {
  const offset = searchParams.page ? searchParams.page : 1;
  const data = use(
    getBlogList({ category: category, offset: offset, tagId: tagId }),
  );
  if (!data) {
    return notFound();
  }
  return (
    <div>
      <div className="max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3">
        {data.contents.map((item) => {
          return <ArticleCard key={item.id} article={item} />;
        })}
      </div>
      {data.totalCount > PER_PAGE && <Pagination count={data.totalCount} />}
    </div>
  );
};

export default ArticleCardArea;
