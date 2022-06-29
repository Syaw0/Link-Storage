import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_Folder from "../../../asesst/Icons/Ico_folder";
import Ico_ChevronDown from "../../../asesst/Icons/Ico_ChevronDown";
function MainNav_mid_Folder(){
    return(
        <Flex dir={"column"} css={{
            width:"100%",
            padding:"0 $2 0 0 " ,
            
        }}>

            <Flex css={{
                cursor:"click",
                width:"100%",
                padding:"$1",
                borderRadius:"8px",
                
                "&:hover":{
                    backgroundColor:"$onBg100",
                    "&>*":{
                        color:"$onBg",
                        fill:"$onBg"
                    }
                },
                "& svg[class=chevdown] , & svg[class=chevup]":{
                    // marginLeft:"$1",
                    cursor:"pointer",
                    fill:"$onBg600",

                },
                "&>*":{
                    color:"$onBg600",
                    fill:"$onBg600"
                }
            }}>
            <Text cursor={"click"} css={{
                subhead1:"500",
                flex_r:"",
                jfs_ac:"",
                width:"100%",
                "& svg":{
                    marginRight:"$1"
                }
                
            }}>
                <Ico_Folder width="24" height="24" /> 
                    Folder1  
            </Text>
            <Ico_ChevronDown width="24" height="24" class="chevdown"/>
            </Flex>

            <Flex dir={"column"} css={{
                

                "&>*":{
                    padding:"4px $1 4px $2" ,
                    
                }
                }}
            >
            <Text cursor={"click"} css={{
                subhead1:"500" ,
                marginLeft:"$2",
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


export default MainNav_mid_Folder