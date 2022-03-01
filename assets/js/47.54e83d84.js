(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{597:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue的项目优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue的项目优化"}},[t._v("#")]),t._v(" vue的项目优化")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000016816813",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack优化"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("① hard-source-webpack-plugin(为模块提供中间缓存步骤)")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * 简介\n   * HardSourceWebpackPlugin是webpack的插件，为模块提供中间缓存步骤。为了查看结果，您需要使用此插件运行webpack两次：第一次构建将花费正常的时间。第二次构建将显着加快（大概提升90%的构建速度）。\n   * 安装\n   * 使用npm install --save-dev hard-source-webpack-plugin或安装yarn add --dev hard-source-webpack-plugin。\n   * 配置\n   * 在vue.config.js里面添加代码\n  */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HardSourceWebpackPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hard-source-webpack-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入包")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加配置")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HardSourceWebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-cli 4.x 配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HardSourceWebpackPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hard-source-webpack-plugin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("configureWebpack")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缓存dll,优化编译速度")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HardSourceWebpackPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_1-均衡页面加载文件的大小和数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-均衡页面加载文件的大小和数量"}},[t._v("#")]),t._v(" 1.均衡页面加载文件的大小和数量")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("① 项目中小图片图片转base64，通过工具如webpack进行图片压缩，文件进行压缩混淆等")])]),t._v(" "),s("li",[s("p",[t._v("② 路由懒加载，异步路由")])]),t._v(" "),s("li",[s("p",[t._v("③ 第三方依赖按需加载，比如使用element-ui框架，但是里面的组件只用到了其中一部分，可以单独建一个引入element组件的文件，在里面引入我们项目中需要的组件，然后vue.use它")])]),t._v(" "),s("li",[s("p",[t._v("④ 通过webpack进行处理，有一个externals属性，可以在里面设置不需要打包的文件，比如可以设置将vue、vue-router、element-ui等等设置进去，打包的时候就不会打包他们，然后将vue、vue-router、element-ui等资源在html中引入")])]),t._v(" "),s("li",[s("p",[t._v("⑤ 可以借助开启gzip压缩文件，减小文件大小")])]),t._v(" "),s("li",[s("p",[t._v("⑥ build关闭sourceMap减小包体积")])])]),t._v(" "),s("h2",{attrs:{id:"_2-数据请求优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据请求优化"}},[t._v("#")]),t._v(" 2.数据请求优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("① 减少请求数量，增加已请求的数据不再重新请求的判断")])]),t._v(" "),s("li",[s("p",[t._v("② 尽可能的使用前端功能完成如排序、筛选之类的功能")])])]),t._v(" "),s("h2",{attrs:{id:"_3-交互视觉提升"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-交互视觉提升"}},[t._v("#")]),t._v(" 3.交互视觉提升")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("① 使用loading动画")])]),t._v(" "),s("li",[s("p",[t._v("② 详情-列表场景可以详情操作列表页面提前完成数据更新，或者将详情数据缓存到本地")])]),t._v(" "),s("li",[s("p",[t._v("③ 资源加载前后使用骨架屏、占位符的方式，优先加载可视区域数据")])])]),t._v(" "),s("h2",{attrs:{id:"_4-善用vue的一些属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-善用vue的一些属性"}},[t._v("#")]),t._v(" 4.善用vue的一些属性")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("① v-if和v-show的合理使用")])]),t._v(" "),s("li",[s("p",[t._v("② keep-live")])])]),t._v(" "),s("h2",{attrs:{id:"_4-代码优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-代码优化"}},[t._v("#")]),t._v(" 4.代码优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("① 提取公共组件，进行组件拆分")])]),t._v(" "),s("li",[s("p",[t._v("② 减少watch的数据量")])]),t._v(" "),s("li",[s("p",[t._v("③ 访问次数多的data属性在方法中使用变量存储")])]),t._v(" "),s("li",[s("p",[t._v("④ 使用频率较少的组件使用局部引入，减小verdor.js体积")])]),t._v(" "),s("li",[s("p",[t._v("⑤ 避免template中使用复杂的表达式，尽可能的写到methonds和computed 中")])]),t._v(" "),s("li",[s("p",[t._v("⑥ 可以通过"),s("a",{attrs:{href:"https://www.jianshu.com/p/56168a779849",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.freeze()"),s("OutboundLink")],1),t._v(" 阻止Vue对这些数据添加双向数据绑定来提高一些性能")])]),t._v(" "),s("li",[s("p",[t._v("⑦ 避免持久化 Store 数据带来的性能问题，localstorage 写入是同步的，而且存在不小的性能开销，如果你想打造 60fps 的应用，就必须避免频繁写入持久化数据")])])]),t._v(" "),s("h2",{attrs:{id:"使用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用插件"}},[t._v("#")]),t._v(" 使用插件")]),t._v(" "),s("ul",[s("li",[t._v("① 对于渲染大量数据可以使用虚拟滚动，使用第三方提供的库vue-virtual-scroller")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://juejin.im/post/5b960fcae51d450e9d645c5f",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 应用性能优化指南"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/xsilence/p/10916845.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue页面性能优化方案"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports}}]);