# HTML

## 一、HTML 基本标签

### 1.1 html 标签

整个网页是从`<html>`这里开始的，然后到`</html>`结束

### 1.2 head 标签

head 标签代表页面的“头”，定义一些特殊内容，这些内容往往都是“不可见内容”（在浏览器不可见）。

head 内部常用标签有：

- `<title>`标签：定义网页的标题

- `<meta>`标签：定义网页的基本信息（供搜索引擎）

  ```html
  <meta name="description" content="网页描述" />
  <meta name="keywords" content="网页关键字" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no" />
  <!-- name="viewport"：视窗设置（移动端）；视口宽度 = 设备宽度；设置初始缩放级别为 1.0，即不缩放网页，保持原始大小；用户缩放网页的最小范围；用户缩放网页的最大范围；是否允许用户进行缩放 -->
  ```

- `<style>`标签：定义 CSS 样式

- `<link>`标签：链接外部 CSS 文件或脚本文件

  ```html
  <link rel="stylesheet" href="xxx.css" /> 
  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  ```

- `<script>`标签：定义脚本语言

  ```html
  <script src="xxx.js"></script>
  ```

### 1.3 body 标签

用于展示网页内容的标签

## 二、段落文字标签

|   语义   |        标签         |
| :------: | :-----------------: |
|   标题   |    `<h1>`~`<h6>`    |
|   段落   |        `<p>`        |
|   换行   |       `<br/>`       |
|  水平线  |       `<hr/>`       |
|   加粗   | `<strong>` 或 `<b>` |
|   倾斜   |   `<em>` 或 `<i>`   |
|  下划线  |  `<ins>` 或 `<u>`   |
|  删除线  |  `<del>` 或 `<s>`   |
| 文本上标 |       `<sup>`       |
| 文本下标 |       `<sub>`       |

## 三、布局标签

块级：`<div>`；行内：`<span>`

**html5语义化标签**

头部标签：`<header>`；导航标签：`<nav>`；尾部标签：`<footer>`

侧边栏标签：`<aside>`；块级标签：`<section>`；内容标签：`<article>`

## 四、媒体标签

图像标签：`<img src="资源路径" alt="图片加载失败的提示信息" title="提示文本" />`

音频标签（html5）：`<audio src="资源路径" controls loop autoplay></audio>`

video视频标签（html5）:`<video src="资源路径" controls loop autoplay muted preload="auto" poster="url加载等待的画面图片"></video>`

controls：显示音频控制面板；loop：循环播放；autoplay：自动播放（一般禁用）

muted：静音播放；preload：auto(预先加载视频）none(不应加载视频) ， 规定是否预加载视频；poster：加载等待的画面图片

## 五、列表标签

有序列表：`<ol> <li><li/> <ol/>`

无序列表：`<ul> <li><li/> <ul/>`

定义列表：

```html
<dl>
	<dt>标题</dt>
	<dd>详情</dd>
</dl>
```

自定义列表的着重号样式：

```css
ol {
  list-style-image: 用来指定一个能用来作为列表元素标记的图片;
  list-style-position: 指定标记框在主体块框中的位置;
  list-style-type: 设置列表元素的 marker（比如圆点、符号、或者自定义计数器样式）;
}
```

## 六、表格标签

简单表格：table 嵌套 tr(行)，tr 嵌套 td(内容) / th(表头)

```html
<table>
  <tr>
    <th>name</th>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

完整表格：

```html
<table>
  <caption> 表格标题 </caption>
    <!-- thead表格头部 -->
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
    <!-- tbody表格主体 -->
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
    <!-- tfoot表格底部 -->
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>
```

合并单元格：

- 跨行合并，保留最上单元格， td / th添加属性 rowspan

- 跨列合并，保留最左单元格， td / th添加属性 colspan

- 提示：只能向下、右合并

合并表格边框线：

```css
table {
  border-collapse: collapse;
}
```

## 七、表单标签

### form标签：

```html
<form action="url" method="post" enctype="multipart/form-data" name="name"></form>
```

enctype属性，编码类型

### input 标签

```html
  <!-- text文本框，用于输入单行文本 -->
  <input type="text" />
  <!-- password密码框 -->
  <input type="password" placeholder="提示信息" />
  <!-- radio单选框 -->
  <input type="radio" name="" id="">
  <!-- checkbox多选框 -->
  <input type="checkbox" name="" id="">
  <!-- file上传文件,默认上传一个文件，multiple实现多个上传 -->
  <input type="file" name="" id="">
```

修改placeholder样式`input::placeholder{css属性}`

### button标签

```html
<button type="submit">提交(默认)</button>
<input type="submit" value="提交" />
<button type="reset">重置</button>
<input type="reset" value="重置" />
```

### select 标签

```html
<select name="pets" id="pet-select">
  <option selected value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
```

### textarea标签

```html
<textarea cols="宽" rows="高">默认提示文字</textarea>
```

消文本域拖拽（css）：resize：none；

### label标签

作用：增大表单控件的点击范围。

```html
  <!-- 写法一 -->
  <input type="radio" id="man">
  <label for="man">男</label>
  <!-- 写法二 -->
  <label><input type="radio"> 女</label>
```

## 八、超链接标签

```html
<a href="javascript(void(0))" target="_blank" title="提示文本"></a>
```

## 九、标签分类

### 块标签：

常见的块标签有：`<div>,<ul><ol>,<li>,<p>,<h1~h6>`

特点：独占一行，宽度默认是父级的100%，添加宽高属性生效

### 行标签：

常见的行标签有：`<span>,<i>,<b>,<sub>,<sup>,<em>,<strong>,<a>`

特点：一行可以显示多个，设置宽高属性不生效，宽高尺寸由内容撑开

## 十、特殊字符

空格：`&nbsp`

小于号：`&lt`

大于号：`&gt`

引号：`&quot`

版权声明：`&copy`
