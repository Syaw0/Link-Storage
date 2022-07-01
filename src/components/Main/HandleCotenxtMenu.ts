import { useStore } from "../../store/store"

const setDisplayContextMenu = useStore.getState().setDisplayContextMenu
const setCurrentContextElement = useStore.getState().setCurrentContextElement


function HandleContextMenu(e:any , data?:any){
    e.preventDefault()
    // console.log(data)
    // console.log(e.target.parentNode)
    // console.log(e.currentTarget)
        // console.log(e.target.attributes.role.value)
    if(e.target.attributes.role !== undefined){

    setDisplayContextMenu("show" , {x:e.pageX , y:e.pageY} , e.target.attributes.role.value)
    }else{

        setDisplayContextMenu("show" , {x:e.pageX , y:e.pageY} , e.target.parentNode.attributes.role.value)
    }
    if(data !== undefined){
        setCurrentContextElement(data)
    }

}
export default HandleContextMenu