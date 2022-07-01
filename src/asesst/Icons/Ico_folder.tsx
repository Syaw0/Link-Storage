import React from "react"

function Ico_Folder(props:{width:string , height:string , role:string}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  role={props.role} version="1.1" id="mdi-folder-open" width={props.width} height={props.height} viewBox="0 0 24 24"><path role={props.role} d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z" /></svg>
    )
}

export default Ico_Folder