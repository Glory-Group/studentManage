import React from "react"

const EchartItem =props=>{
	   
    return (
        <div className="con-item">
						<div className="con-line"  ></div>
						<div className="con-btm">
								{props.children}
						</div>
       </div>
    )
}     
export default EchartItem