  import EchartItem from "../../components/echartItem/index"
	import React, { useEffect, useState } from 'react'
	import Mask from "../../components/mask/mask"
	import Head from "../../components/head/head"
	import Btn from "../../components/btn/index"
	import data from "./mock/index"
	import echart from "echarts"
	import "./scss/index.css"

	const titleList = [{ name: "1702D" }, { name: "1703E" }, { name: "1704B" }]

	const show = props => {
	
	//柱状图显示隐藏
	let [flag, setFlag] = useState(true)
	function controlClick(type) {
		setFlag(type)
	}

	//班级列表
	let [title, setTitle] = useState([])
	useEffect(() => {
		setTitle(titleList)
	})

	//渲染图表
	useEffect(() => {
		const myChartList = [...document.querySelectorAll('.con-line')]
		myChartList.forEach((item, index) => {
			let myChart = echart.init(item)
			window.addEventListener("resize", () => {
				myChart.resize()
			});
			myChart.setOption(data[index])
		})
	}, [])

	//蒙层
	let [visible,setVisible]=useState(false)
	let [maskTitle,setMaskTitle]=useState("")
	let [type,setType]=useState("")

	function 	handleOk() {
		setVisible(false)
	}

	function  handleCancel() {
			setVisible(false)
	}

	function addScore() {
		setVisible(true)
		setType("addScore")
		setMaskTitle("新添成绩--XX同学")
	}

	function addPlan(){
		setVisible(true)
		setType("addPlan")
		setMaskTitle("新添分析--XX同学")
	}

	function createClass(){
		setVisible(true)
		setType("createClass")
		setMaskTitle("创建班级--XX班级")
	}

	function addStudent(){
		setVisible(true)
		setType("addStudent")
		setMaskTitle("新添学生--XX同学")
	}

	return (
			<div className="show">
				<div className="top">
					<Head title="重点关注学生考试成绩统计图" bgColor="#0076FF 100%" ></Head>
					<div className="classList">
						<span className="title"> 切换班级 </span>
						{
							title.map((item, index) => {
								return <span className="title" key={index} >{item.name}</span>
							})
						}
						<span className="title" onClick={()=>{ createClass() }} > 创建班级 </span>
						<p className="btn" >
							<span className="outSide">
								<Btn visible={flag} controlClick={controlClick} ></Btn>
							</span>
							<span className="text"> 柱形图/线图 </span>
						</p>
					</div>
					<div className="top-title">
						<label> 添加学生+: </label>
						<input type="text" placeholder="输入姓名" />
						<input type="text" placeholder="末位次数" />
						<input type="text" placeholder="结对子，帮扶对象" />
						<button onClick={()=>{ addStudent()	}} >添加</button>
					</div>
				</div>
				<div className="main" style={{ display: flag ? 'block' : 'none' }} >
					<div className="content">
						{
							data.map((item, index) => {
								return <EchartItem key={index}>
													<div className="left">
															<button onClick={()=>{ addScore() }} > 添加成绩+ </button>
															<button onClick={()=>{ addPlan()	}} > 添加分析和解决方案+ </button>
													</div>
													<div className="right">
															<button>查看和编辑该生所有成绩</button>
													</div>
								       </EchartItem>
							})
						}
					</div>
				</div>
				<Mask 
				  title={maskTitle}
					visible={visible}
					onOk = {handleOk}
					onCancel={ handleCancel}
				>
					{type === "addScore" ? 	<div className="edit-mask">
							<p>  <input type="date"/> <button> 昨天 </button></p>
							<p>  理论  <input type="text" placeholder="数字"/></p>
							<p>  技能  <input type="text" placeholder="0-100之间的数字"/></p>
						</div> : type === "addPlan" ? <div className="edit-mask">
							<p>  <input type="date"/> <button> 昨天 </button></p>
							<p>  分析  <textarea></textarea>  </p>
							<p>  解决方案  <textarea></textarea>  </p>
						</div> : type === "createClass" ? <div className="edit-mask">
							<p>  创建班级  <input type="text" placeholder="班级名称"/></p>
						</div> : type === "addStudent" ? <div className="edit-mask">
							<p>  添加学生  <input type="text" placeholder="学生名字"/></p>
						</div> : <p> 嗯 </p>}
				</Mask>
			</div>
		)
	}
	export default show
