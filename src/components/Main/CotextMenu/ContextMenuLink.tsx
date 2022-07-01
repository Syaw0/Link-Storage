import React from "react";
import { useStore } from "../../../store/store";
import Text from "../../../Styles/styledComponent/Text";
import Ico_EditDb from "../../../asesst/Icons/Ico_EditDb";
import Ico_DeleteLink from "../../../asesst/Icons/Ico_DeleteLink";
function ContextMenuLink(){
    const setWhichFloatCom = useStore(state=>state.setWhichFloatCom)
    const deleteItem = useStore(state=>state.deleteItem)
    return(
        <>
        <Text onClick={(e)=>{console.log(e.target);setWhichFloatCom("Editing")}} > <Ico_EditDb width="24" height="24"/>Edit Link</Text>
        <Text onClick={(e)=>{deleteItem("Link")}}  ><Ico_DeleteLink width="24" height="24"/> Delete Link</Text>
        </>
    )
}


export default ContextMenuLink