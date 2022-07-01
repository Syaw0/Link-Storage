import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Span from "../../Styles/styledComponent/Span";
import { useStore } from "../../store/store";
import darkTheme from "../../Styles/theme/darkTheme";
function DeleteError(){
    const texts:{[index:string]:any}= {
        AllStore:<Text css={{
            color:"$onErrorCon",
            headline6:"500",
            padding:"$1",
            [`.${darkTheme} &`]:{
                color:"$errorCon",
            }
        }}>Careful , This Action Will 
        <Span css={{headline6:"900"}}> Delete All </Span> 
         The Data From Your Store
        </Text> ,
        Folder:<Text css={{
            color:"$onErrorCon",
            headline6:"500",
            padding:"$1"
        }}>This Action 
        <Span css={{headline6:"900"}}> Delete All </Span> 
         The Contain Files  On 
         <Span css={{headline6:"900"
        }}> Folder1</Span>
        </Text> ,


    }
    const deleteWhat = useStore(state=>state.deleteWhat)
    const setDeleteWhat = useStore(state=>state.setDeleteWhat)
    const deleteItem = useStore(state=>state.deleteItem)
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
                [`.${darkTheme} &`]:{
                    color:"$errorCon",
                }
                
            }}>ARE YOU SURE??</Text>
          {
            texts[deleteWhat]
          }

            <Flex justify={"center"} align="center" css={{
                padding:"$3",
                "&>*":{
                    margin:"0 $1",
                    borderRadius:"8px",
                    cursor:"pointer",
                    border:"1px solid transparent",
                }
            }}>
                <Text onClick={()=>{setDeleteWhat("")}} css={{
                    color:"$primary",
                    button:"700",
                    "&:hover":{
                        textDecoration:"underline"
                    }

                }}>Cancel</Text>

                {deleteWhat !== "AllStore" && 
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
                }

                <Text onClick={()=>{deleteItem(deleteWhat)}} css={{

                    color:"$onErrorCon",
                    backgroundColor:"$errorCon",
                    border:"1px solid $onErrorCon",
                    padding:"$1",
                    button:"700",
                    "&:hover":{
                        color:"$errorCon",
                        backgroundColor:"$onErrorCon",
                    }

                                        
                }}>Delete</Text>
            </Flex>


        </Flex>
    )
}


export default DeleteError