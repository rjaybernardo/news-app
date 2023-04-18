import Head from "next/head";

export default function BreakingNewsPage() {
  return (
    <>
      {/* Add meta data with title changed to */}
      <Head>
        <title key="title"> Breaking News - NextJS App</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
      </main>
    </>
  );
}
