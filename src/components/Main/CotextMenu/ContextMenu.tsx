import React from "react";
import { useStore } from "../../../store/store";
import Flex from "../../../Styles/styledComponent/Flex";
import ContextMenuNav from "./ContextMenuNav";
import ContextMenuFile from "./contextMenuFile";
import ContextMenuFolder from "./ContextMenuFolder";
import darkTheme from "../../../Styles/theme/darkTheme";
import ContextMenuLink from "./ContextMenuLink";
import ContextMenuBody from "./ContextMenuBody";
function ContextMenu(){
    const displayContextMenu = useStore(state=>state.displayContextMenu)
    const cotextMenuCord = useStore(state=>state.contextMenuCord)
    const contextMenuTarget = useStore(state=>state.contextMenuTarget)
    const currentBodyFile = useStore(state=>state.currentBodyFile)
    const currentContextElement = useStore(state=>state.currentContextElement)
    // console.log(currentContextElement)
    return(
        <Flex dir={"column"} justify="center" align={"start"} css={{
            position:"fixed",
            width:"auto",
            // height:"10rem",
            backgroundColor:"$onBg900",
            display:`${displayContextMenu}`,
            top:`${cotextMenuCord.y }px`,
            left:`${cotextMenuCord.x }px`,
            borderRadius:"8px",
            "&>p":{
                width:"100%",
                padding:"6px $1",
                borderBottom:"1px solid $white300",
                [`.${darkTheme} &`]:{
                    borderBottom:"1px solid rgba(0,0,0,0.3)",
                },
                textAlign:"left",
                flex_r:"",
                jfs_ac:"",
                subhead1:"500",
                

            },
            "& p svg":{
                marginRight:"$1"
            },
            "&>*":{
                fill:"$bg700",
                color:"$bg"
            },
            "&>p:hover":{
                cursor:"pointer",
                backgroundColor:"$white300",
                [`.${darkTheme} &`]:{
                    backgroundColor:"rgba(0,0,0,0.3)",
                },
                "&>svg":{
                
                }
            }

        }}>
            {contextMenuTarget === "onBoxNav" && <ContextMenuNav/> }
            {contextMenuTarget === "onFolder" && <ContextMenuFolder/> }
            {contextMenuTarget === "onFile" && <ContextMenuFile/> }
            {contextMenuTarget === "onLink" && <ContextMenuLink/> }
            {contextMenuTarget === "onBody" && currentBodyFile["name"] !== "Favorite" && currentBodyFile["name"] !== "Setting" && <ContextMenuBody/> }
        </Flex>
    )
}


export default ContextMenu