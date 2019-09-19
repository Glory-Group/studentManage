import React, { Component } from 'react'
import "./scss/style.css";
const Head =props=> {
        let {title,bgColor}=props
        return (         
                <header className="header">
                <div className="header-content">{title}</div>                  
                </header>           
        )
    
}

export default Head
