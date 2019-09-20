import React, { Component,useEffect,useState } from 'react'
import Head from "../../components/head/head"
import echart from "echarts"
import "./scss/index.css"

const titleList=[{name:"1702D"},{name:"1703E"},{name:"1704B"},{name:"1609A"},{name:"1701A"},{name:"1606H"},{name:"1702F"}]
 const  presidentView =props=> {
     //控制图表显示隐藏
    let [flag,setFlag]=useState(true)
    //班级列表
    let [title,setTitle]=useState([])
    //控制分析列表显示隐藏
    let [isShow,setIsShow]=useState(false)
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

    function showList(){
       setIsShow(!isShow)
    }
    useEffect(()=>{
       setTitle(titleList)

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
            <div className="view" >
               
            <div className="top" >
                    <Head title="重点关注学生考试成绩统计图" bgColor="#0076FF 100%" ></Head>
                    <div className="classList">
                        <div className="top-list">
                        <span className="title" >选择班级</span>
                        {
                            title.map((item,index)=>{
                                return <span className="title" key={index} >{item.name}</span>
                            })
                        }
                        </div>
                     
                       <div className="btm-list">
                           <div className="nameList">
                               <label>名单</label>
                               <div className="title">张立</div>
                               <div className="title">张三</div>
                               <div className="title">王强</div>
                               <div className="title">（3/人）</div>
                           </div>
                       <p className="btn" >
                        <span className="outSide" > 
                            <span className="inSide" onClick={(e)=>{
                                changStyle(e)
                            }} ></span>
                        </span>
                        <span className="text" >柱形图/线图</span>
                        </p>
                       </div>
                        
                    </div>
                   
                   

            </div>
            <div className="main" style={{display:flag?'block':'none'}} >
            <div className="content"  >
              
               <div id="con-line"></div>
               <div className="con-btm">
                   <div className="left">
                      <span>2019-08-30</span>
                      <span>今日分析及解决方案</span>
                      <span onClick={()=>{
                          showList()
                      }}  >点击查看历史纪录</span>
                   </div>
                   <div className="right">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                   </div>
               </div>
               <div className="message" style={{display:isShow?"block":"none"}} >
                   <div className="msg-item">
                       <span>2019-09-20</span>
                       <span>aa</span>
                   </div>
                   <div className="msg-item">
                       <span>2019-09-20</span>
                       <span>aa</span>
                   </div>
                   <div className="msg-item">
                       <span>2019-09-20</span>
                       <span>aa</span>
                   </div>
               </div>
           </div>
            </div>
           
        </div>
        )
    
}

export default presidentView
