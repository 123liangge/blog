# JavaScript

## 一、数据类型

### 1.1 原始数据类型

1. `undefined`表示值未定义；
2. `Null`表示值为null；
3. `boolean`表示值为布尔值；
4. `string`表示值为字符串；
5. `number`表示值为数值；
6. `symbol`表示值为符号。

### 1.2 操作符

1. `typeof`：判断原始数据类型

   ```js
   let message = "some string"; 
   console.log(typeof message); // "string"
   ```

   注意：typeof不能区分数组和对象，都会返回object

2. `instanceof`：判断引用数据类型

   ```js
   [] instanceof Array //true
   ```

3. `isNaN()`：判断是否不是数值

   ```js
   console.log(isNaN(10)); // false，10 是数值
   ```

4. `isArray()`，判断是否为数组

   ```js
   console.log(isArray(10)); // false，10 是数值
   ```

5. `!!`：逻辑非：只返回true或false

   ```js
   console.log(!!"blue"); // true 
   console.log(!!0); // false
   ```

6. `&&`：逻辑与：一假则假，短路特性：如果第一个操作数决定了结果，那么永远不会对第二个操作数求值

   ```js
   let result = true && false; // false
   ```

7. `||`：逻辑或：一真则真，短路特性

   ```js
   let result = true && false; // true 
   ```

8. `?:`：条件操作符

   ```js
   let max = (num1 > num2) ? num1 : num2;
   ```

9. `…`：将一个数组/对象进行展开

10. `?`“：条件式属性访问

    ```js
    a? . b
    // 如果a是null或undefined,那么整个表达式求值结果为undefined,不会尝试访问属性b
    // 如果a是其他值，则a?.b求值为a.b的值(如果a没有名为b的属性，则整个表达式的值还是undefined)
    ```

### 1.3 运算符

`+`、`-`、` *` 、`/ `、`%`、`>`、`<`、`=`、`==`、`===`、`!==`、`++`、`--`、`&`、`|`、`!`、`>=`、`<=`、`+=`、`-=`、`*=`、`/=`、`%=`

### 1.4 类型转换

隐式转换：

1. 任何数据和字符串相加结果都是字符串
2. +号作为正号解析可以转换成数字型
3. 除了+以外的算术运算符 比如 - * / 等都会把数据转成数字类型

显式转换：

① 转换为数字型

- `Number(value)`：强制转换
- `parseInt(value)`：只保留整数
- `parseFloat(value)`：可以保留小数

② 转换为字符型

- `String(value)`

- `value.toString()`：传值可转换进制

③ 转换为布尔型

- `Boolean(value)`
- ''、0、undefined、null、false、NaN 转换为布尔值后都是false, 其余则为 true

### 1.5 基本引用类型

1. `Date`

   时间戳：指1970年01月01日00时00分00秒起至现在的毫秒数

   ```js
   +new Date(); // 返回时间戳
   +new Date(2013, 0, 1, 0, 0, 0, 0); //将日期对象转换成时间戳
   new Date().toLocaleString(); // 2022/4/1 09:41:21
   new Date().getFullYear(); //返回年
   new Date().getMonth() + 1; //返回月(月从0开始，需加1)
   new Date().getDate(); //返回日
   new Date().getHours(); //返回小时
   new Date().getMinutes(); //返回分钟
   new Date().getSeconds(); //返回秒
   new Date().getDay(); //返回日期中表示周几的数值（0 表示周日，6 表示周六）
   ```

2. `RegExp`：正则表达式

3. 原始包装类型

   - `Boolean`

   - `Number`

     toFixed()方法返回包含指定小数点位数的数值字符串,四舍五入

     ```js
     let num = 10.005; 
     console.log(num.toFixed(2)); // "10.01"
     ```

   - `String`

     ![](./images/03-1.png)

4. 单例内置对象

   - `Global`

   - `Math`

     ![](./images/03-2.png)

### 1.6 集合引用类型

1. `Object`

   - `Object.keys(Obj)`，静态方法，获取对象中所有属性，返回数组
   - `Object.values(Obj)`，静态方法，获取对象中所有属性值，返回数组
   - `Object. assign(Obj)`，静态方法，对象拷贝（浅拷贝）
   - `obj.key`或`obj.[key]`，取出键中值

2. `Array`

   - 转换方法：`arr.toString()`返回有逗号分割的字符串

   - 栈方法

     - `arr.push()`方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度
     - `arr.pop()`方法用于删除数组的最后一项，同时减少数组的 length 值，返回被删除的项

   - 队列方法

     - `arr.shift()`，它会删除数组的第一项并返回它，然后数组长度减 1
     - `arr.unshift()`，在数组开头添加任意多个值，然后返回新的数组长度。

   - 排序方法

     - `arr.reverse()`，将数组元素反向排列

     - `arr.sort()`，默认按照升序重新排列数组元素

       ```js
       // 升序
       arr.sort((a, b) => a - b);
       // 降序
       arr.sort((a, b) => b - a);
       ```

       注意：均返回调用它们的数组的引用，即原数组会发生改变

   - 操作方法

     - `arr.slice(start,end)`，截取,返回新数组，不包括end，不改变原数组

   - 搜索和位置方法

     - `arr.indexOf(value)`，方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1
     - `arr.lastIndexOf(value)`， 方法返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1
     - `arr.includes(value)`，确定数组是否包含指定的元素，方法返回 true，否则返回 false
     - `arr.find(callback)`，返回数组中第一个通过测试的元素的值
     - `arr.findIndex(callback)`，方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1

   - 迭代方法

     - `arr.every(callback)`：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true
     - `arr.filter(callback)`：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回
     - `arr.forEach(callback)`：对数组每一项都运行传入的函数，没有返回值
     - `arr.map(callback)`：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组
     - `arr.some(callback)`：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true

   - 归并方法

     - `arr.reduce((上一次值，当前值)=>{},起始值)`，累加器，返回函数累计处理的结果，经常用于求和等（循环原理）
     
   - 其他

     - `arr[index]`：使用下标取出值
     - `Array.from()`：将集合转成数组，静态方法

