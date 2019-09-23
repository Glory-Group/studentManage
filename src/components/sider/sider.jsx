import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export class sider extends Component {
    render() {
        return (
            <div>
                <NavLink style={{margin:"5px"}} to="/login">登录与注册</NavLink>
                <NavLink style={{margin:"5px"}} to="/show">可视化展示</NavLink>
                <NavLink style={{margin:"5px"}} to="/score">所有成绩</NavLink>
                <NavLink style={{margin:"5px"}} to="/presidentView">院长视角</NavLink>
            </div>
        )
    }
}

export default sider
