import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export class sider extends Component {
    render() {
        return (
            <div>
                <NavLink style={{margin:"5px"}} to="/main/login">登录与注册</NavLink>
                <NavLink style={{margin:"5px"}} to="/visual/show">可视化展示</NavLink>
                <NavLink style={{margin:"5px"}} to="/visual/score">所有成绩</NavLink>
                <NavLink style={{margin:"5px"}} to="/president/presidentView">院长视角</NavLink>
            </div>
        )
    }
}

export default sider
