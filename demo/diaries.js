var diaries = [
  {
    meta: {  // 内容元数据
      cover: "../../images/LIST/1.jfif",
      avatar: "../../images/LIST/2.jfif",
      title: "此刻静好，愿幸福长存",
      meta: "2020.22.22 22:22:22",
      create_time: "2020.2222",
      nickName: "肥肥的小小居",
    },
    list: [
      {
        type: "TEXT",
        content: '这是第一页嘿嘿~~',
        poi: {
          name: "成都市",
        },
        description: "机场",
        id: 1,
        commentNum: 0,
        likeNum: 0,
      },
      {
          type: "IMAGE",
        content: '../../images/LIST/3.jfif',
          poi: {
              name: "青白江区",
          },
          description: "机场",
          id: 2,
          commentNum: 1,
          likeNum: 5,
      },
      {
        type: "IMAGE",
        content: '../../images/LIST/4.jfif',
        poi: {
          name: "遂宁市",
        },
        description: "车站",
        id: 2,
        commentNum: 1,
        likeNum: 5,
      },
      {
        type: "TEXT",
        content: ' 玉水寨在白沙溪镇，是纳西族中部地区的东巴圣地，是丽江古城的溯源。\n\nTips:门票50元/人，游玩时间2小时。',
        poi: {
          name: "大英县",
        },
        description: "",
        id: 1,
        commentNum: 0,
        likeNum: 0,
      },
      {
        type: "IMAGE",
        content: '../../images/LIST/5.jfif',
        poi: {
          name: "青海省",
        },
        description: "家里",
        id: 2,
        commentNum: 1,
        likeNum: 5,
      },
      {
        type: "VIDEO",
        content: 'http://flv.bn.netease.com/videolib3/1605/22/auDfZ8781/HD/auDfZ8781-mobile.mp4',
        poi: {
          name: "西宁市",
        },
        description: "嘿嘿",
        id: 2,
        commentNum: 10,
        likeNum: 200,
      },
    ]
  },
  {
    meta: {  // 内容元数据
      cover: "../../images/LIST/6.jfif",
      avatar: "../../images/LIST/7.jfif",
      title: "要有多坚强,才敢念念不忘。",
      meta: "2099.9.9",
      create_time: "2099.9.9",
      nickName: "阿蛋",
    },
    list: [
      {
        type: "TEXT",
        content: '这一切',
        poi: {
          name: "成都",
        },
        description: "",
        id: 1,
        commentNum: 0,
        likeNum: 0,
      },
      {
        type: "TEXT",
        content: '还要从那只蝙蝠说起',
        poi: {
          name: "成都",
        },
        description: "",
        id: 1,
        commentNum: 0,
        likeNum: 0,
      },
      {
        type: "IMAGE",
        content: '../../images/LIST/8.jfif',
        poi: {
          name: "塔那那利佛",
        },
        description: "",
        id: 2,
        commentNum: 1,
        likeNum: 5,
      },
    ]
  }
]

module.exports = {
  diaries: diaries,
}