3. Map

   ![](./images/03-3.png)

4. Set

   ![](./images/03-4.png)

5. WeakMap

6. WeakSet

7. 定型数组

## 二、语句

### 2.1 if

```js
if (i > 25) { 
 console.log("Greater than 25."); 
} else if (i < 0) { 
 console.log("Less than 0."); 
} else { 
 console.log("Between 0 and 25, inclusive."); 
}
```

### 2.2  do-while

后测试循环语句，循环体内的代码至少执行一次

```js
let i = 0; 
do { 
 i += 2; 
} while (i < 10);
// 只要 i 小于 10，循环就会重复执行
```

### 2.3 while

先测试循环语句，即先检测退出条件，再执行循环体内的代码

```js
let i = 0; 
while (i < 10) { 
 i += 2; 
}
```

### 2.4 for

先测试语句

```js
let count = 10; 
for (let i = 0; i < count; i++) { 
 console.log(i); 
}
```

### 2.5 for-in

用于遍历对象

```js
const person = {
  name: "张三",
  age: 30,
  city: "北京"
};

for (const key in person) {
  // key用于存储当前遍历到的属性名
  console.log(key + ": " + person[key]);
}
```

### 2.6  for-of

用于遍历可迭代对象（如数组、字符串、Map、Set等）的元素

```js
const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  console.log(value);
}
```

### 2.7 break 和 continue

break 语句用于立即退出循环，强制执行循环后的下一条语句。而 continue 语句也用于立即退出循环，但会再次从循环顶部开始执行。

### 2.8  switch

注意： break不可忽略

```js
switch (i) { 
 case 25: 
 console.log("25"); 
 break; 
 case 35: 
 console.log("35"); 
 break; 
 case 45: 
 console.log("45"); 
 break; 
 default: 
 console.log("Other"); 
}
```

## 三、面向对象

### 3.1 基本概念

- 面向对象编程（OOP）：将程序的逻辑划分为对象，每个对象包含数据（属性）和操作（方法），特点：封装，继承，多态。


- 面向过程编程：将程序的逻辑划分为一系列的过程或函数，每个函数执行特定的任务。


- 工厂模式：提供了一种创建对象的方式，使得创建对象的过程与使用对象的过程分离。


- 单例模式：确保一个类只有一个实例，并提供了一个全局访问点来访问该实例。

- 观察者模式：一种行为型设计模式，它定义了一种一对多的依赖关系，当一个对象的状态发生改变时，其所有依赖者都会收到通知并自动更新。

- MVC 模式：代表 Model-View-Controller（模型-视图-控制器） 模式。这种模式用于应用程序的分层开发。

### 3.2 创建对象

- 直接字面量

  ```js
  let user = {
      id: 1,
      username: 'tom',
      age: 20,
      gender: '女',
      info() {
        console.log(`{ id: ${this.id}, username: "${this.username}", age: ${this.age}, gender: "${this.gender}" }`)
      },
    }
  user.info() // { id: 1, username: "tom", age: 20, gender: "女" }
  ```

- 使用Object构造函数创建对象

  ```js
  let user = new Object()
    user.username = 'tom'
    user.age = 20
    user.id = 1
    user.gender = '男'
    user.show = function () {
      console.log(`{ id: ${this.id}, username: "${this.username}", age: ${this.age}, gender: "${this.gender}" }`)
    }
    // 调用函数show
    user.show() // { id: 1, username: "tom", age: 20, gender: "男" }
  ```

- 工厂模式

  ```js
   let $ = function (id, username, age, gender) {
      let object = new Object()
      object.id = id
      object.username = username
      object.age = age
      object.gender = gender
      object.show = function () {
        console.log(`{ id: ${this.id}, username: "${this.username}", age: ${this.age}, gender: "${this.gender}" }`)
      }
      return object
    }
  
    let user = $(1, 'wenddy', 19, 'female')
    user.show() // { id: 1, username: "wenddy", age: 19, gender: "female" }
    let user1 = $(2, 'tom', 20, 'male')
    user1.show() // { id: 2, username: "tom", age: 20, gender: "male" }
  ```

- 构造函数模式

  ```js
  // 首字母大写的构造函数(constructor): 用于创建对象并对对象的属性进行赋值(初始化)的函数
    function User(id, username, age, gender) {
      this.id = id
      this.username = username
      this.age = age
      this.gender = gender
      this.show = function () {
        console.log(`{ id: ${this.id}, username: "${this.username}", age: ${this.age}, gender: "${this.gender}" }`)
      }
      // 构造函数中this: 是使用构造函数创建的对象本身
    }
    let user = new User(1, 'wenddy', 19, 'female') // { id: 1, username: "wenddy", age: 19, gender: "female" }
    user.show()
  ```

