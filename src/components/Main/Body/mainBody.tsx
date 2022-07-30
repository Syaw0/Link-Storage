import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import MainBodyHead from "./mainBody_head";
import MainBodyCon from "./mainBodyCon";
import MainSetting from "./mainSetting";
import { useStore } from "../../../store/store";
function MainBody(){
    const currentBodyFile = useStore(state=>state.currentBodyFile)
    return(
        <Flex data-test='main' dir={"column"} css={{
            width:"100%",
            height:"100%",
            
        }}>
            <MainBodyHead/>
        {currentBodyFile["name"]!== "Setting" && <MainBodyCon/>}
        {currentBodyFile["name"]==="Setting" && <MainSetting/>}
        </Flex>
    )    
}


export default MainBody