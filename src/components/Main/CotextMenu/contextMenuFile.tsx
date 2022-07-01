import React from "react";
import { useStore } from "../../../store/store";
import Text from "../../../Styles/styledComponent/Text";
import Ico_EditFile from "../../../asesst/Icons/Ico_EditFile";
import Ico_Delete from "../../../asesst/Icons/Ico_Delete";
function ContextMenuFile(){
    return(
        <>
        <Text > <Ico_EditFile width="24" height="24"/> Edit File Name</Text>
        <Text ><Ico_Delete width="24" height="24"/> Delete Link File</Text>
        </>
    )
}


export default ContextMenuFile