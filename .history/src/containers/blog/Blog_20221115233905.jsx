import "./blog.css";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    <h1 className="gradient__text">
                        A lot is happening, <br /> We are blogging about it.
                    </h1>
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
