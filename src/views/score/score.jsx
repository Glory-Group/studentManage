import React, { Component } from 'react'
import Head from "../../components/head/head"
import mockjs from "mockjs"
import "./scss/style.css"
import Table from "../../components/table/table"
import Mask from "@/components/mask/mask"
export class score extends Component {
  state = {
    visible: false,
    type: '',//保存点击按钮的类型 编辑/删除
    title:"",
    data: mockjs.mock({
      'list|10': [
        {
          'id|+1': 1,
          date: "2019-09-20",
          theory: "90",
          technique: "88",
          analysis: "@cword(8)",
          weekExam: '是'
          
        }
      ]
    }),
    columns: [
      {
        title: "序号",
        dataSet: "id"
      },
      {
        title: "日期",
        dataSet: "date"
      },
      {
        title: "理论",
        dataSet: "theory"
      },
      {
        title: "技能",
        dataSet: "technique"
      },
      {
        title: "分析和解决",
        dataSet: "analysis"
      },
      {
        title: "是否周考",
        dataSet: "weekExam"
      },
      {
        title: "操作",
        render: (text) => (
          <span>
            <a onClick={() => this.edit(text)}>编辑</a>
            |
            <a onClick={() => this.delete(text)}>删除</a>
          </span>
        ),

      }
    ]
  }
  edit = (text) => {
    this.setState({
      visible: true,
      type: "edit",
      title:"编辑内容"
    })
  }
  delete = (text) => {
    this.setState({
      visible: true,
      type: "delete",
      title:"删除内容"
    })
  }
  handleOk = () => {
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    let { data, columns, visible ,title,type} = this.state
    return (
      <div className="score-wrap">
        <Head title="XX学生日周考试成绩统计表"></Head>
        <div className="score-container">
          <div className="score-top">
            <div className="score-top-left">
              <span className="score-teacher">
                讲师：
              </span>
              <span className="score-student">
                学生：
               </span>
            </div>
            <div className="score-top-right">
              <select name="" id=" " className="select-student">
                <option value="">
                  快捷选择其他学生
              </option>
              </select>
            </div>
          </div>
          <div className="score-content">
            <Table data={data.list} columns={columns}></Table>

          </div>
        </div>
        <Mask title={title}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        {type==="edit"?
        <div className="edit-mask">
        <p>理论<b>解决方案</b> <input type="text" placeholder="0-100之间的数字"/> </p>
        <p>技能<b>解决方案</b> <input type="text" placeholder="0-100之间的数字"/> </p>
        <p>分析解决方案 <textarea name="" id="" cols="30" rows="10"></textarea> </p>
        </div>
        :<p>你确定删除吗</p>}
          
        </Mask>
      </div>
    )
  }
}

export default score
