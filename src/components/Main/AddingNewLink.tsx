import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Input from "../../Styles/styledComponent/Input";
import Text from "../../Styles/styledComponent/Text";

function AddingNewLink (){
    return(
        <Flex justify={"center"} align="center" css={{
            width:"100%",
            height:"100%",
            position:"fixed",
            top:"0",
            left:"0",
            backgroundColor:"$primary800",
            zIndex:"$emergency",


        }}>
            <Flex dir={"column"} justify={"center"} align="start" css={{
                minWidth:"50%",
             "&>*":{
              color:"$onPrimary"
             },
             "& input":{
                marginBottom:"$3"
             }
            }}>
                
            <Text css={{
                headline3:"700",
                textDecoration:"underline",
                padding:"$3 0"
            }}>Adding New Link</Text>
            

            <Input placeholder="Your Title like myFavSite " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>
                        <Input placeholder="Your Link Url  " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>
                        <Input placeholder="Your Description  " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>

            <Flex justify={"center"} align="center">

            <Text cursor={"click"}  css={{
                color:"$onPrimary",
                backgroundColor:"",
                border:"1px solid $onPrimary",
                padding:"$1",
                borderRadius:"8px",
                "&:hover":{
                    color:"$primary",
                    backgroundColor:"$onPrimary",
                }

            }}> Add Link</Text>
            <Text cursor={"click"} css={{
                color:"$onPrimary",
                backgroundColor:"",
                
                padding:"$1",
                borderRadius:"8px",
                marginLeft:"$2",
                "&:hover":{
                    textDecoration:"underline"
                }

            }}> Cancel</Text>

            </Flex>

            </Flex>
        </Flex>
    )
}



export default AddingNewLink