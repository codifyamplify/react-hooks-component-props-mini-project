import React from "react"
console.log("i am inside Article.js")
// Props used in this component: title, date, preview

function Article({ title, date = "January 1, 1970", preview }){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article