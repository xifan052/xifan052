(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{596:function(t,s,a){"use strict";a.r(s);var r=a(13),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue3-入门手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3-入门手册"}},[t._v("#")]),t._v(" vue3 入门手册")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue3 中文网"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"composition-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" Composition API")]),t._v(" "),a("h3",{attrs:{id:"_1-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-setup"}},[t._v("#")]),t._v(" 1. setup")]),t._v(" "),a("p",[t._v("setup 只在初始化时执行一次，所有的 Composition API 函数都在此使用。")]),t._v(" "),a("h4",{attrs:{id:"_1-1-setup-的两个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-setup-的两个参数"}},[t._v("#")]),t._v(" 1.1 setup 的两个参数")]),t._v(" "),a("ul",[a("li",[t._v("props: 是一个对象,里面有父级组件向子级组件传递的数据,并且是在子级组件中使用 props 接收到的所有的属性")]),t._v(" "),a("li",[t._v("context：上下文对象，可以通过 es6 语法解构 "),a("code",[t._v("setup(props, {attrs, slots, emit})")]),t._v(" "),a("ol",[a("li",[t._v("attrs: 获取当前组件标签上所有没有通过 props 接收的属性的对象, 相当于 this.$attrs")]),t._v(" "),a("li",[t._v("slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots")]),t._v(" "),a("li",[t._v("emit: 用来分发自定义事件的函数, 相当于 this.$emit")])])])]),t._v(" "),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),a("blockquote",[a("p",[t._v("vue-router 中文网： "),a("a",{attrs:{href:"https://next.router.vuejs.org/zh/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://next.router.vuejs.org/zh/introduction.html"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_1-获取路由对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取路由对象"}},[t._v("#")]),t._v(" 1. 获取路由对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useRouter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95")]),t._v("\nrouter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用路由事件")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-获取当前路由属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取当前路由属性"}},[t._v("#")]),t._v(" 2. 获取当前路由属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useRoute "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-router'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://next.router.vuejs.org/zh/api/#routelocation")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);