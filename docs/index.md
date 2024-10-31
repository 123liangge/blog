---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "欢迎来到"
  text: "浪淘沙的编程学习之旅"
  tagline: 千淘万漉虽辛苦,吹尽狂沙始到金
  image:
    # 首页右边的图片
    src: /avatar.png
    # 图片的描述
    alt: avatar
  actions:
    - theme: brand
      text: 前端
      link: /frontEnd/01-html
    - theme: alt
      text: 后端
      link: /backEnd/01-java

features:
  - title: 前端
    details: 展示数据和与用户进行交互。
  - title: 后端
    details: 处理客户端发送的请求、与数据库交互、进行业务逻辑处理，并向客户端返回相应的数据或结果。
  - title: 全栈
    details: 能够独立完成一个产品从前端到后端的全部开发工作！
---

<style>
@keyframes rotate {
  0% {
    transform: rotateZ(0);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px); 
}
 .image-src{
  border-radius:50%
} 
.logo{
  animation: rotate 10s  linear infinite;
}
.logo:hover{
  animation: rotate 1s  linear infinite;
}
</style>
