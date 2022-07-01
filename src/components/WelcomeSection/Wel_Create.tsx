import React ,{useState} from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Input from "../../Styles/styledComponent/Input";
import { useStore } from "../../store/store";
import {v4 as uuid} from "uuid"
function Welcome_Create(){

    const setWhichWelcomeSection = useStore(state=>state.setWhichWelcomeSection)
    const [input,setInput] = useState<string>("")
    const [handleCreate,setHandleCreate] = useState({display:false , errormssg:""})
    const updateDb = useStore(state=>state.updateDb)
    const AllDb = useStore(state=>state.AllDb)

    const createHandle = ()=>{
        if(input.trim()===""){
            setHandleCreate({display:true  , errormssg:"Storage Name must Have Name!" })
        }else if(Object.keys(AllDb).find((v)=>v===input) !== undefined){
            setHandleCreate({display:true  , errormssg:"Storage Name Exist Try Another Name !" })
        }
        else{
            const updatedDb:any = {}
            let uids = {
                folder:uuid(),
                file1:uuid(),
                file2:uuid()
            }
            updatedDb[input] = [
                {tag:"folder",name:"Example Folder",uid:uids["folder"] , subDir:[
                {tag:"file",parent:uids["folder"],name:"File Ex",uid:uids["file1"] , links:[]}]},
                {tag:"file",parent:"null" , name:"File2",uid:uids["file2"] , links:[{title:"w3Code" , url:"w3Code.com" , des:"W3 code is very basic tutorial site for devs " , isStar:false  , uid:uuid()}]}
            ]
            
            updateDb(updatedDb ,input, true)
        }
    }

    return(
        <Flex dir={"column"} justify="start" align={"start"} css={{
            width:"100%" , height:"100%", paddingTop:"$5" 
            
            }}>

            <Text css={{headline4:"600"}}>What is Your Store Name?</Text>
            <Flex  justify="start" align={"start"} css={{
                // overflowY:"hidden",
                width:"100%" ,
                marginTop:"$2",
                padding:"$1 0",
                position:"relative"
            }}>
                <Input value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="like : Prod Links , Book links and etc" inputType={"text"} css={{
                    width:"100%",
                    border:"1px solid $onBg200",
                    borderRadius:"8px",
                    minWidth:"100%",
                    "&:focus":{
                        border:"1px solid $onBg600",
                    }
                }}></Input>

                {handleCreate.display && <Flex css={{
                    position:"absolute",
                    left:"5px",
                    bottom:"-15px"
                }}>
                    <Text css={{
                        subhead2:"500",
                        color:"$onErrorCon"
                    }}>{handleCreate.errormssg}</Text>
                </Flex>}

            </Flex>
            <Flex justify={"around"} align="center" css={{
                width:"100%",
                paddingTop:"$4",
                "@bp4":{
                    flexDirection:"column"
                }

            }}>
                <Text onClick={()=>{Object.keys(AllDb).length === 0 ?setWhichWelcomeSection("empty"):setWhichWelcomeSection("choose")}}   cursor={"click"} css={{
                    color:"$onBg500",
                    button:"700" ,
                    "@bp4":{
                        order:1
                    },
                    "&:hover":{
                        color:"$onBg800",
                    }
                }}>Get Into A Exist Storage</Text>
                 <Text onClick={createHandle}  cursor={"click"} css={{
                    color:"$onPrimary",
                    backgroundColor:"$primary",
                    button:"700" ,
                    padding:"$1 $2",
                    borderRadius:"8px",
                    boxShadow:"$1dp",
                    "@bp4":{
                        order:0,
                        marginBottom:"$2"
                    },
                    "&:hover":{
                        color:"$primary",
                        backgroundColor:"$primary300"
                    },
                    "&:active":{
                        boxShadow:"none"
                    }
                }}>Create Storage</Text>
            </Flex>
        </Flex>
    )
}


export default Welcome_Create