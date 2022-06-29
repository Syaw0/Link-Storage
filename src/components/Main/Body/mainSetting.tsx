import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
function MainSetting(){
    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:'100%',
            overflowY:"scroll",
            padding:"$3",
            "@bp3":{
                padding:"0"
            },
            "& div:not(div:last-child)":{
                borderBottom:"1px solid $onBg100",
            }
        }}> 
            <Text cursor={"click"} css={{
                subhead1:"500",
                color:"$onBg700",
                "&:hover":{
                    color:"$onBg"
                }
            }}>Change Theme (Dark)</Text>
            <Text cursor={"click"} css={{
                subhead1:"500",
                color:"$onErrorCon"
            }}>Delete All Storage</Text>
        </Flex>
    )
}


export default MainSetting