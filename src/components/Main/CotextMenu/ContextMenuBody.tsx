import React from "react";
import { useStore } from "../../../store/store";
import Text from "../../../Styles/styledComponent/Text";
import Ico_AddLink from "../../../asesst/Icons/Ico_AddLink";
import Ico_EditOrder from "../../../asesst/Icons/Ico_EditOrder";

function ContextMenuBody(){
    const setWhichFloatCom = useStore(state=>state.setWhichFloatCom)
    return(
        <>
        <Text onClick={()=>{setWhichFloatCom("Adding")}} > <Ico_AddLink width="24" height="24"/>Add Link</Text>
        {/* <Text ><Ico_EditOrder width="24" height="24"/>Edit Order</Text> */}
        </>
    )
}


export default ContextMenuBody