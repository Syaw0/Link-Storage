import React from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_AddLink from "../../../asesst/Icons/Ico_AddLink";
import Ico_EditOrder from "../../../asesst/Icons/Ico_EditOrder";
import { useStore } from "../../../store/store";

function MainBodyHead(){
    const currentFile = useStore(state=>state.currentBodyFile)
    const setWhichFloatCom = useStore(state=>state.setWhichFloatCom)
    return(
        <Flex dir={"row"} justify="between" align={"center"} css={{
            width:"100%",
            borderBottom:"1px solid $onBg300",
            height:"52px",


        }}>
            <Flex css={{
                padding:"0 $3",
                "@bp3":{
                    padding:"$1"
                }
            }}>
                <Text css={{
                    headline6:"500"
                }}>
                    {currentFile.name}
                </Text>
            </Flex>

            <Flex dir={"row"} css={{
                padding:" 0 $3",
                "@bp3":{
                    padding:"$1"
                },
                "& svg":{
                    margin:"0 $1",
                    cursor:"pointer",
                    fill:"$onBg700",
                    "&:hover":{
                        
                        fill:"$onBg"
                    }
                },
            }}>
                {currentFile.name !== "" && currentFile.name !== "Setting" && currentFile.name !== "Favorite" &&
                <>
                {/* <Ico_EditOrder click={()=>{}} width="24" height="24"/> */}
                <Ico_AddLink click={()=>{setWhichFloatCom("Adding")}} width="24" height="24"/>
                </>}
            </Flex>
        </Flex>
    )
 
}


export default MainBodyHead