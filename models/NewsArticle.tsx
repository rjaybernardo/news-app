export interface NewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  // ? means optional
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

// recreate the response from newsapi
export interface NewsResponse {
  // newsArticle array from above
  articles: NewsArticle[];
}
