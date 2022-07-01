import React from "react"

function Ico_ChevronDown(props:{width:string , height:string,role:string , class?:string}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" role={props.role}  version="1.1" className={props.class} width={props.width} height={props.height}viewBox="0 0 24 24"><path role={props.role} d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
    )
}

export default Ico_ChevronDown