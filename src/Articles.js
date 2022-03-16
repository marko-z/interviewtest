import React, { useEffect, useState } from "react";
import Article from "./Article";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';


const fetchData = async () => {
    const data = await fetch(
      "https://storage.googleapis.com/aller-structure-task/test_data.json"
    ).then(data => data.json());
    return data;
}
const Articles = () => {
  const [articleRows, setArticleRows] = useState([]);
  const [articleVariants] = useState(["variant1","variant2","variant3"]);

  useEffect(() => {
    fetch(
      "https://storage.googleapis.com/aller-structure-task/test_data.json", 
    )
    .then(data => data.json())
    .then(data => {
      for (const [rowId, row] of Object.entries(data[0])) {
          setArticleRows(articleRows => [...articleRows,{id: rowId, columns: row.columns}]);
      }
    });
  }, [] );

  return (
    <Container>
      {
        articleRows.map(articleRow => {
            return (
              <Row>
                {
                  articleRow['columns'].map(article =>{
                  return( 
                  <Col sm={article.width}>
                    <Article key={'' + articleRow['id'] + article.id}
                      variant={articleVariants[~~(Math.random() * articleVariants.length)]}
                      imageUrl={article.imageUrl}
                      title={article.title}
                    />
                  </Col>);
                  })
                }
              </Row>);
        })
      }
    </Container>
  );
}
export default Articles;