import React,{useState} from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_ChevronDown from "../../../asesst/Icons/Ico_ChevronDown";
import MainNav_mid_Folder from "./mainNav_mid_folder";
import { useStore } from "../../../store/store";
import Ico_ChevronUp from "../../../asesst/Icons/Ico_ChevronUp";
import HandleContextMenu from "../HandleCotenxtMenu";


function MainNav_Middle(){
    const currentStorage = useStore(state=>state.currentStorage)
    const Db = useStore(state=>state.Db)
    const setCurrentBodyfile = useStore(state=>state.setCurrentBodyfile)
    const [isOpen , setIsOpen] = useState(false)


    return(
        <Flex role={"onBoxNav"} onContextMenu={(e)=>{HandleContextMenu(e)}} dir={"column"} css={{
            padding:"$3 0 0 $1",
            height:"100%",
            
            }}>
            <Text onClick={()=>{setIsOpen(state=>!state)}} cursor={"click"} css={{
                flex_r:"" , jfs_ac:"",
                color:"$onBg",
                headline6:"600",
                "& svg":{
                    marginLeft:"$1",
                    fill:"$onBg"
                }
            }}>
                {currentStorage}
                {
                    isOpen ?<Ico_ChevronUp  role={""} width="24" height="24"/>:<Ico_ChevronDown  role={""} width="24" height="24"/>
                }
            
             </Text>
            <Flex role={"onBoxNav"} dir={"column"} css={{
                // height:"60%",
                overflowY:"scroll",
                marginTop:"0",
                borderBottom:"1px solid $onBg100",
                padding:"$1 0",
                height:`${isOpen?"60%":"0px"}`,
                transition:"height 0.5s"
            }}>


                {

                    Db.map((v:any,i:number)=>{
                        
                            if(v.tag === "file"){
                                return(
                                    <Text onContextMenu={(e)=>{HandleContextMenu(e)}} role={"onFile"} onClick={()=>{setCurrentBodyfile({name:v.name , links:v.links, uid:v.uid , parent:v.parent})}} key={i} cursor={"click"} css={{
                                        subhead1:"500" ,
                                        borderRadius:"8px",
                                        padding:"$1",
                                        flex_c:"",
                                        textAlign:"left",
                                        color:"$onBg500",
                                         "&:hover":{
                                            backgroundColor:"$onBg100",
                                            color:"$onBg"
                                         }
                                        }}>{v.name}</Text> 
                                )
                            }else if(v.tag === "folder"){
                                return (<MainNav_mid_Folder key={i} {...v} />)
                            }
                    })
                }
   
            </Flex>

        </Flex>
    ) 
}



export default MainNav_Middle