import React from "react";
export default function IconLink(props){
    return(
        <a style={{textDecoration:"none",marginLeft:(props.yesLeftMargin==="true")?"7px":"0px",marginRight: (props.noRightMargin==="true")?"0px":"15px"}} target="_blank" rel="noreferrer" href={props.URL}>
            <i className={props.icon}></i>
        </a>
    )
}