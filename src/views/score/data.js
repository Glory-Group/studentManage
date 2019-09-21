[
    {
        id:1,
        date:"2019-09-20",
        theory:"90",
        technique:"88",
        analysis:"拉克丝京东卡垃圾",
        weekExam:1,
        action:["编辑","删除"]
    },
    {
        id:2,
        date:"2019-09-20",
        theory:"90",
        technique:"88",
        analysis:"拉克丝京东卡垃圾",
        weekExam:1,
        action:["编辑","删除"]
    },
    {
        id:3,
        date:"2019-09-20",
        theory:"90",
        technique:"88",
        analysis:"拉克丝京东卡垃圾",
        weekExam:1,
        action:["编辑","删除"]
    }
]
columns:[
    {
        title:"序号",
        dataSet:"id"
    },
    {
        title:"日期",
        dataSet:"date"
    },
    {
        title:"理论",
        dataSet:"theory"
    },
    {
        title:"技能",
        dataSet:"technique"
    },
    {
        title:"分析和解决",
        dataSet:"analysis"
    },
    {
        title:"是否周考",
        dataSet:"weekExam"
    },
    {
        title:"操作",
        render: (text, record) => (
            <span>
              <a>编辑 {record.name}</a>
              <Divider type="vertical" />
              <a>删除</a>
            </span>
          ),
    }
]