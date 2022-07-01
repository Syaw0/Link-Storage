import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import MainNav from "./Nav/mainNav";
import MainBody from "./Body/mainBody";
import DeleteError from "./DeleteError";
import AddingNewLink from "./AddingNewLink";
import { useStore } from "../../store/store";
import ContextMenu from "./CotextMenu/ContextMenu";
import EditingLinks from "./EditingLinks";
function Main (){
    const whichFloatCom = useStore(state=>state.whichFloatCom)
    const deleteWhat = useStore(state=>state.deleteWhat)
    const displayContextMenu = useStore(state=>state.displayContextMenu)

    return(
        <Flex  justify={"center"} align="center" css={{
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
            {whichFloatCom === "Adding"  && <AddingNewLink/>}
            {whichFloatCom === "Editing" && <EditingLinks/>}
            {deleteWhat !== "" && <DeleteError/>}
            {displayContextMenu==="show" &&<ContextMenu/>}
        </Flex>
    )
}

export default Main