import { GetServerSideProps } from "next";
import Head from "next/head";

import { NewsArticle, NewsResponse } from "@/models/NewsArticle";

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}
// this code will not run on the client only on the server
export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=ph&apiKey=" +
    process.env.NEWS_API_KEY
  );
  const newsResponse: NewsResponse = await response.json();
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

export default function BreakingNewsPage({
  newsArticles,
}: BreakingNewsPageProps) {
  return (
    <>
      {/* Add meta data with title changed to */}
      <Head>
        <title key="title"> Breaking News - NextJS App</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        {/* display the json data */}
        {JSON.stringify(newsArticles)}
      </main>
    </>
  );
}
