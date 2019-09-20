import React ,{useEffect,useState} from "react"
import { changeExt } from "upath";
const Btn=props=>{
   
    function  changStyle(e){
        let inSide=e.target;
        let outSide=e.target.parentNode;
        let flag = props.visible
         if(flag){
            inSide.style="background:#efefef;left:0;"
            outSide.style="background:#a7a5a6"
            flag=false
         }else{
            inSide.style="background:#5677fc;right:0;"
            outSide.style="background:rgba(86,119,252,.5)"
           flag=true
         }
         props.controlClick(flag)
    }    
    return (
        <span className="inSide" onClick={(e)=>{
            changStyle(e)
        }}  ></span>
    )
   

}

export default Btn