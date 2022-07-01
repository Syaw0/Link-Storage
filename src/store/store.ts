import create from "zustand";

interface Store {
    Db:{[index:string]:any} ;
    AllDb:{[index:string]:any} ;
    setDb():void ;
    updateDb(value:object ,whichStore:string, isCreate?:boolean):void ;
    currentStorage:string ;
    setCurrentStorage:(value:string)=>void ;
    currentMainCom:string ;
    setCurrentMainCom(value:string):void ;
    whichWelcomeSection:string ;
    setWhichWelcomeSection(value:string):void ; 
    currentBodyFile:{[index:string]:any} ;
    setCurrentBodyfile:(value:any)=>void ;
    whichFloatCom:string|boolean ;
    setWhichFloatCom:(value:string|boolean)=>void ;
    currentTheme:string;
    setCurrentTheme:(value:string)=>void;
    deleteWhat:string ;
    setDeleteWhat:(value:string)=>void;
    deleteItem:(item:any)=>void ;
    displayContextMenu:string ;
    setDisplayContextMenu:(value:string , cord?:{x:number , y:number} , target?:string)=>void;
    contextMenuCord:{x:number , y:number} ;
    contextMenuTarget:string ;
    currentContextElement:any ;
    setCurrentContextElement:(value:any)=>void


}

const useStore = create<Store>()((set,get)=>({
    Db:{},
    AllDb:{},
    setDb:()=>{
        if (Object.keys(localStorage).length === 0){
            set(state=>{return{...state , whichWelcomeSection:"empty"}})
        }else{
        set(state=>{return{...state,AllDb:localStorage , whichWelcomeSection:"choose"}})
        }
    },
    updateDb:(value:any ,whichStore:string, isCreate?:boolean)=>{
        
        if(isCreate){
            
            set(state=>{return{...state , AllDb:{...state.AllDb,currentBodyFile:{name:"Favorite" , links:[]} , ...value} , Db:value[whichStore] , currentMainCom:"MainPage" , currentStorage:whichStore}})
            localStorage.setItem(whichStore , JSON.stringify(value[whichStore]))
            console.log("ss",get().Db)
        }else{

            set(state=>{return{...state , Db:value}})
            localStorage.setItem(whichStore , JSON.stringify(value))
        }
    },
    currentStorage:"",
    setCurrentStorage:(value:string)=>{
        console.log("Error happen here " , value)
        set(state=>{
            return{...state,currentStorage:value, currentBodyFile:{name:"Favorite" , links:[]} , Db:JSON.parse(get().AllDb[value]) }
        })
    },
    currentMainCom :"WelcomePage",
    setCurrentMainCom:(value:string)=>set(state=>{return{...state,currentMainCom:value}}),

    whichWelcomeSection:"empty",
    setWhichWelcomeSection:(value:string)=>set(state=>{return{...state,whichWelcomeSection:value}}) ,

    currentBodyFile:{name:"Favorite" , links:[]},
    setCurrentBodyfile:(value:any)=>set(state=>{return{...state,currentBodyFile:value}}) ,
    whichFloatCom:false ,
    setWhichFloatCom:(value:string|boolean)=>set(state=>{return{...state , whichFloatCom:value}}),
    currentTheme:"light",
    setCurrentTheme:(value:string)=>set(state=>{return{...state,currentTheme:value}}) ,
    deleteWhat:"",
    setDeleteWhat:(value:string)=>{
        set(state=>{return{...state,deleteWhat:value}})
    },
    deleteItem:(item:any)=>{
        if(item==="AllStore"){
            let NewDb:any = get().AllDb
            delete NewDb[get().currentStorage]
            localStorage.removeItem(get().currentStorage)
            set(state=>{return{...state,AllDb:NewDb ,currentMainCom:"WelcomePage",whichWelcomeSection:"create" , deleteWhat:"" ,  Db:{} ,currentBodyFile:{name:"Favorite" , links:[]}  } })


        }else if(item === "Link"){
            let currentEl = get().currentContextElement
            let currentFile = get().currentBodyFile
            console.log(currentFile)

            let newArr = currentFile.links.filter((v:any)=>{
                return v.uid !== currentEl.uid
            })


            console.log(newArr)

            let newDb:any
            if(currentFile.parent !== "null"){
                newDb = get().Db.map((v:any)=>{
                    
                    if(v.uid === currentFile.parent){
                        v.subDir.map((v2:any)=>{
                            if(v2.uid === currentFile.uid){
                                console.log("hello")
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
                newDb = get().Db.map((v:any)=>{
                    
                    if(v.uid === currentFile.uid){
                        v.links = newArr
                        return v
                    }else{
                        return v
                    }
                    
                })
            }
            console.log(newDb)
            set(state=>{return{...state , Db:newDb , currentBodyFile:{name:currentFile["name"] , links:newArr}}})
            localStorage.setItem(get().currentStorage , JSON.stringify(newDb) )
        }
    },
    displayContextMenu:"none",
    contextMenuCord:{x:0 , y:0},
    contextMenuTarget:"",
    setDisplayContextMenu:(value:string , cord?:{x:number , y:number} , target?:string)=>{
        
        set(state=>{return{...state,displayContextMenu:value , contextMenuCord:cord , contextMenuTarget:target }})
    },
    currentContextElement:"",
    setCurrentContextElement:(value:any)=>{
        set(state=>{return{...state, currentContextElement:value}})
    }
}))


export {useStore}