import React from "react";
import Flex from "../../Styles/styledComponent/Flex";
import Text from "../../Styles/styledComponent/Text";
import Welcome_Choose from "./Wel_Choose";
import Welcome_Create from "./Wel_Create";
import Welcome_Empty from "./Wel_empty";
function Welcome(){
    return(
        <Flex dir={"column"} justify="center" align={"center"} css={{
            width:"100%" , height:"100vh" }}>

            <Flex dir={"column"} justify="start" align={"start"} css={{
                 height:"50%" , minWidth:"400px",
                 "@bp4":{
                    width:"100%",
                    minWidth:"100%",
                    height:"70%",
                    padding:"$2"
                 }}}>

                <Text css={{logo:["700" , "45"] , borderBottom:"2px solid $onBg200" ,width:"100%" , padding:"$1 0"}}>Store Me</Text>
                <Welcome_Choose/>
                {/* <Welcome_Create/> */}
                {/* <Welcome_Empty/> */}
            </Flex>
        </Flex>
    )
}


export default Welcome