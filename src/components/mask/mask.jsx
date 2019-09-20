import React from "react"
import "./scss/style.css"
const Mask = props => {
	let { title, visible, onOk, onCancel } = props
	return (<div>
		{visible && <div className="mask-wrap">
			<div className="mask-container">
				<div className="mask-title">
					{title}
				</div>
				<div className="mask-content">
					{props.children}

				</div>
				<div className="mask-btns">
					<span className="btn cancel-btn" onClick={onCancel}>取消</span>
					<span className="btn sure-btn" onClick={onOk}>确认</span>
				</div>
			</div>
		</div>}

	</div>
	)
}
export default Mask