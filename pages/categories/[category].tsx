import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
//import getStaticProps
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Alert } from "react-bootstrap";

// 02 add type
interface CategoryNewsPageProps {
  newsArticles: NewsArticle[];
}

// 11 getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const categorySlugs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

  return {
    paths,
    // fallback means if we enter other than the values from the categorySlugs it will show 404 error - not found page
    fallback: false,

    // 12 use incremental static regeneration
    // after 5 miinutes it will refresh the data
    // only works on production not in development
    // revalidate: 5 * 60,
  };
};

// 04 getStaticProps
// type is GetStaticProps
// return type is CategoryNewsPageProps

export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({
  params,
}) => {
  // 06 params plus the path variable name [category]
  // add change to string
  // add ? after params to make it params? to remove params underline error because of category can be undefined
  const category = params?.category?.toString();

  // 05 make fetch request to the headlines api
  // after ph& add category={} - inside {params}
  // use api key from .env.local file
  // async parameter add context - destructured and get params
  // 07 add category inside {} in the url
  // Note: add await before fetch
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ph&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
  );
  // 08 get the response from the json body
  // import NewsResponse
  const newsResponse: NewsResponse = await response.json();
  return {
    // 09 returns an object with props property
    // props contains an object key os newsArticles from BreakingNewsPage function
    // the value is newsResponse.articles - articles from response object
    props: { newsArticles: newsResponse.articles },
  };
};

// 01 create acomponent
// 03 add type to the props article
const CategoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
  // 13 getting the headlines title
  const router = useRouter();
  // router.query has the query values
  // then name of the variable which is category
  // then turn it to a normal string value
  const categoryName = router.query.category?.toString();
  // create a title from categoryName
  const title = "Category: " + categoryName;

  return (
    // 10 add html
    <>
      {/* 14 add meta data */}
      <Head>
        <title key="title">{`${title} - NextJS News App`}</title>
      </Head>
      <main>
        <h1>{title}</h1>
        {/* 15 add alert */}
        <Alert>
          This is page uses <strong>getStaticProps</strong> for very high page
          loading speed and <strong>incremental static regeneration</strong> to
          show data not older than <strong>5 minutes</strong>.
        </Alert>
        {/* display news article  and pass articles as props*/}
        <NewsArticlesGrid articles={newsArticles} />
      </main>
    </>
  );
};

export default CategoryNewsPage;