- 原型模式
- 使用class创建对象

### 3.3 继承

- 原型链

- 组合继承

- 原型式继承

- 寄生式继承

- 寄生式组合继承

### 3.4 类

类的构成：类可以包含构造函数方法、实例方法、获取函数、设置函数和静态类方法

## 四、函数

### 4.1 基本概念

函数声明：function

函数返回值：return

函数作用域：局部作用域，全局作用域，访问原则：就近原则，先局部后全局

立即执行函数：`;(function(形参){函数体}）（实参）`:无需调用，直接执行

箭头函数：( ) => { }

匿名函数：function()

函数提升：函数提升与变量提升比较类似，是指函数在声明之前即可被调用

闭包：引用了另一个函数作用域中变量的函310 第 10 章 函 数数，通常是在嵌套函数中实现的。

### 4.2 箭头函数

- 如果只有一个参数，那也可以不用括号。只有没有参数，或者多个参数的情况下，才需要使用括号

  ```js
  // 以下两种写法都有效
  let double = (x) => { return 2 * x; }; 
  let triple = x => { return 3 * x; }; 
  // 没有参数需要括号
  let getRandom = () => { return Math.random(); }; 
  // 多个参数需要括号
  let sum = (a, b) => { return a + b; };
  ```

- 如果函数体只有一行代码，可以写到一行上，并且无需写 return 直接返回值

  ```js
  const fn = x => console.log(x)
  ```

- 加括号的函数体返回对象字面量表达式

  ```js
  const fn = (uname) => ({uname:uname})
  ```

- 箭头函数this：箭头函数不会创建自己的this,它只会从自己的作用域链的上一层沿用this。

- 注意：箭头函数不能使用 arguments、super 和new.target，也不能用作构造函数，dom事件函数。此外，箭头函数也没有 prototype 属性。

### 4.3 函数参数

- 默认参数

  在函数定义中的参数后面用=就可以为参数赋一个默认值；

  给参数传 undefined 相当于没有传值，

  在使用默认参数时，arguments 对象的值不反映参数的默认值，只反映传给函数的参数。

  ```js
  function makeKing(name = 'Henry', numerals = 'VIII') { 
   return `King ${name} ${numerals}`; 
  }
  ```

- 动态参数

  当我们不确定有多少个参数传递的时候，可以用` arguments` 来获取，arguments类型为伪数组，箭头函数无此对象。

  ```js
  // 获取最大数
  function maxValue() {
   var max = arguments[0];
   for (var i = 0; i < arguments.length; i++) {
   if (max < arguments[i]) {
   max = arguments[i];
   }
   }
   return max;
  }
  console.log(maxValue(2, 4, 5, 9));
  console.log(maxValue(12, 4, 9));
  ```

- 扩展参数

  剩余参数允许我们将一个不定数量的参数表示为一个数组。

  ```js
  let getSum = (...values) => { 
   return values.reduce((x, y) => x + y, 0); 
  } 
  console.log(getSum(1,2,3)); // 6
  ```

### 4.3 回调函数与递归函数

- 回调函数：如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数

  ```js
  const B = (A) => A()
  ```

- 递归函数：函数内部自己调用自己, 这个函数就是递归函数，必须要加退出条件 return

  ```js
  function factorial(num) { 
   if (num <= 1) { 
   return 1; 
   } else { 
   return num * factorial(num - 1); 
   } 
  }
  ```

### 4.4 apply、call、bind

相同点：都用于改变函数调用上下文（即this指向）的方法，。

不同点：

- **参数形式**

  **call**：第一个参数是this的指向，后面传入的是一个参数列表

  **apply**：第一个参数也是this的指向，但第二个参数必须是数组或者类数组对象，用以表示传递给被调用函数的参数

  **bind**：第一参数是this的指向，后续参数可以分多次传入，并且不会立即执行，而是返回一个永久改变this指向的新函数

- **执行方式**

  **call**：改变this指向后会立即执行函数

  **apply**：与call类似，也会在改变this指向后立即执行函数

  **bind**：不会立即执行，而是返回一个新的绑定了this的函数

- **返回值**

  **call**：函数本身的执行结果

  **apply**：与call相同，返回函数执行的结果

  **bind**：不执行函数，而是返回一个新函数

  ```js
  //例如：
  const obj = {}//定义一个空的对象
  function f(x, y) {
     console.log(x, y)
     console.log(this) //this是指obj
  }
  f.apply(obj, [1, 2]) //后面的值需要用[]括起来
  f.call(obj, 1, 2) //直接写
  f.bind(obj, 1, 2)()
  ```

应用：

- 判断数据类型(可判断arr,obj) `Object.prototype.toString.call( )`

  ```js
  console.log(Object.prototype.toString.call("qq"))            // [Object String] 返回值都是字符串类型
  ```

- 求最大值 `Math.max.apply( )`

  ```js
  const arr =[2,6,8,3,4,9,7,23,56,889]; 
  console.log(Math.max.apply(arr,arr)) //第一个arr表示让arr借用max这个方法，第二个arr表示传给max的数据
  
  //apply()所执行的操作：1.执行Math.max(1,2,3,5,4) 2.把内部的this改成arr
  ```

