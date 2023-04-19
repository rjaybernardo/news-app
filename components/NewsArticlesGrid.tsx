import { NewsArticle } from "@/models/NewsArticle";
import { Row, Col } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

interface NewsArticlesGridProps {
  // articles will have type NewsArticle from models - [] is important
  // array of articles will be passed on
  articles: NewsArticle[];
}

// 02 pass protype to component
const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
  return (
    // on extra small screen size will show only one
    // om small will show two
    // on extra large will show three
    <Row xs={1} sm={2} xl={3} className="g-4">
      {/* will display articles thru map method */}
      {articles.map((article) => (
        <Col key={article.url}>
          {/* single article is passed down to NewsArticleEntry */}
          <NewsArticleEntry article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default NewsArticlesGrid;
