import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"; 
import "./Article.css";

const Article = (props) => {
  const [title, setTitle] = useState(props.title);
  const [isEditing, setIsEditing] = useState(false);


  return (
        <Col xs={props.width}>
            <div className={props.variant}>
                <img src={props.imageUrl}/> 
                <div>
                    <Button variant="primary" onClick={() => setIsEditing(true)}>Edit</Button>{' '}
                    {
                        isEditing ? <input value={title} 
                            onKeyPress={(e) => {if (e.key === 'Enter') setIsEditing(false)}} 
                            onChange={(e) => setTitle(e.target.value)}>
                            </input> : <p className={props.variant}>{title}</p>
                    }
                </div>
            </div>
        </Col>
  );
}
export default Article;
        //   width={article.width}
        //   url={article.url}
        //   title={article.title}
        //   imageUrl={article.imageUrl}