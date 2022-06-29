import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Input from "../../Styles/styledComponent/Input";
function Welcome_Create(){
    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%" , height:"100%", paddingTop:"$5" 
            
            }}>

            <Text css={{headline4:"600"}}>What is Your Store Name?</Text>
            <Flex  justify="start" align={"start"} css={{
                // overflowY:"hidden",
                width:"100%" ,
                marginTop:"$2",
                padding:"$1 0"
            }}>
                <Input placeholder="like : Prod Links , Book links and etc" inputType={"text"} css={{
                    width:"100%",
                    border:"1px solid $onBg200",
                    borderRadius:"8px",
                    minWidth:"100%",
                    "&:focus":{
                        border:"1px solid $onBg600",
                    }
                }}></Input>

            </Flex>
            <Flex justify={"around"} align="center" css={{
                width:"100%",
                paddingTop:"$4",
                "@bp4":{
                    flexDirection:"column"
                }

            }}>
                <Text  cursor={"click"} css={{
                    color:"$onBg500",
                    button:"700" ,
                    "@bp4":{
                        order:1
                    },
                    "&:hover":{
                        color:"$onBg800",
                    }
                }}>Get Into A Exist Storage</Text>
                 <Text  cursor={"click"} css={{
                    color:"$onPrimary",
                    backgroundColor:"$primary",
                    button:"700" ,
                    padding:"$1 $2",
                    borderRadius:"8px",
                    boxShadow:"$1dp",
                    "@bp4":{
                        order:0,
                        marginBottom:"$2"
                    },
                    "&:hover":{
                        color:"$primary",
                        backgroundColor:"$primary300"
                    },
                    "&:active":{
                        boxShadow:"none"
                    }
                }}>Create Storage</Text>
            </Flex>
        </Flex>
    )
}


export default Welcome_Create