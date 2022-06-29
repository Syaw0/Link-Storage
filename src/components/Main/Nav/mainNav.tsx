import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import MainNav_Middle from "./mainNav_middle";
import Ico_StarFill from "../../../asesst/Icons/Ico_StarFill";
import Ico_DbChange from "../../../asesst/Icons/Ico_DbChange";
import Ico_Setting from "../../../asesst/Icons/Ico_Setting";
function MainNav(){
    return(
        <Flex dir={"column"} css={{
            width:"240px",
            height:"100%",
            borderRight:"1px solid $onBg300" ,
            padding:"$1 $1 $1 0",
            position:"fixed",
            left:"120px",
            top:"0",
            "@bp1":{
                left:"32px",
                width:"240px"
            },
            "@bp2-1":{
                display:"none"
            }

        }}>
            <Flex dir="column" css={{
                height:"80%"
            }}>
            <Text css={{
                logo:["700" ,"35"],
                width:"100%",
                borderBottom:"1px solid $onBg300",
                
            }}>Store Me</Text>

            <MainNav_Middle/>

            </Flex>

            <Flex dir={"column"} css={{
                "&>*":{
                    flex_r:"",
                    jfs_ac:"",
                    padding:"$1 ",
                    color:"$onBg700",
                    borderRadius:"8px",
                    "& svg":{
                        fill:"$onBg700",
                        marginRight:"$1"
                    },
                    "&:hover":{
                        backgroundColor:"$onBg100",

                        color:"$onBg",
                        "& svg":{
                            fill:"$onBg"
                        },  
                    }
                }
            }}>
            <Text cursor={"click"} css={{
                    subhead1:"500"
                }}>
                <Ico_StarFill width="24" height="24"/>
                Favorite Links
                </Text>
                <Text cursor={"click"} css={{
                    subhead1:"500"
                }}>
                <Ico_DbChange width="24" height="24"/>
                Change Storage
                </Text>
                <Text cursor={"click"} css={{
                    subhead1:"500"
                }}>
                <Ico_Setting width="24" height="24"/>
                Setting
                </Text>
            </Flex>

        </Flex>
    )
}


export default MainNav