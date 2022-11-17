import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt__footer-links_logo">
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
