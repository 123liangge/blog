---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "欢迎来到"
  text: "浪淘沙的编程学习之旅"
  tagline: 千淘万漉虽辛苦,吹尽狂沙始到金
  # image:
  #   # 首页右边的图片
  #   src: /avatar.jpg
  #   # 图片的描述
  #   alt: avatar
  actions:
    - theme: brand
      text: 学习笔记
      link: /基础/01-html
    - theme: alt
      text: 需求实现
      link: /进阶/需求实现

features:
  - title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
  - title: 享受 Vite 无可比拟的体验
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。
  - title: 使用 Vue 自定义
    details: 直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px); */
}
/* .image-src{
  border-radius:50%
} */
</style>
