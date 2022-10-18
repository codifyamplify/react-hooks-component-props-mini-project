import React from 'react';
console.log("i am inside Header.js")
// props used in this component: name

function Header({ name }) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header