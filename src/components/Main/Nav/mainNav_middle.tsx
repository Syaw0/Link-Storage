import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_ChevronDown from "../../../asesst/Icons/Ico_ChevronDown";
import MainNav_mid_Folder from "./mainNav_mid_folder";
function MainNav_Middle(){
    return(
        <Flex dir={"column"} css={{
            padding:"$3 0 0 $1",
            height:"100%",
            
            }}>
            <Text cursor={"click"} css={{
                flex_r:"" , jfs_ac:"",
                color:"$onBg",
                headline6:"600",
                "& svg":{
                    marginLeft:"$1",
                    fill:"$onBg"
                }
            }}>FrontEnd Links <Ico_ChevronDown width="24" height="24"/> </Text>
            <Flex dir={"column"} css={{
                height:"60%",
                overflowY:"scroll",
                marginTop:"$3",
                borderBottom:"1px solid $onBg100",
                padding:"$1 0"
            }}>
            <MainNav_mid_Folder/>
            <MainNav_mid_Folder/>
            <MainNav_mid_Folder/>
            <MainNav_mid_Folder/>
            <Text cursor={"click"} css={{
                subhead1:"500" ,
                borderRadius:"8px",
                padding:"$1",
                flex_c:"",
                textAlign:"left",
                color:"$onBg500",
                 "&:hover":{
                    backgroundColor:"$onBg100",
                    color:"$onBg"
                 }
                }}>item1</Text> 
            </Flex>

        </Flex>
    ) 
}



export default MainNav_Middle