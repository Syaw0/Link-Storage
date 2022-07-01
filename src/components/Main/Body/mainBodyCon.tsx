import React from "react";
import { useStore } from "../../../store/store";
import Flex from "../../../Styles/styledComponent/Flex";
import MainLink from "./mainLink";
import HandleContextMenu from "../HandleCotenxtMenu";
function MainBodyCon (){

    const currentBodyFile = useStore(state=>state.currentBodyFile)
    const Db = useStore(state=>state.Db)
    console.log("DB UPDAE" , Db)
    return(
        <Flex role={"onBody"} onContextMenu={(e)=>{HandleContextMenu(e)}}  dir={"column"} justify="start" align={"center"} css={{
            width:'100%',
            minHeight:"90vh",
            overflowY:"scroll",
            padding:"$3",
            
            "@bp3":{
                padding:"0"
            },
            "& div:not(div:last-child)":{
                borderBottom:"1px solid $onBg100",
            }
        }}> 

            {
                currentBodyFile.links.map((v:any , i:number)=>{
                    return(
                        <MainLink key={i} {...v} />
                    )
                })
            }
        </Flex>
    )
}


export default MainBodyCon