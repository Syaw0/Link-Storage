import { styled } from "./@stitches.config";

const Input = styled("input", {
    variants:{
        "inputType":{
            "text":{
                minWidth:"300px",
                padding:"$1 $2",
                
                border:"none",
                borderBottom:"1px solid $onBg100",
                color:"$onBg700",
                subhead1:"700",
                letterSpacing:"0.5px",
                backgroundColor:"transparent",
                "&:focus":{
                    outline:"none",
                    borderBottom:"1px solid $onBg500",
                },
            
                "&::placeholder":{
                    color:"$onBg500",
                    subhead2_i:"500"
                },
            }
        }
    }
})

export default Input