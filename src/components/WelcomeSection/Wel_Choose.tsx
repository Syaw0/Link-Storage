import React from "react";
import { useStore } from "../../store/store";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Welcome_Choose_Items from "./Wel_Choose_items";


function Welcome_Choose(){
    const setWhichWelcomeSection = useStore(state=>state.setWhichWelcomeSection)
    const setMainCom = useStore(state=>state.setCurrentMainCom)
    const setStorage = useStore(state=>state.setCurrentStorage)
    const AllDb = useStore(state=>state.AllDb)
    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%" , height:"100%", paddingTop:"$5" 
            
            }}>

            <Text data-test="choose-storage" css={{headline4:"600"}}>Choose Your Storage</Text>
            <Flex data-test='choose-storage-holder' dir={"column"} justify="start" align={"start"} css={{
                overflowY:"scroll",
                width:"100%" ,
                marginTop:"$2",
                padding:"$1 0"
            }}>
                {
                    Object.keys(AllDb).map((v,i)=>{
                        return(
                            <Welcome_Choose_Items key={i} text={v} click={()=>{setMainCom("MainPage");setStorage(v)}} />             
                        )
                    })
                }

            </Flex>
            <Flex justify={"center"} align="center" css={{
                width:"100%",
                paddingTop:"$6"
            }}>
                <Text data-test="choose-create"  onClick={()=>{setWhichWelcomeSection("create")}}   cursor={"click"} css={{
                    color:"$onBg500",
                    borderBottom:"1px solid $onBg500",
                    button:"400" ,
                    "&:hover":{
                        color:"$onBg800",
                    }
                }}>Or Create A New Storage</Text>
            </Flex>
        </Flex>
    )
}


export default Welcome_Choose