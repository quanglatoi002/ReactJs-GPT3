import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className="gpt3__blog-container-article">
            <div className="gpt3__blog-container-article-image">
                <img src={imgUrl} alt="blog_image" />
            </div>
            <div className="gpt3__blog-container-article-content"></div>
        </div>
    );
};

export default Article;
