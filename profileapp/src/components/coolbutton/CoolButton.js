import React from "react";

function Button(props){
    const element=(
        
    <button type={props.btntype} class={props.className}>{props.val}</button>
        
    );

    return element;
}


export default Button;