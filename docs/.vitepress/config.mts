import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  lang: "zh-Hans",
  // 站点的标题
  title: "浪淘沙的个人博客",
  // 站点的描述。
  description: "浪淘沙的编程学习之旅",
  // 在页面 HTML 的 <head> 标签中呈现的其他元素
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "./favicon.ico" }]
  ],
  lastUpdated: true,
  // 主体配置
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "学习笔记", link: "/基础/01-html" },
      { text: "需求实现", link: "/进阶/需求实现" },
      { text: "官方网站", link: "/进阶/官方网站" },
      { text: "好文收藏", link: "/进阶/好文收藏" },
      {
        text: "在线工具",
        items: [
          { text: "favicon图标制作", link: "https://www.bitbug.net/" },
          { text: "正则表达式验证", link: "http://www.jsons.cn/reg/" }
        ]
      }
    ],
    // 侧边栏配置
    sidebar: {
      "/基础/": [
        {
          text: "目录",
          items: [
            { text: "HTML", link: "/基础/01-html" },
            { text: "CSS", link: "/基础/02-css" },
            { text: "JavaScript", link: "/基础/03-JavaScript" },
            { text: "jQuery", link: "/基础/04-jQuery" },
            { text: "echarts", link: "/基础/05-echarts" }
          ]
        }
      ]
    },
    logo: "./logo.svg",
    siteTitle: "学无止境！！！",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            displayDetails: "显示详细列表",
            footer: {
              navigateText: "切换",
              selectText: "选择",
              closeText: "关闭"
            }
          }
        }
      }
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    outline: {
      label: "页面导航"
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 浪淘沙`
    },
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }]
  },
  markdown: {
    // 开启代码块的行号
    lineNumbers: true
  }
});
