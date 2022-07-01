import React,{useState} from "react";
import Flex from "../../../Styles/styledComponent/Flex";
import Text from "../../../Styles/styledComponent/Text";
import Ico_Folder from "../../../asesst/Icons/Ico_folder";
import Ico_ChevronDown from "../../../asesst/Icons/Ico_ChevronDown";
import { useStore } from "../../../store/store";
import Ico_ChevronUp from "../../../asesst/Icons/Ico_ChevronUp";
import HandleContextMenu from "../HandleCotenxtMenu";
function MainNav_mid_Folder(props:{[index:string]:any}){
    const setCurrentBodyfile = useStore(state=>state.setCurrentBodyfile)
    const [isOpen , setIsOpen] = useState(false)
    return(
        <Flex   dir={"column"} css={{
            width:"100%",
            padding:"0 $2 0 0 " ,
            
        }}>

            <Flex onClick={()=>{setIsOpen(state=>!state)}} css={{
                cursor:"click",
                width:"100%",
                padding:"$1",
                borderRadius:"8px",
                
                "&:hover":{
                    backgroundColor:"$onBg100",
                    "&>*":{
                        color:"$onBg",
                        fill:"$onBg"
                    }
                },
                "& svg[class=chevdown] , & svg[class=chevup]":{
                    // marginLeft:"$1",
                    cursor:"pointer",
                    fill:"$onBg600",

                },
                "& svg":{cursor:"pointer"},
                "&>*":{
                    color:"$onBg600",
                    fill:"$onBg600"
                }
            }}>
            <Text onContextMenu={(e)=>{HandleContextMenu(e)}}  role={"onFolder"} cursor={"click"} css={{
                subhead1:"500",
                flex_r:"",
                jfs_ac:"",
                width:"100%",
                "& svg":{
                    marginRight:"$1",
                    cursor:"pointer"
                }
                
            }}>
                <Ico_Folder width="24" height="24"  role={"onFolder"} /> 
                    {props.name}
            </Text>
            {
                    isOpen ?<Ico_ChevronUp  role={"onFolder"} width="24" height="24"/>:<Ico_ChevronDown  role={"onFolder"} width="24" height="24"/>
                }
            </Flex>

            <Flex  dir={"column"} css={{
                height:`${isOpen?"60%":"0px"}`,
                transition:"height 0.4s",
                overflow:"hidden",

                "&>*":{
                    padding:"$1" ,
                    
                }
                }}
            >


                {
                    props.subDir.map((v:any , i:number)=>{
                        
                        return(
                            <Text onContextMenu={(e)=>{HandleContextMenu(e)}} role={"onFile"} onClick={()=>{setCurrentBodyfile({name:v.name , links:v.links , uid:v.uid ,parent:v.parent})}} key={i} cursor={"click"} css={{
                                subhead1:"500" ,
                                marginLeft:"$2",
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
                    })
                }

            {/*  */}
            </Flex>
        </Flex>
    )
}


export default MainNav_mid_Folder