import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_StarFill from "../../../asesst/Icons/Ico_StarFill";
import { useStore } from "../../../store/store";
import HandleContextMenu from "../HandleCotenxtMenu";

function MainLink (props:{des:string , title:string , url:string , isStar:boolean , uid:string}){
    const Db = useStore(state=>state.Db)
    return(
        <Flex data-test='main-link' onContextMenu={(e)=>{HandleContextMenu(e , props)}} role="onLink"  dir={"row"} justify="between" align={"center"} css={{
            width:"100%",
            "&>p":{
                padding:"$2"
            } ,
            "& svg[class=starFill]":{
                cursor:"pointer",
                fill:"GoldenRod",
                width:"30px"
            },
            "&:hover":{ 
                backgroundColor:"$onBg100"
            }
        }}>
            <Text css={{
                subhead1:"600",
                "@bp3":{
                    subhead2:"600"
                }
            }}>{props.title}</Text>
            <Text cursor={"click"} css={{
                subhead1:"400",
                color:"$primary",
                "@bp3":{
                    subhead2:"400"
                },
                "&:hover":{
                    textDecoration:"underline",
                }
                
            }}>{props.url}</Text>
            <Text css={{
                subhead1:"300",
                "@bp2-1":{
                    subhead2:"300"
                }
            }}>{props.des}</Text>
            {/* <Ico_StarFill width="24" height="24"/> */}
        </Flex>
    )
}

export default MainLink