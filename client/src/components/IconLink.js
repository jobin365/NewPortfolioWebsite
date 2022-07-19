import React from "react";
export default function IconLink(props){
    return(
        <a style={{textDecoration:"none",marginRight: (props.noRightMargin==="true")?"0px":"15px"}} target="_blank" rel="noreferrer" href={props.URL}>
            <i className={props.icon}></i>
        </a>
    )
}