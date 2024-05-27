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

2. `RegExp`

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

箭头函数：=>

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

默认参数

动态参数

剩余参数

### 4.3 回调函数与递归函数

- 回调函数：如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为回调函数

  ```js
  const B = (A) => A()
  ```

- 递归函数：函数内部自己调用自己, 这个函数就是递归函数，必须要加退出条件 return

  ```js
  function getTime() {
        document.querySelector('div').innerHTML = new Date().toLocaleString()
        setTimeout(getTime, 1000)
      }
  ```

### 4.4 apply、call、bind



## 五、期约与异步函数

## 六、BOM

## 七、DOM

## 八、事件

## 九、客户端存储