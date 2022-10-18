import React from "react";
console.log("i am inside About.js")
// props used in this component: image, about

function About({ about, image = "https://via.placeholder.com/215"}){
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About