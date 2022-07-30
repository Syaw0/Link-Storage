import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Input from "../../Styles/styledComponent/Input";
import { useStore } from "../../store/store";

function Welcome_Empty(){

    const setWhichWelcomeSection = useStore(state=>state.setWhichWelcomeSection)

    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%" , height:"100%", paddingTop:"$5" 
            
            }}>

            <Text data-test="empty-warn" css={{headline4:"600"}}>You do not have storage space!</Text>
          
            <Flex justify={"start"} align="center" css={{
                width:"100%",
                paddingTop:"$4",
                "@bp4":{
                    flexDirection:"column"
                }

            }}>
                 <Text data-test="empty-create" onClick={()=>{setWhichWelcomeSection("create")}}  cursor={"click"} css={{
                    color:"$onPrimary",
                    backgroundColor:"$primary",
                    button:"700" ,
                    padding:"$1 $2",
                    borderRadius:"8px",
                    boxShadow:"$1dp",width:"100%",textAlign:"center",
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
                }}>Create a New One</Text>
            </Flex>
        </Flex>
    )
}


export default Welcome_Empty