## 五、期约与异步函数

## 六、BOM

BOM(Browser Object Model浏览器对象模型)。

### 6.1 window对象

BOM 的核心是 window 对象，表示浏览器的实例。网页中定义的所有对象、变量和函数都以 window 作为其 Global 对象。

- 窗口大小：`window.innerWidth` 和 `window.innerHeight`
- 视口位置：`window.pageXoffset/window. scrollX` 和 `window.pageYoffset/window.scrollY`
- 导航与打开新窗口：`window.open()`方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口，接收 4个参数：要加载的 URL、目标窗口、特性字符串和表示新窗口在浏览器历史记录中是否替代当前加载页面的布尔值。通常，调用这个方法时只传前 3 个参数，最后一个参数只有在不打开新窗口时才会使用。
- 定时器与间歇函数：`setTimeout(callback,time)`，`clearTimeout(id)`，`setInterval(callback,time)`，`clearInterval(id)`
- 系统对话框：`alert()`、`confirm()`和 `prompt()`

### 6.2 location对象

location 是最有用的 BOM 对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能。它既是 window 的属性，也是 document 的属性。也就是说，`window.location` 和 `document.location` 指向同一个对象。

假设浏览器当前加载的 URL 是 http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q= javascript#contents，location 对象的内容如下表所示，注意：除了 hash 之外，只要修改 location 的一个属性，就会导致页面重新加载新 URL。

![](./images/03-10.png)

**操作地址**：

- 立即启动导航到新 URL 的操作

  `location.assign("http://www.wrox.com")`

  `window.location = "http://www.wrox.com"`

  `location.href = "http://www.wrox.com"`

- 重新加载后不会增加历史记录,调用 replace()之后，用户不能回到前一页

   `location.replace("http://www.wrox.com/")`

- 重新加载当前显示的页面

  `location.reload()`： 重新加载，可能是从缓存加载

  `location.reload(true)`： 重新加载，从服务器加载

### 6.3 navigator对象

navigator 对象的属性通常用于确定浏览器的类型；示例：

```js
// 检测 userAgent（浏览器信息）
!(function () {
const userAgent = navigator.userAgent
// 验证是否为Android或iPhone
const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
// 如果是Android或iPhone，则跳转至移动站点
if (android || iphone) {
location.href = 'http://m.itcast.cn' }
})()
```

### 6.4 screen对象

这个对象中保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度。

![](./images/03-11.png)

### 6.5 history对象

history 对象表示当前窗口首次使用以来用户的导航历史记录。history 对象还有一个 length 属性，表示历史记录中有多个条目。这个属性反映了历史记录的数量，包括可以前进和后退的页面。

1. 导航

   `go()`方法可以在用户历史记录中沿任何方向导航

   `history.go(-1)`与`history.back()`：后退一页

   `history.go(1)`与`history.forward()`：前进一页

   `history.go(2)`：前进两页

   `history.go("wrox.com")`：导航到最近的 wrox.com 页面

2. 历史状态管理

   hashchange 事件会在页面 URL 的散列变化时被触发，开发者可以在此时执行某些操作。而状态管理API 则可以让开发者改变浏览器 URL 而不会加载新页面。`history.pushState()`接收 3 个参数：一个 state 对象、一个新状态的标题和一个（可选的）相对 URL。pushState()方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相对 URL，会创建新的历史记录。

## 七、DOM

### 7.1 基本概念

**Dom**：文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口。DOM是浏览器提供的一套专门用来 操作网页内容 的功能。

### 7.2 Dom节点

**节点分类**

- 元素节点，比如 div标签

- 属性节点，比如 class属性

- 文本节点，比如标签里面的文字

**节点信息**

- nodeName：节点名称，获取标签返回大写标签名

  ```html
  <div class="box">
      <ul id="nodeList" style="color:red;">
          <!--注释信息-->
        <li>nodeName信息</li>
        <li>nodeValue</li>
        <li>nodeType</li>
      </ul>
      <p id="xswz">赏识</p>
  </div>
  <script>
      let ul = document.getElementById('nodeList')
      // 1-1 ul的节点名称
      console.log(ul.nodeName) // UL
      // 1-2 获得ul对象的id节点
      let attr = ul.getAttributeNode('id')
      console.log(attr.nodeName) // id
      // 1-3 获得注释节点名称
      let comments = ul.firstChild
      console.log(comments.nodeName) // #comment
      // 1-4 获得文本节点名称
      let text = ul.firstElementChild.firstChild
      console.log(text.nodeName) // #text
      // 1-5 文档节点的名称
      console.log(document.nodeName) // #document
      // 1-6 文档类型声明节点
      console.log(document.firstChild.nodeName) // html
      // 1-7 html元素
      let html = document.getElementsByTagName('html')[0]
      console.log(html.nodeName) // HTML
  </script>
  ```

