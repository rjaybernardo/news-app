// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NewsResponse } from "@/models/NewsArticle";
import type { NextApiRequest, NextApiResponse } from "next";

// need to an async function
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  if (!searchQuery) {
    return res.status(400).json({ error: "Please provide a search query" });
  }

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${process.env.NEWS_API_KEY}`
  );
  // Get the news from response body
  const newsResponse: NewsResponse = await response.json();
  // returnred to the frontend when we request from the front end
  res.status(200).json(newsResponse.articles);
}
