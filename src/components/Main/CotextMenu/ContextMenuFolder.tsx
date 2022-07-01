import React from "react";
import { useStore } from "../../../store/store";
import Text from "../../../Styles/styledComponent/Text";
import Ico_AddFile from "../../../asesst/Icons/Ico_AddFile";
import Ico_EditFolder from "../../../asesst/Icons/Ico_editFolder";
import Ico_Delete from "../../../asesst/Icons/Ico_Delete";
function ContextMenuFolder(){
    
    return(
        <>
        <Text > <Ico_AddFile width="24" height="24"/> Add Link File</Text>
        <Text ><Ico_EditFolder width="24" height="24"/> Edit Folder Name</Text>
        <Text ><Ico_Delete width="24" height="24"/> Delete Folder</Text>
        </>
    )
}


export default ContextMenuFolder