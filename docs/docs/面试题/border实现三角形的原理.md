---
title: border实现三角形的原理
date: 2021-8-16
categories:
  - All
  - 面试题
  - CSS世界
---

当 div 宽高为 0 时，border 会呈现为三角形，设置其中一个 border 颜色，另外三个方向的 border 颜色透明，则实现了 css 三角箭头

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 40px 40px 50px 40px;
        border-color: transparent transparent hotpink transparent;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    </style>
  </head>

  <body>
    <div id="triangle"></div>
  </body>
</html>
```