- nodeType：节点类型

  - `1===Node.ELEMENT_NODE`；元素

  - `2===Node.ATTRIBUTE_NODE`；属性

  - `3===Node.TEXT_NODE`；文本

  - `8===Node.COMMENT_NODE`；注释

  - `9===Node.DOCUMENT_NODE`；文档

    ```html
    <div class="box">
        <ul id="nodeList" style="color:red;"><!--注释信息-->
          <li>nodeName信息</li>
          <li>nodeValue</li>
          <li>nodeType</li>
        </ul>
        <p id="xswz">赏识</p>
    </div>
    <script>
        let ul = document.getElementById('nodeList')
        // 2-1 ul的节点类型
        console.log(ul.nodeType) // 1
        // 2-2 获得ul对象的id节点类型
        let attr = ul.getAttributeNode('id')
        console.log(attr.nodeType) // 2
        // 2-3 获得注释节点类型
        let comments = ul.firstChild
        console.log(comments.nodeType) // 8
        // 2-4 获得文本节点类型
        let text = ul.firstElementChild.firstChild
        console.log(text.nodeType) // 3
        // 2-5 文档节点的节点类型
        console.log(document.nodeType) // 9
        // 2-6 文档类型声明节点类型
        console.log(document.firstChild.nodeType) // 10
        // 2-7 判断html元素节点类型
        let html = document.getElementsByTagName('html')[0]
        console.log(html.nodeType === Node.ELEMENT_NODE) // true
    </script>
    ```

- nodeValue：节点值；属性节点，文本节点，注释节点是有nodeValue，其它基本都是null

  ```html
  <div class="box">
      <ul id="nodeList" style="color:red;"><!--注释信息-->
        <li>nodeName信息</li>
        <li>nodeValue</li>
        <li>nodeType</li>
      </ul>
      <p id="xswz">赏识</p>
  </div>
  <script>
      let ul = document.getElementById('nodeList')
      // 3-1 ul的节点类型
      console.log(ul.nodeValue) // null
      // 3-2 获得ul对象的id节点类型
      let attr = ul.getAttributeNode('id')
      console.log(attr.nodeValue) // nodeList
      // 3-3 获得注释节点类型
      let comments = ul.firstChild
      console.log(comments.nodeValue) // 注释信息
      // 3-4 获得文本节点类型
      let text = ul.firstElementChild.firstChild
      console.log(text.nodeValue) // nodeName信息
      // 3-5 文档节点的节点类型
      console.log(document.nodeValue) // null
      // 3-6 文档类型声明节点类型
      console.log(document.firstChild.nodeValue) // null
      // 3-7 html元素节点类型
      let html = document.getElementsByTagName('html')[0]
      console.log(html.nodeValue) // null
  </script>
  ```

**节点操作**

1. 节点关系及获取

   ![](./images/03-5.png)

2. 操纵节点

   - 获取节点

     - 父节点查找：`子元素.parentNode`；返回最近一级的父节点 找不到返回为null

     - 子节点查找

       - `父元素.childNodes`：获得所有子节点、包括文本节点（空格、换行）、注释节点等

       - `父元素.children`：获取所有子元素，返回伪数组，只读

       - `父元素.firstChild`：第一个子节点/父元素.firstElementChild第一个子元素
       - `父元素.lastChild`：最后一个子节点/父元素.lastElementChild最后一个子元素

     - 兄弟节点查找

       - `.nextSibling`：下一个节点/.nextElementSibling：下一个元素

       - `.previousSibling`：上一个节点/.previousElementSibling：上一个元素

   - 创建节点

     - 创建元素节点：`document.createElement('div')`
     - 创建文本节点：`document.createTextNode('文本')`

   - 删除节点

     - 父元素.removeChild(要删除的元素)

     - ```js
       var parentElement = document.getElementById('parent'); // 获取父元素
       var childElement = document.getElementById('child'); // 获取子元素
       parentElement.removeChild(childElement); // 从父元素中删除子元素
       ```

     - 元素.remove()，删除自身，无参数

   - 追加节点

     - `父元素.appendChild(要插入的元素)` ；插到父元素最后
     - `父元素.insertBefore( 要插入的元素 , 在哪个元素前面)`；插到某个子元素前面
     - `父元素.append(要插入的元素，文本)` ；插到父元素最后，可接受多个参数
     - `父元素.prepend(要插入的元素，文本)` ；插到父元素前面，可接受多个参数
     - `兄弟.after(参数)/before(参数)`，插到兄弟后/前，可接受多个参数

   - 替换节点

     - `父元素.replaceChild(newNode,oldNode)`
     - `oldNode.replaceWith(newNode)`可接受多个参数

   - 克隆节点

     - `元素.cloneNode(布尔值)`
     - true，后代节点一起克隆
     - false，后代节点不克隆,默认为false

   - 操作节点属性

     - `.getAttribute("id")`；获取id属性值
     - `.setAttribute("href","http://www.baidu.com")`；设置属性值
     - `.removeAttribute( 'class','active')`；移除属性值
     - `.attributes` 获取属性集合

3. 其他

   ```js
   // 读取文档标题
   let originalTitle = document.title;
   // 修改文档标题
   document.title = "New page title";
   // 取得完整的 URL 
   let url = document.URL;
   // 取得域名
   let domain = document.domain;
   // 取得来源
   let referrer = document.referrer;
   ```

### 7.3 Dom操作

