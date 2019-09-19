import React, { useState, useEffect } from 'react'
import Head from "../../components/head/head"
import "./scss/style.css";
import { connect } from "dva";

const Login = props => {
    const [isLogin, setIsLogin] = useState(true)
    const [btnContent, setBtnContent] = useState("登录")
    const [type, setType] = useState("login")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function loginBtn() {
        setBtnContent("登录")
        setIsLogin(true)
        setType("login")
    }
    function registryBtn() {
        setBtnContent("注册")
        setIsLogin(false)
        setType("registry")
    }
    function submit(e) {
        e.preventDefault();
        if (type === "login") {
            console.log(username,"klllllll")
            let params={
                username,password
            }
            props.handleLogin(params)

        } else if (type === "registry") {
            alert(2)
        }
    }
    return (
        <div className="login-container">
            <Head title="重点学生日周考成绩录入管理系统"></Head>
            <div className="login-content">
                <div className="login-inner">
                    <div className="login-content-title">网站工程</div>
                    <nav>
                        <span className={isLogin ? "active nav-btn" : "nav-btn"} onClick={loginBtn}>登录</span>
                        <span className={isLogin ? " nav-btn" : " active nav-btn"} onClick={registryBtn}>注册</span>
                    </nav>
                    <div>
                        <div><input type="text" placeholder="请输入姓名" className="ipt" value={username} onChange={(e)=>setUsername(e.target.value)}/></div>
                        <div><input type="text" placeholder="请输入密码" className="ipt" value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
                        <div style={isLogin ? { visibility: "visible" } : { visibility: "hidden" }}>
                            <input type="checkbox" />
                            <span>两周内自动登录</span>
                        </div>
                        <button className="submit-btn" onClick={submit}>
                            {btnContent}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    handleLogin: (params) => {
        return dispatch({ type: "login/handleLogin",params })
    }
})
export default connect((state) => {
    return {username:state.login.username}

}, mapDispatchToProps)(Login)
