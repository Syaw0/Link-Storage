import React from "react";
import { useStore } from "../../../store/store";
import Text from "../../../Styles/styledComponent/Text";
import Ico_AddFile from "../../../asesst/Icons/Ico_AddFile";
import Ico_AddFolder from "../../../asesst/Icons/Ico_AddFolder";
function ContextMenuNav(){

    return(
        <>
        <Text > <Ico_AddFolder width="24" height="24"/> Add Folder</Text>
        <Text ><Ico_AddFile width="24" height="24"/> Add Link File</Text>
        </>
    )
}


export default ContextMenuNav