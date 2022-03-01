(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{591:function(s,t,a){"use strict";a.r(t);var e=a(13),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-环境搭建及初步使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-环境搭建及初步使用"}},[s._v("#")]),s._v(" vue 环境搭建及初步使用")]),s._v(" "),a("h2",{attrs:{id:"vue-环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-环境搭建"}},[s._v("#")]),s._v(" vue 环境搭建")]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[s._v("1.下载安装node")])]),s._v(" "),a("p",[s._v("在 nodejs"),a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1),s._v("下载正式版安装包，根据提示按照步骤安装")]),s._v(" "),a("ul",[a("li",[s._v("2.替换 npm 源")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry.npm.taobao.org\n")])])]),a("ul",[a("li",[s._v("3.安装 vue-cli 脚手架")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue-cli 2.x安装")]),s._v("\n  cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vue-cli -g\n  选取项目文件夹\n  cmd进入项目文件夹，执行 vue init webpack + 项目名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue-cli 3.x/4.x安装")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall vue-cli -g "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果之前没有装旧版本可忽略"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @vue/cli\n  选取项目文件夹\n  vue create + 项目名称\n  vue --version 检查版本是否安装正确\n")])])]),a("ul",[a("li",[s._v("4.安装浏览器调试工具"),a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue devtools"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用npm安装")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack webpack-cli –g "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如首次安装环境需安装webpack")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Or "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you are using "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" as the package manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用yarn安装")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装yarn")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org --global "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置淘宝镜像")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" disturl https://npm.taobao.org/dist --global "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置淘宝镜像")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config get registry （如果上面配置正确这个命令会输出淘宝镜像地址）\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run build\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######################")]),s._v("\n  Open Chrome extension page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("打开谷歌扩展页面"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Check "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"developer mode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("打开开发者模式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Click "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"load unpacked extension"')]),s._v(", and choose shells/chrome."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("点击“加载已解压的扩展程序”，选择shells/chrome文件夹"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"脚手架初步使用及介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚手架初步使用及介绍"}},[s._v("#")]),s._v(" 脚手架初步使用及介绍")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"cli3-cli4-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli3-cli4-优点"}},[s._v("#")]),s._v(" cli3/cli4 优点")]),s._v(" "),a("ul",[a("li",[s._v("可以使用 loadsh 语法")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" VALUE %"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 用来做不转义插值；\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("%- VALUE %"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 用来做 HTML 转义插值；\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("% expression %"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 用来描述 JavaScript 流程控制。\n\n")])])]),a("ul",[a("li",[s._v("preload 预先加载")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。\n\n")])])]),a("ul",[a("li",[s._v("prefetch 空闲加载")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rel")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"prefetch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。\n")])])]),a("ul",[a("li",[a("p",[s._v("兼容低版浏览器，可自动打包两个包。支持 ES2015+ 的浏览器一个包，不支持 ES2015+ 的浏览器一个包")])]),s._v(" "),a("li",[a("p",[s._v("隐藏了大部分 webpack 的配置，简化配置")])])]),s._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("ul",[a("li",[s._v("使用 vue create + 项目名称 创建新项目")]),s._v(" "),a("li",[s._v("通过 vue ui 命令以图形化界面创建和管理项目")]),s._v(" "),a("li",[s._v("使用 "),a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue add + 插件名称"),a("OutboundLink")],1),s._v(" 安装 cli 插件")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("例如：\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vue/eslint  //安装eslint\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" router   //安装router\nvue "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuex   //安装vuex\n")])])]),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("ul",[a("li",[s._v("首先选择配置方案(default:默认配置，Manually select features:手动配置)")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Please pick a preset: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" default "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("babel, eslint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n")])])]),a("ul",[a("li",[s._v("选择需要安装的插件")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Babel\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" TypeScript\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Progressive Web App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Support\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Router\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Vuex\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" CSS Pre-processors\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Linter / Formatter\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Unit Testing\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" E2E Testing\n\n")])])]),a("ul",[a("li",[s._v("到这再重新确认一遍刚刚选择的配置，然后选择要不要使用 history mode，一般都是用hash")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Y/n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("ul",[a("li",[s._v("到这就是选择要使用哪种 css 预编译器")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Yes\n? Pick a CSS pre-processor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Sass/SCSS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("with dart-sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Sass/SCSS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("with node-sass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Less\n  Stylus\n")])])]),a("ul",[a("li",[s._v("选择 ESLint 代码校验规则，提供一个插件化的 javascript 代码检测工具，这里我选择的是 ESLint + Prettier")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Yes\n? Pick a CSS pre-processor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Less\n? Pick a linter / formatter config: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ESLint with error prevention only\n  ESLint + Airbnb config\n  ESLint + Standard config\n  ESLint + Prettier\n")])])]),a("ul",[a("li",[s._v("选择什么时候进行代码校验(Lint on save:保存就检查,Lint and fix on commit:fix 或者 commit 的时候检查)")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Yes\n? Pick a CSS pre-processor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Less\n? Pick a linter / formatter config: Prettier\n? Pick additional lint features:\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Lint on save\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Lint and fix on commit\n\n")])])]),a("ul",[a("li",[s._v("这里就是选择保存配置放在哪个文件中,第一个表示存放到独立文件中，第二个表示存放到 package.json，这里选择 package.json")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Yes\n? Pick a CSS pre-processor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Less\n? Pick a linter / formatter config: Prettier\n? Pick additional lint features: Lint on save\n? Where "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you prefer placing config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Babel, ESLint, etc.? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Use arrow keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  In dedicated config files\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" In package.json\n\n")])])]),a("ul",[a("li",[s._v("这里就是选择要不要保存项目配置放在下一个项目使用，这个看个人意愿，一般就直接下次再配置就行了")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("? Please pick a preset: Manually "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" features\n? Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project: Babel, Router, Vuex, CSS Pre-processors, Linter\n? Use "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" mode "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" router? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Requires proper server setup "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" index fallback "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" production"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Yes\n? Pick a CSS pre-processor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PostCSS, Autoprefixer and CSS Modules are supported by default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Less\n? Pick a linter / formatter config: Prettier\n? Pick additional lint features: Lint on save\n? Where "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you prefer placing config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Babel, ESLint, etc.? In package.json\n? Save this as a preset "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" future projects? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);