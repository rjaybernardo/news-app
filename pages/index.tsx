import { GetServerSideProps } from "next";
import Head from "next/head";

import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

// 02 BreakingNewsPage data type
interface BreakingNewsPageProps {
  // from model NewsArticle
  newsArticles: NewsArticle[];
}
// 01 this code will not run on the client only on the server
// getServerSideProps is the function that nextjs uses to load data from the server
// GetServerSideProps - the type of data getServerSideProps expects
// BreakingNewsPageProps - the data BreakingNewsPage needs
export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  // Add delay on loading3 seconds
  await new Promise((r) => setTimeout(r, 3000));

  // 04 fetch data from newsapi using the api key
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=ph&apiKey=" +
    process.env.NEWS_API_KEY
  );
  // 05 newsResponse has type NewsResponse from the models
  // will get back a JSON object from newsapi
  const newsResponse: NewsResponse = await response.json();
  return {
    // 06 returns an object with props property
    // props contains an object key os newsArticles from BreakingNewsPage funtion
    // the value is newsResponse.articles - articles from response object
    props: { newsArticles: newsResponse.articles },
  };
  // let error go to 500 page
};

// renamed the component to BreakingNewsPage
// 03 add props type BreakingNewsPageProps - same as the getServerSideProps because it is the data it will return
export default function BreakingNewsPage({
  newsArticles,
}: BreakingNewsPageProps) {
  return (
    <>
      {/* Add meta data with title changed */}
      <Head>
        <title key="title"> Breaking News - NextJS App</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        {/* 07 to display the json data */}
        {/* {JSON.stringify(newsArticles)} */}

        {/* 08 pass article */}
        {/* first entry */}
        {/* <NewsArticleEntry article={newsArticles[0]} /> */}
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
}
