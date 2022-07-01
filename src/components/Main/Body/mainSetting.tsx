import React from "react";
import { useStore } from "../../../store/store";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
function MainSetting(){
    const setCurrentTheme = useStore(state=>state.setCurrentTheme)
    const currentTheme = useStore(state=>state.currentTheme)
    const setDelete = useStore(state=>state.setDeleteWhat)
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
            <Text onClick={()=>{currentTheme === "light" ? setCurrentTheme("dark"):setCurrentTheme("light")}} cursor={"click"} css={{
                subhead1:"500",
                color:"$onBg700",
                "&:hover":{
                    color:"$onBg"
                }
            }}>Change Theme ({currentTheme==="light"?"Dark":"Light"})</Text>
            <Text onClick={()=>{setDelete("AllStore")}} cursor={"click"} css={{
                subhead1:"500",
                color:"$onErrorCon",
                "&:hover":{
                    color:"Red",
                    // textDecoration:"underline"
                }
            }}>Delete All Storage</Text>
        </Flex>
    )
}


export default MainSetting