import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import MainBodyHead from "./mainBody_head";
import MainBodyCon from "./mainBodyCon";
import MainSetting from "./mainSetting";
function MainBody(){
    return(
        <Flex dir={"column"} css={{
            width:"100%",
            height:"100%",
            
        }}>
            <MainBodyHead/>
        <MainBodyCon/>
        {/* <MainSetting/> */}
        </Flex>
    )
}


export default MainBody