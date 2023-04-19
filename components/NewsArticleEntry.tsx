import { NewsArticle } from "@/models/NewsArticle";
import { Card } from "react-bootstrap";

// 01 interface because we will be passing NewsArticle model
interface NewsArticleEntryProps {
  // 02 NewsArticle model is passed to the article
  article: NewsArticle;
}

const NewsArticleEntry = ({
  // 03 article is typed with NewsArticleEntryProps
  // article is destructured
  // Note write NewsArticleEntryProps then article for auto complete
  article: { title, description, url, urlToImage },
}: NewsArticleEntryProps) => {
  // checks urlToImage if valid
  const validImageUrl =
    urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
      ? urlToImage
      : undefined;

  return (
    <a href={url}>
      <Card className="h-100">
        <Card.Img variant="top" src={validImageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticleEntry;
