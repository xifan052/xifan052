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
      {
        text: 'Frontend',
        items: [
          { text: 'Vue', link: '/vue/1.vue框架对比' },
          { text: 'React', link: '/react/1.react环境搭建' },
          { text: 'Typescript', link: '/typescript/1.什么是typescript' },
          { text: '构建工具', link: '/other/vite/vite实践手册' },
        ],
      },
      {
        text: 'Backend',
        items: [
          { text: 'Egg', link: '/backend/egg/1.初入egg' },
          { text: 'Mysql', link: '/backend/mysql备忘录' },
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
        ],
      },
    ],
    sidebar: require('./sidebar'),
  },
}
