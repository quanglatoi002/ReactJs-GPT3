import React from "react";
import "./blog.css";

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_A"></div>
                <div className="gpt3__blog-container_B"></div>
            </div>
        </div>
    );
};

export default Blog;
