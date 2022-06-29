import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Span from "../../Styles/styledComponent/Span";
function DeleteError(){
    return(
        <Flex dir={"column"} justify="center" align={"center"} css={{
            width:"100%",
            height:"100%",
            position:"fixed",
            zIndex:"$emergency",
            backgroundColor:"$errorCon600",
            left:"0",
            top:"0"
        }}>

            <Text css={{
                headline3:"900",
                color:"$onErrorCon",
                
            }}>ARE YOU SURE??</Text>
            <Text css={{
                color:"$onErrorCon",
                headline6:"500",
                padding:"$1"
            }}>This Action 
            <Span css={{headline6:"900"}}> Delete All </Span> 
             The Contain Files  On 
             <Span css={{headline6:"900"
            }}> Folder1</Span>
            </Text>

            <Flex justify={"center"} align="center" css={{
                padding:"$3",
                "&>*":{
                    margin:"0 $1",
                    borderRadius:"8px",
                    cursor:"pointer",
                    border:"1px solid transparent",
                }
            }}>
                <Text css={{
                    color:"$primary",
                    button:"700",
                    "&:hover":{
                        textDecoration:"underline"
                    }

                }}>Cancel</Text>

                <Text css={{
                    color:"$onErrorCon",
                    backgroundColor:"$errorCon",
                    border:"1px solid $onErrorCon",
                    padding:"$1",
                    button:"700",
                    "&:hover":{
                        color:"$errorCon",
                        backgroundColor:"$onErrorCon",
                    }

                                        
                }}>Delete And Dont  Show This Again</Text>

                <Text css={{

                    color:"$onErrorCon",
                    backgroundColor:"$errorCon",
                    border:"1px solid $onErrorCon",
                    padding:"$1",
                    button:"700",
                    "&:hover":{
                        color:"$errorCon",
                        backgroundColor:"$onErrorCon",
                    }

                                        
                }}>DELETE</Text>
            </Flex>


        </Flex>
    )
}


export default DeleteError