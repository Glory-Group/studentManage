import React, { Component } from 'react'
import "./scss/style.css";
const Head =props=> {
        let {title,bgColor}=props
        return (         
                <header className="header" style={{background:bgColor}}>
                <span>{title}</span>
                    
                </header>           
        )
    
}

export default Head