1. 获取DOM对象

   - 根据CSS选择器来获取DOM元素

     - `document.querySelector('css选择器')`：页面首次出现的单个元素对象，

     - 提示：在 Document 上使用 querySelector()方法时，会从文档元素开始搜索；在 Element 上使用

       querySelector()方法时，则只会从当前元素的后代中查询。

     - `document.querySelectorAll('css选择器')`：页面出现所有元素集合（nodeList）;参数可用逗号隔开

   - 其他获取DOM元素方法

     - `document.getElementById('id')`；通过id名获取单个元素

     - `document.getElementsByTagName('标签名')`；通过标签名找元素，获得集合
     - `document.getElementsByClassName('类名')`；通过类名找元素，获得集合
     - `document.getElementsByName()`;方法返回拥有指定名称的元素集合

   - 获取特殊元素

     - `document.body`；获取body

     - `document.documentElement` ；获取HTML

2. 操作元素内容

   - `Element.innerText ='值'`：将文本内容添加/更新到任意标签位置，显示纯文本，不解析标签
   - `Element.innerHTML='值'`：将文本内容添加/更新到任意标签位置，会解析标签，多标签建议使用模板字符
   - `Element.textContent='值'`：修改元素文本内容
   - 提示：表单不可用

3. 操作元素属性

   - 操作元素常用属性

     - 最常见的属性比如： href、title、src 等；语法：Element.属性=值

   - 操作元素样式属性

     - 通过 style 属性操作CSS

       - 语法：`Element.style.样式属性='值'`

       - 生成行内样式表，权重比较高

       - 如果属性有-连接符，需要转换为小驼峰命名法

     - 操作类名(className) 操作CSS

       - 语法：`Element.className='css类名'`
       - className是使用新值换旧值

     - 通过 classList 操作类控制CSS

       - `Element.classList.add('类名')`；追加一个类

       - `Element.classList.remove('类名')`；删除一个类

       - `Element.classList.toggle('类名')`；切换一个类

       - `Element.classList.contains('类名')`；包含类，常用于事件委托/判断

       - 类名不用加.

     - `getComputedStyle(元素,null)`：获取所有样式，返回对象，仅支持读并不支持写入

   - 操作表单元素属性

     - 表单很多情况，也需要修改属性，比如点击眼睛，可以看到密码，本质是把表单类型转换为文本框，正常的有属性有取值的 跟其他的标签属性没有任何区别

     - 表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示 如果为true 代表添加了该属性 如果是false 代表移除了该属性，比如： disabled（禁用）、checked、selected；eg：`btn.disabled=true`

   - 操作自定义属性

     在html5中推出来了专门的data-自定义属性：`<div data-id="123"></div>`，在标签上一律以data-开头

     在DOM对象上一律以dataset对象方式获取：`console.log(document.querySelector("div").dataset.id)//123`

4. 获取元素尺寸与位置

   - 偏移尺寸

     ![](./images/03-6.png)

     - `offsetHeight`，元素在垂直方向上占用的像素尺寸，包括它的高度、水平滚动条高度（如果可见）和上、下边框的高度。
     - `offsetWidth`，元素在水平方向上占用的像素尺寸，包括它的宽度、垂直滚动条宽度（如果可见）和左、右边框的宽度。
     - `offsetTop`，元素上边框外侧距离包含元素上边框内侧的像素数。
     - `offsetLeft`，元素左边框外侧距离包含元素左边框内侧的像素数。
     - 注意：offsetLeft 和 offsetTop 是相对于包含元素的，包含元素保存在 offsetParent 属性中。

   - 客户端尺寸

     ![](./images/03-7.png)

     客户端尺寸实际上就是元素内部的空间，因此不包含**滚动条**占用的空间。这两个属性最常用于确定浏览器视口尺寸，即检测 `document.documentElement` 的 `clientWidth` 和 `clientHeight`。这两个属性表示视口（`<html>`或`<body>`元素）的尺寸。

   - 滚动尺寸

     ![](./images/03-8.png)

     有些元素，比如`<html>`无须任何代码就可以自动滚动，而其他元素则需要使用 CSS 的 overflow 属性令其滚动。滚动尺寸相关的属性有如下 4 个。

     - `scrollHeight`，只读，没有滚动条出现时，元素内容的总高度。
     - `scrollWidth`，只读，没有滚动条出现时，元素内容的总宽度。
     - `scrollLeft`，可写，内容区左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置。
     - `scrollTop`，可写，内容区顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置。

   - 确定元素尺寸

     ![](./images/03-9.png)

     浏览器在每个元素上都暴露了 `getBoundingClientRect()`方法，返回一个 DOMRect 对象（只读），包含6 个属性：left、top、right、bottom、height 和 width。这些属性给出了元素在页面中相对于视口的位置。

## 八、事件

### 8.1 事件流

- 事件冒泡：当一个元素的事件被触发时，所有祖先元素依次被触发，事件冒泡是默认存在的。

- 事件捕获：所有祖先元素依次触发，目标元素最后被触发。

### 8.2 事件绑定

绑定的三种方式

- HTML事件绑定

  ```html
  <input type="button" value="Click Me" onclick="callBack()"/>
  ```

- DOM0事件绑定

  语法：`事件源.on事件 = function() { }`

  ```js
  let btn = document.getElementById("myBtn"); 
  btn.onclick = function() { 
   console.log("Clicked"); 
   console.log(this) // this 指向元素本身
  };
  btn.onclick = null; // 移除事件处理程序
  ```

