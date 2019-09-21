import React, { useEffect , useState } from 'react'
import EchartItem from "../../components/echartItem/index"
import Head from "../../components/head/head"
import Btn from "../../components/btn/index"
import data from "./mock/index"
import echart from "echarts"
import "./scss/index.css"

const titleList=[{name:"1702D"},{name:"1703E"},{name:"1704B"}]

const show =props=> {

    //柱状图显示隐藏
    let [flag,setFlag]=useState(true)
   
    function controlClick(type){
        setFlag(type)
    }

	//控制添加成绩蒙层的显示隐藏
    let [scoreAlert,setSalert]=useState(false)
    function addScore(){
        setSalert(!scoreAlert)
	 }
	 
	 //班级列表
	 let [title,setTitle]=useState([])
	 useEffect(()=>{
		 setTitle(titleList)
	 })

	 //渲染图表
    useEffect(()=>{
				const myChartList=[...document.querySelectorAll('.con-line')] 
			   myChartList.forEach((item,index)=>{
					let myChart=echart.init(item)
					myChart.setOption(data[index])
				})

		},[])
		
        return (		
            <div className="show" >               
                <div className="top" >
                    <Head title="重点关注学生考试成绩统计图" bgColor="#0076FF 100%" ></Head>
                    <div className="classList">
                        <span className="title" >切换班级</span>
											  {
                        title.map((item,index)=>{
                            return <span className="title" key={index} >{item.name}</span>
                        })
                    }
                        <span className="title">创建班级+</span>
                        <p className="btn" >
                        <span className="outSide" > 
                         <Btn visible={flag} controlClick={controlClick} ></Btn>
                        </span>
                        <span className="text" >柱形图/线图</span>
                    </p>
                    </div>
                    <div className="top-title">
                       <label>
                           添加学生+:
                       </label>
                       <input type="text" placeholder="输入姓名" />
                       <input type="text" placeholder="末位次数" />
                       <input type="text" placeholder="结对子，帮扶对象"  />
                       <button>添加</button>
                   </div>
                </div>
                <div className="main" style={{display:flag?'block':'none'}} >
						<div className="content"  >
								{
									data.map((item,index)=>{
										return 	<EchartItem key={index} >
												<div className="left">
													<button>添加成绩+</button><button>添加分析和解决方案+</button>
									</div>
									<div className="right">
													<button>查看和编辑该生所有成绩</button>
									</div>
										</EchartItem>
									})
								}
					  	</div>
                </div>
            </div>
        )
    }
export default show
