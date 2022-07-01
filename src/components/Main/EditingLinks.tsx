import React,{useState , useEffect} from "react";
import { useStore } from "../../store/store";
import Flex from "../../Styles/styledComponent/Flex";
import Input from "../../Styles/styledComponent/Input";
import Text from "../../Styles/styledComponent/Text";

function EditingLinks (){
    const currentContextElement = useStore(state=>state.currentContextElement)
    const [inputs,setInputs] = useState({title:currentContextElement["title"] , url:currentContextElement["url"]  , des:currentContextElement["des"]})
    const setWhichFloatCom = useStore(state=>state.setWhichFloatCom)
    const [handleCreate , setHandleCreate] = useState({display:false , errormssg:""})
    const currentFile = useStore(state=>state.currentBodyFile)
    const currentStorage  = useStore(state=>state.currentStorage)
    const setCurrentBodyFile = useStore(state=>state.setCurrentBodyfile)
    const Db = useStore(state=>state.Db)
    const updateDb = useStore(state=>state.updateDb)


    const HandleAddLinks = ()=>{
        if(inputs.des.trim() !=="" && inputs.title.trim() !=="" && inputs.url.trim() !==""){
            setHandleCreate({display:false , errormssg:""})

            let newLink: {[index:string]:any} = {title:inputs.title , url:inputs.url , des:inputs.des , isStar:false}


            let newArr = currentFile.links.map((v:any)=>{
                if(v.uid === currentContextElement.uid)  {
                    return newLink
                }else{
                    return v
                }
            })

            let newDb
            
            if(currentFile.parent !== "null"){
                newDb = Db.map((v:any)=>{
                    
                    if(v.uid === currentFile.parent){
                        v.subDir.map((v2:any)=>{
                            if(v2.uid === currentFile.uid){
                                v2.links = newArr
                                return v2
                            }else{
                                return v2
                            }
                        })
                        return v
                    }else{
                        return v
                    }
                    
                })
            }else{
                newDb = Db.map((v:any)=>{
                    
                    if(v.uid === currentFile.uid){
                        v.links = newArr
                        return v
                    }else{
                        return v
                    }
                    
                })
            }

            setWhichFloatCom(false)
            updateDb(newDb , currentStorage , false)
            console.log(currentFile)
            setCurrentBodyFile({name:currentFile.name , links:newArr})
        }else{
            setHandleCreate({display:true , errormssg:"inputs must have a value!"})
        }
    }

    return(
        <Flex justify={"center"} align="center" css={{
            width:"100%",
            height:"100%",
            position:"fixed",
            top:"0",
            left:"0",
            backgroundColor:"$primary800",
            zIndex:"$emergency",


        }}>
            <Flex dir={"column"} justify={"center"} align="start" css={{
                minWidth:"50%",
             "&>*":{
              color:"$onPrimary"
             },
             "& input":{
                marginBottom:"$3"
             }
            }}>
                
            <Text css={{
                headline3:"700",
                textDecoration:"underline",
                padding:"$3 0"
            }}>Editing Link</Text>
            

            <Input onChange={(e)=>{setInputs(state=>{return{...state,title:e.target.value}})}} value={inputs.title} placeholder="Your Title like myFavSite " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>
                <Input onChange={(e)=>{setInputs(state=>{return{...state,url:e.target.value}})}} value={inputs.url} placeholder="Your Link Url  " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>
                <Input onChange={(e)=>{setInputs(state=>{return{...state,des:e.target.value}})}} value={inputs.des} placeholder="Your Description  " inputType={"text"} css={{
                borderBottomColor:"$onPrimary300",
                "&:focus":{
                    borderBottomColor:"$onPrimary",
                },
                "&::placeholder":{
                    color:"$onPrimary"
                }
            }}></Input>

                {handleCreate.display && <Flex css={{
                    position:"absolute",
                    left:"5px",
                    bottom:"-35px"
                }}>
                    <Text css={{
                        subhead2:"500",
                        color:"$onErrorCon"
                    }}>{handleCreate.errormssg}</Text>
                </Flex>}

            <Flex justify={"center"} align="center">

            <Text onClick={(e)=>{HandleAddLinks()}} cursor={"click"}  css={{
                color:"$onPrimary",
                backgroundColor:"",
                border:"1px solid $onPrimary",
                padding:"$1",       
                borderRadius:"8px",
                "&:hover":{
                    color:"$primary",
                    backgroundColor:"$onPrimary",
                }

            }}> Edit Link</Text>
            <Text onClick={()=>{setWhichFloatCom(false)}} cursor={"click"} css={{
                color:"$onPrimary",
                backgroundColor:"",
                
                padding:"$1",
                borderRadius:"8px",
                marginLeft:"$2",
                "&:hover":{
                    textDecoration:"underline"
                }

            }}> Cancel</Text>

            </Flex>

            </Flex>
        </Flex>
    )
}



export default EditingLinks