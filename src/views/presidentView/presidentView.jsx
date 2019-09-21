import React, { Component,useEffect,useState } from 'react'
import Head from "../../components/head/head"
import EchartItem from "../../components/echartItem/index"
import echart from "echarts"
import data from "./mock/index"
import Btn from "../../components/btn/index"
import "./scss/index.css"

const titleList=[{name:"1702D"},{name:"1703E"},{name:"1704B"},{name:"1609A"},{name:"1701A"},{name:"1606H"},{name:"1702F"}]
 const  presidentView =props=> {
   
    //班级列表
    let [title,setTitle]=useState([])
    //控制分析列表显示隐藏
    let [isShow,setIsShow]=useState(false)
      //控制图表显示隐藏
      let [flag,setFlag]=useState(true)
   
    function controlClick(type){
        setFlag(type)
    }
    function showList(){
       setIsShow(!isShow)
    }

     //渲染图表
     useEffect(()=>{
        setTitle(titleList)
        const myChartList=[...document.querySelectorAll('.con-line')] 
       myChartList.forEach((item,index)=>{
            let myChart=echart.init(item)
            window.addEventListener("resize", () => { 
                myChart.resize()
            });
            myChart.setOption(data[index])
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
								<Btn visible={flag} controlClick={controlClick} ></Btn>   
								</span>
								<span className="text" >柱形图/线图</span>
                        </p>
                      </div>
                        
                  </div>
            </div>
            <div className="main" style={{display:flag?'block':'none'}} >
            <div className="content"  >
             
              {
				data.map((item,index)=>{
					return 	<EchartItem key={index} >
                                <div className="left-view">
					            	<span>2019-08-30</span>
					            	<span>今日分析及解决方案</span>
					            	<span onClick={()=>{
					            			showList()
					            	}}  >点击查看历史纪录</span>
				                </div>
			                	<div className="right-view">
			                			<textarea name="" id=""></textarea>
			                	</div>
                            </EchartItem>
				})
			  }
            
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
