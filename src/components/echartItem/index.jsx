import React from "react"

const EchartItem =props=>{
	   
    return (

        <div className="con-item view-item ">
			<div className="con-line view-line "></div>
			<div className="con-btm view-btm ">
					{props.children}
			</div>
       </div>
       
    )

}     
export default EchartItem