- DOM2事件绑定

  语法：`事件源.addEventListener(event， callBack，Boolean)`

  接收 3 个参数：事件名、事件处理函数和一个布尔值，true 表示在捕获阶段调用事件处理程序，false（默认值）表示在冒泡阶段调用事件处理程序；

  ```js
  let btn = document.getElementById("myBtn");
      btn.addEventListener("click", () => {
        // callBack采用箭头函数，this指向外层作用域，即Window
        console.log(this); // Window
      });
      /* 取消事件监听 */
      let handler = function () {
        console.log(this);
      };
      btn.addEventListener("click", handler);
      // 其他代码
      btn.removeEventListener("click", handler);
  ```

### 8.3 事件对象

获取事件对象：语法：`元素.addEventListener('click', function (e) {  console.log(e)  })`

![](./images/03-12.png)

![](./images/03-13.png)

在事件处理程序内部，this 对象始终等于 currentTarget 的值，而 target 只包含事件的实际目标。

```js
let btn = document.getElementById("myBtn"); 
btn.onclick = function(event) { 
 console.log(event.currentTarget === this); // true 
 console.log(event.target === this); // true 
};
```

常用方法：

- 阻止冒泡：`e.stopPropagation()`此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效。
- 阻止特定事件的默认动作：`e.preventDefault()`或事件回调函数`return false`
- `e.clientX/e.clientY`：获取光标相对于浏览器可见窗口左上角的位置
- `e.offsetX/e.offsetY`：获取光标相对于当前DOM元素左上角的位置
- `e.key`：用户按下的键盘键的值；现在不提倡使用keyCode
- `event.target.nodeName`：获取事件触发元素标签名
- `event.target.id`：获取事件触发元素id
- `event.target.className`：获取事件触发元素classname
- `event.target.innerHTML`：获取事件触发元素的内容（li）
- `e.target.files[0]`：点击的文件
- `e.target.classList.contains('类名')`：判断点击对象是否包含类
- `e.target.value`

### 8.4 事件类型

- 用户界面事件

  - `load`：在 window 对象上，load 事件会在整个页面（包括所有外部资源如图片、JavaScript 文件和 CSS 文件）加载完成后触发，也可以针对某个资源绑定load事件
  - `unload`：在文档卸载完成后触发即从一个页面导航到另一个页面时触发，最常用于清理引用，以避免内存泄漏。
  - `beforeunload`：该事件在关闭或刷新网页之前触发
  - `DOMContentLoaded`：当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像等完全加载。
  - `resize`：当浏览器窗口缩放时会触发 resize 事件。
  - `scroll`：滚动条在滚动的时候持续触发的事件比如固定导航栏，比如返回顶部。

- 鼠标事件

  - `clic`k：鼠标单击
  - `dblclick` ：鼠标双击
  - `contextmenu`：右键事件
  - `mousedown`：鼠标按下（任意键）
  - `mouseenter`：鼠标经过（无冒泡效果推荐）
  - `mouseleave`：鼠标离开（无冒泡效果推荐）
  - mouseover和mouseout会有冒泡效果

- 表单事件

  - `focus`：获得焦点触发
  - `blur`：失去焦点触发
  - `input`： 输入事件 关注输入过程
  - `change`：更新事件 关注输入结果
  - `reset`：重置事件事件目标是form
  - `submit`：表单提交事件 事件目标是form

- 键盘事件

  - `keydown`：键盘按下触发
  - `keypress`：按住键盘时触发
  - `keyup`：键盘松开触发

- 设备事件

  - `orientationchange`：判断用户的设备是处于垂直模式还是水平模式

    `window.orientation`，0 表示垂直模式，90 表示左转水平模式（主屏幕键在右侧），–90 表示右转水平模式（主屏幕键在左）。

  - `deviceorientation`：反映设备在空间中的朝向变化

- 触摸及手势事件
- 模拟及自定义事件

### 8.5 事件委托

事件委托利用事件冒泡，可以只使用一个事件处理程序来管理一种类型的事件。

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <p>324</p>
  </ul>
  <script>
    //点击每个li 当前li文字变成红色
    //按照事件委托的方式
    //1、获取父元素
    const ul = document.querySelector('ul')
    ul.addEventListener('click', function (e) {
      // alert(11)
      // this.style.color = 'red'
      // console.log(e.target)//就是我们点击的对象
      // e.target.style.color = 'red'
      //需求：只要点击li才会有效果
      if (e.target.tagName === 'LI') {
        e.target.style.color = 'red'
      }
    })
  </script>
```

## 九、客户端存储

### 9.1 cookie

​    概念：是浏览器端存储的缓存数据，大小一般在 4k 左右，只能是字符串，是浏览器的用户信息的追踪机制，在响应HTTP 请求时，通过发送 Set-Cookie HTTP 头部包含会话信息。

存储形式："key=value"

获取及修改：`document.cookie`

设置 cookie 的有效时间：`document.cookie = "key=value；max-age=n"（n为秒）`

### 9.2 web storage

Storage 类型用于保存名/值对数据，容量较大，sessionStorage和localStorage约 5M 左右。

方法：

- 清空数据：`clear()`
- 获取数据：`getItem(key)`
- 存储数据：`setItem(key, value)`
- 删除数据：`removeItem(key)`

sessionStorage 对象只存储会话数据，这意味着数据只会存储到浏览器关闭， 在同一个窗口(页面)下数据可以共享。

localStorage 数据不受页面刷新影响，也不会因关闭窗口、标签页或重新启动浏览器而丢失。

### 9.3 JSON

对象类型转json：`JSON.stringify(obj)`

json转对象：`JSON.parse(json)`

## 十、网络请求与远程资源

## 十一、错误处理与调试 

### 11.1 错误处理

```js
      try {
        //可能发生错误的代码   写到try里面
        const p = document.querySelector('p')
        p.style.color = 'red'
      } catch (err) {
        //拦截错误，提示浏览器提供的错误信息，但不中断程序的执行
        console.log(err.message)
        // 手动抛出错误
        throw new Error('选择器错误')
        //需要加return 中断程序
        // return
      }finally{
        //不管你程序对不对，一定会执行的代码
        alert('弹出对话窗')
      }
