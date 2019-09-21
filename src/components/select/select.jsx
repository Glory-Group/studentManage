import React, { useState } from "react"
import "./scss/style.css"
const Select = props => {
    let { options, selectTitle, chooseTitle } = props
    const [isShow, setIsShow] = useState(false)
    const [chooseIndex, setChooseIndex] = useState(-1)
    function chooseItem(item, index) {
        setChooseIndex(index)
        chooseTitle(item)
    }
    return (
        <div className="select-container">
            <div className="select-show" onClick={() => { setIsShow(!isShow) }}>
                <span className="select-show-content">{selectTitle ? selectTitle : options[0]}</span>
                <span className="select-show-dot">
                    {isShow ? "▲" : "▼"}
                </span>
            </div>
            {isShow && <div className="select-content">
                {options.map((item, index) =>
                    <p key={index}
                        className={chooseIndex === index ? "select-item active" : "select-item"}
                        onClick={() => chooseItem(item, index)} >
                        {item}
                    </p>)}
            </div>
            }
        </div>
    )
}

export default Select;