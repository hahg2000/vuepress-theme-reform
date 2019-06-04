module.exports = {
  title: "JsShou",  
  themeConfig: {
    repo: "https://github.com/xuzhongpeng",
    editLinkText: "有问题，联系我",
    tags:"tags",
    gitTalk: {
      // gitalk的主要参数
      clientID: `972da8d2645faa50d52f`,
      clientSecret: `3bb5ccc06745b2933fb030546de6793f4edace6a`,
      repo: `gitalk-repository`,
      owner: "xuzhongpeng",
      admin: ["JSShou"]
    }, 
    markdown: {
      anchor: { permalink: true },
    },
    nav: [
      { text: "主页", link: "/" ,icon:'jia'},
      {
        text: "博文",
        icon:'zhi',
        items: [
          { text: "前端", link: "/blog/frontend/" },
          { text: "计算机基础", link: "/blog/computer/"}
        ]
      },
      {
        text: "文档",
        icon:'shuben',
        items: [
          {
            text: "弹幕插件文档",
            link: "/document/barrage/"
          }
        ]
      },
      {
        text:"标签云",
        link:'/tags/',
        tags:true
      },
      { text: "关于我", link: "/about/" }
    ],
    sidebar:'auto',
    sidebarDepth: 5,
    lastUpdated: "Last Updated"
  }
};