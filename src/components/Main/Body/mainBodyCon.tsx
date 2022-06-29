import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import MainLink from "./mainLink";

function MainBodyCon (){
    return(
        <Flex dir={"column"} justify="start" align={"center"} css={{
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
            <MainLink />
            <MainLink />
            <MainLink />

            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
            <MainLink />
        </Flex>
    )
}


export default MainBodyCon