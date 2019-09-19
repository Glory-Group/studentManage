import React, { Component } from 'react'

export class show extends Component {
    render() {
        return (
            <div className="show" >
                <Head title="重点关注学生考试成绩统计图" bgColor="#0076FF 100%" ></Head>
                <div className="top">
                        <span className="title" >切换班级</span>
                        <span className="title" >1703C</span>
                        <span className="title" >1704E</span>
                        <span className="title" >1703E</span>
                        <span className="title" >创建班级+</span>
                        <p className="btn" >
                            <span className="outSide" >
                                <span className="inSide" onClick={(e)=>{
                                    changStyle(e)
                                }}  ></span>
                            </span>
                            <span className="text" >柱形图/线图</span>
                        </p>
                </div>
                <div className="main" style={{display:flag?'block':'none'}} >
                <div className="content"  >
                   <div className="con-title">
                       <label>
                           添加学生+:
                       </label>
                       <input type="text" placeholder="输入姓名" />
                       <input type="text" placeholder="末位次数" />
                       <input type="text" placeholder="结对子，帮扶对象"  />
                       <button>添加</button>
                   </div>
                   <div id="con-line"></div>
                   <div className="con-btm">
                       <div className="left">
                           <button>添加成绩+</button><button>添加分析和解决方案+</button>
                       </div>
                       <div className="right">
                           <button>查看和编辑该生所有成绩</button>
                       </div>
                   </div>
               </div>
                </div>
               
            </div>
        )
    }
}

export default show