```

### 11.2 错误类型

- `Error`：基类型

- `InternalError`：在底层 JavaScript 引擎抛出异常时由浏览器抛出如，递归过多导致了栈溢出。

- `EvalError`：在使用 eval()函数发生异常时抛出。

- `RangeError`：数值越界时抛出。

- `ReferenceError`：访问不存在的变量而导致

- `SyntaxError`：常在给 eval()传入的字符串包含 JavaScript 语法错误时发生

- `TypeError`：在使用类型特定的操作而变量类型不对

- `URIError`：使用 encodeURI()或 decodeURI()但传入了格式错误的URI

  ```js
  try { 
   someFunction(); 
  } catch (error){ 
   if (error instanceof TypeError){
   // 处理类型错误
   } else if (error instanceof ReferenceError){ 
   // 处理引用错误
   } else { 
   // 处理所有其他类型的错误
   } 
  }
  ```

### 11.3 抛出错误

使用 throw 操作符时，代码立即停止执行，除非 try/catch 语句捕获了抛出的值。

### 11.3 错误调试

1、通过 console 对象直接把 JavaScript 消息写入控制台

- `error(*message*)`：在控制台中记录错误消息
- `info(*message*)`：在控制台中记录信息性内容
- `log(*message*)`：在控制台记录常规消息
- `warn(*message*)`：在控制台中记录警告消息

2、debugger

在运行时碰到这个关键字时，所有主流浏览器都会打开开发者工具面板，并在指定位置显示断点。然后，可以通过单独的浏览器控制台在断点所在的特定词法作用域中执行代码。此外，还可以执行标准的代码调试器操作（单步进入、单步跳过、继续，等等）。

## 十二、正则表达式

语法：

- 定义REG：`const reg = /表达式/` 或 `let reg = new RegExp(pattern,modifiers)`;pattern表达式，modifiers修饰符；
- `reg.test(字符串)` 方法 用来查看正则表达式与指定的字符串是否匹配，返回true或false
- `reg.exec(字符串)` 方法 在一个指定字符串中执行一个搜索匹配，如果匹配成功，exec() 方法返回一个数组，否则返回null
- `字符串.match(正则或字符串)`；返回匹配数组或null
- `字符串.replace(/正则表达式/,'替换文本'/或函数)`，函数：`（匹配的字符串，下标）=>{}`

**元字符**：

- 边界符
  - `^`：表示匹配行首的文本（以谁开始）
  - `$`：表示匹配行尾的文本（以谁结束)
  - 如果 ^ 和 $ 在一起，表示必须是精确匹配。
- 限定符
  - `*`：重复零次或更多次
  - `+`：重复一次或更多次
  - `？`：重复零次或一次
  - `{n}`：重复n次
  - `{n，}`：重复n次或更多次
  - `{n，m}`：重复n到m次，>=n && <= m
- 字符类
  - `[ ]` 里面加上 - 连字符，表示一个范围，`[abc].test(字符串)`后面的字符串只要包含 abc 中任意一个字符，都返回 true 。
  - `[ ]` 里面加上 ^ 取反符号，`[^a-z]` 匹配除了小写字母以外的字符
  - `.` 匹配除换行符之外的任何单个字符，匹配点需转译\.
  - `[\u4e00-\u9fa5]`：匹配汉字
- 分组
  - `|` 或的意思
  - `$n`,代表分组序号
- 预定义
  - `\d`，匹配0-9之间的任一数字，相当于`[0-9]`
  - `\w`，匹配任意的字母、数字和下划线，相当于`[A-Za-z0-9_]`
  - `\s`，匹配空格(包括换行符、制表符、空格符等)，相等于`[\t\r\n\w\f]`
  - `\n`，匹配换行符
  - `\D`，匹配所有0-9以外的字符，相当于 `[^0-9]`
  - `\W`，除所有字母、数字和下划线以外的字符，相当于 `[^A-Za-z0-9 ]`
  - `\S`，匹配非空格的字符，相当于`[^\t\r\n\w\f`]

**修饰符**：

- 语法：/表达式/修饰符
- i ： ignore 的缩写，正则匹配时字母不区分大小写
- g ： global 的缩写，匹配所有满足正则表达式的结果
- m：执行多行文本

常用正则表达式：

- `const reg =  /^\w[3,16]$/`：验证用户名
- `const reg =  /^\w[6,12]$/`：验证密码
- `const reg = /^\w+@\w+(\.[a-z]{2,3}){1,2}$/`：验证邮箱
- `const reg = /^1[3-9]\d{9}$/`：验证手机号
- `const reg =/^(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})$/`：验证生日
- `/^([\u4e00-\u9fa5]|\w|[@!#$%&*])+$/`