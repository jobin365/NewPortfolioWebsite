import React from "react";
import "./LogoAndName.css";
export default function LogoNName(props){
    return(
        <div className="container">
        <img className="logo" alt="logo" src={props.logoURL}></img>
        <h3>{props.name}</h3>
        </div>
    )
}