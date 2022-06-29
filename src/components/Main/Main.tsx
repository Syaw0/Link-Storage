import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import MainNav from "./Nav/mainNav";
import MainBody from "./Body/mainBody";
import DeleteError from "./DeleteError";
import AddingNewLink from "./AddingNewLink";
function Main (){
    return(
        <Flex justify={"center"} align="center" css={{
            width:"100%",
            height:"100%",
            padding:"0 120px 0 370px",
            
            "@bp1":{
                padding:"0 32px 0 280px",
            },
            "@bp2-1":{
                padding:"0 24px"
            },
            "@bp3":{
                padding:"0 16px"
            },
            "&>*":{
                // border:"1px solid black"
            }
        }}>
            <MainNav/>
            <MainBody/>
            {/* <DeleteError/> */}
            {/* <AddingNewLink/> */}
        </Flex>
    )
}

export default Main