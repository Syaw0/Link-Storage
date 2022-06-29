import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Welcome_Choose_Items from "./Wel_Choose_items";
function Welcome_Choose(){
    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%" , height:"100%", paddingTop:"$5" 
            
            }}>

            <Text css={{headline4:"600"}}>Choose Your Storage</Text>
            <Flex dir={"column"} justify="start" align={"start"} css={{
                overflowY:"scroll",
                width:"100%" ,
                marginTop:"$2",
                padding:"$1 0"
            }}>
                <Welcome_Choose_Items text="FrontEnd" /> 
                <Welcome_Choose_Items text="Global" /> 
                <Welcome_Choose_Items text="BackEnd" /> 
                <Welcome_Choose_Items text="Stoicism" /> 
                <Welcome_Choose_Items text="JobFind" /> 
                <Welcome_Choose_Items text="Books" /> 
                <Welcome_Choose_Items text="Article" /> 

            </Flex>
            <Flex justify={"center"} align="center" css={{
                width:"100%",
                paddingTop:"$6"
            }}>
                <Text  cursor={"click"} css={{
                    color:"$onBg500",
                    borderBottom:"1px solid $onBg500",
                    button:"400" ,
                    "&:hover":{
                        color:"$onBg800",
                    }
                }}>Or Create A New Storage</Text>
            </Flex>
        </Flex>
    )
}


export default Welcome_Choose