import React from "react"

function Ico_ChevronUp(props:{width:string , height:string , class?:string}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" className={props.class} width={props.width} height={props.height} viewBox="0 0 24 24"><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
    )
}

export default Ico_ChevronUp