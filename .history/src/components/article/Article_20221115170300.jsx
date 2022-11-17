import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className="gpt3__blog-container-article">
            <div className="gpt3__blog-container-article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="gpt3__blog-container-article-content">
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default Article;
