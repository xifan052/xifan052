module.exports = {
  title: '落日与鲸',
  description: '有一天没一天的升级打怪',
  // theme: 'reco',
  base: '/xifan052/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    logo: '/avatar.jpg',
    subSidebar: 'auto', // 生成子侧边栏
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '满满的技术', // 默认文案 “分类”
      },
    },
    nav: [
      { text: '首页', link: '/' },
      // {
      //   text: 'Frontend',
      //   items: [
      //     { text: 'Vue', link: '/vue/1.vue框架对比' },
      //     { text: 'React', link: '/react/1.react环境搭建' },
      //     { text: 'Typescript', link: '/typescript/1.什么是typescript' },
      //     { text: '构建工具', link: '/other/vite/vite实践手册' },
      //   ],
      // },
      // {
      //   text: 'Backend',
      //   items: [
      //     { text: 'Egg', link: '/backend/egg/1.初入egg' },
      //     { text: 'Mysql', link: '/backend/mysql备忘录' },
      //   ],
      // },
      {
        text: '常用工具',
        items: [
          {
            text: 'TinyPNG-图片压缩',
            link: 'https://tinypng.com',
          },
          {
            text: 'Chrome扩展插件',
            link: 'https://chrome.zzzmh.cn/#/index',
          },
          {
            text: 'html转md',
            link: 'https://www.helloworld.net/html2md',
          },
          {
            text: '百度在线脑图',
            link: 'https://naotu.baidu.com/home',
          },
          {
            text: 'PDF转换工具',
            link: 'https://smallpdf.com/pdf-tools',
          },
          {
            text: 'Emoji大全',
            link: 'https://www.emojiall.com/zh-hans',
          },
        ],
      },
      {
        text: '提神mo🐟',
        items: [
          {
            text: '小霸王街机',
            link: 'https://www.yikm.net/',
          },
          {
            text: '贪吃蛇大作战',
            link: 'http://slither.io/',
          },
          {
            text: '便携小空调',
            link: 'https://ac.yunyoujun.cn/',
          },
          {
            text: '夏日清凉小风扇',
            link: 'https://fan.elpsy.cn/',
          },
        ],
      },
      {
        text: 'Contact',
        items: [
          {
            text: 'Gitee',
            link: 'https://gitee.com/xifan_t',
          },
          { text: 'Github', link: 'https://github.com/xifan052' },
          { text: '掘金', link: 'https://juejin.cn/user/2313028196632446' },
        ],
      },
    ],
    sidebar: require('./sidebar'),
  },
}
