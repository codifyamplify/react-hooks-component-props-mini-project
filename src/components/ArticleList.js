import React from "react";
import Article from "./Article"
console.log("i am inside ArticleList.js")
// Props used in this component: Posts

function ArticleList({ posts }){
    const articles = posts.map((post) => {
        return (
            <Article
                key={post.id}
                title={post.title}
                date={post.date}
            />)
    })
    console.log(articles)
    return (
        <main>{articles}</main>
    )
}

export default ArticleList