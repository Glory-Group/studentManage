import React, { Component ,useEffect,useState} from 'react'
import Head from "../../components/head/head"
import {titleRequest,listRequest,showUserInfo} from "../../services/show"
import echart from "echarts"
import Btn from "../../components/btn/index"
import {connect} from "dva"
import "./scss/index.css"
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
	 
    useEffect(()=>{
        const myChart = echart.init(document.getElementById('con-line'));
        myChart.setOption({
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['最高气温','最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        })
    },[])

        return (		
            <div className="show" >
               
                <div className="top" >
                        <Head title="重点关注学生考试成绩统计图" bgColor="#0076FF 100%" ></Head>
                        <div className="classList">
                            <span className="title" >切换班级</span>
                            <span className="title" >1703C</span>
                            <span className="title" >1704E</span>
                            <span className="title" >1703E</span>
                            <span className="title" >创建班级+</span>
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
												
													<div id="con-line"></div>
													<div className="con-btm">
															<div className="left">
																	<button onClick={()=>{
																		addScore()
																	}} >添加成绩+</button><button>添加分析和解决方案+</button>
															</div>
															<div className="right">
																	<button>查看和编辑该生所有成绩</button>
															</div>
													</div>
									  	</div>
                </div>
               <div className="scoreDialog" style={{display:scoreAlert?"block":"none"}} >
								     <div className="mask">
											   <div className="top">
													 <span>新添成绩--XX同学</span><span>X</span>
												 </div>
												 <div className="mid">
													    <div>
																 <input type="text"/><span>昨天</span>
															</div>
															<div>
																<label>
																	技能
																</label>
																<input type="number" placeholder="数字" />
															</div>
															<div>
																<label>
																	理论
																</label>
																<input type="number" placeholder="0-100之间数字" />
															</div>
												 </div>
												 <div className="btm">
													   <button >取消</button>
														 <button>确定</button>
												 </div>
										 </div>
							 </div>
            </div>
        )
    }


export default connect(state=>{
    return {

    }
})(show)
