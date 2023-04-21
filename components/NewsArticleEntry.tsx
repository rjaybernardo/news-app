import { NewsArticle } from "@/models/NewsArticle";
// 04 Nextjs image component
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from "@/assets/images/newsarticle_placeholder.jpg";
import styles from "@/styles/NewsArticleEntry.module.css";

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
        {/* <Card.Img variant="top" src={validImageUrl} /> */}
        {/* Nextjs image component */}
        <Image
          src={validImageUrl || placeholderImage}
          width={500}
          height={200}
          alt="News article image"
          className={`card-img-top ${styles.image}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default NewsArticleEntry;
