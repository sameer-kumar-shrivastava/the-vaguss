import React from "react";
import './blog-page.styles.scss';

const BlogPage = () =>
{
    return (<div className="blog-page-container" id="blog">
        <div className="blog-page-div-one">
            <h1 className="blog-page-title">Read & Share</h1>
            <h1 className="blog-page-subtitle">Your Experiences</h1>
            <button className="blog-start-button">Start Now</button>
        </div>
        <div className="blog-page-div-two">
            <div className="blog-img-div-one"><img className="blog-img-one" src='https://images.unsplash.com/photo-1647550852144-8e3618a2d45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' /></div>
            <div className="blog-img-div-two"><img className="blog-img-two" src='https://images.unsplash.com/photo-1561025862-678d69bacc4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' /></div>
            <div className="blog-img-div-three"><img className="blog-img-three" src='https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' /></div>
        </div>
    </div>)
}

export default BlogPage
