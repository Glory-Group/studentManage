import React, { Component ,useEffect,useState} from 'react'
import Head from "../../components/head/head"
import echart from "echarts"
import "./scss/index.css"
const show =props=> {
    let [flag,setFlag]=useState(true)
    //柱状图显示隐藏
    function  changStyle(e){
            let inSide=e.target;
            let outSide=e.target.parentNode;
             if(flag){
                inSide.style="background:#efefef;left:0;"
                outSide.style="background:#a7a5a6"
                setFlag(false)
             }else{
                inSide.style="background:#5677fc;right:0;"
                outSide.style="background:rgba(86,119,252,.5)"
                setFlag(true)
             }
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
    })
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


export default show
