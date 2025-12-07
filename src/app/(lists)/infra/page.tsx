import ArticleCardArea from "@/component/ArticleCardArea";
import BackImage from "@/component/BackImage";

export const metadata = {
  title: "TechAmply | インフラ",
};

const Page = async (props: {
  params: Promise<string>;
  searchParams: Promise<{ page: number }>;
}) => {
  const searchParams = await props.searchParams;
  return (
    <>
      <BackImage title="インフラ" />
      <main className="container h-full w-full mx-auto my-20 top-16">
        <div className="flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl">
          <div className="flex flex-col h-full w-full">
            <ArticleCardArea category={"infra"} searchParams={searchParams} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
