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
  - title: 热爱自由
    details: 自由就是做自己喜欢的事情。
  - title: 对生活充满激情
    details: 生活可以拮据，理想一定要烂漫。
  - title: 唯物辩证主义
    details: 一切事物一定是辩证的！
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
