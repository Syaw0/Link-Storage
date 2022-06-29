import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Ico_Folder from "../../asesst/Icons/Ico_folder";
function Welcome_Choose_Items({text}:{text:string}){
    return(
        <Flex dir={"row"} justify="start" align={"center"} css={{
            cursor:"pointer",
            width:"100%",
            // border:"1px solid black",
            padding:"$1",
            "& svg , & p":{
                fill:"$onBg700",
                color:"$onBg700"
            },

            "&:hover p , &:hover svg":{
                fill:"$onBg",
                color:"$onBg"
            }
        }}>
            <Ico_Folder width="25" height="25"/>
            <Text cursor={"click"} css={{paddingLeft:"$1"}}>{text}</Text>
        </Flex>
    )
}


export default Welcome_Choose_Items