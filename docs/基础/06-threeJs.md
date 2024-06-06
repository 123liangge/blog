# Three.js

## 一、初识

1、three.js官网

[three]: https://threejs.org/
[three中文网]: http://webgl3d.cn/

2、简介

Three.js 是一个开源的应用级 3D JavaScript 库，可以让开发者在网页上创建 3D 体验。Three.js 屏蔽了 WebGL的底层调用细节，让开发者能更快速的进行3D场景效果的开发。

3、应用场景

游戏开发、产品展示、物联网、数字孪生、智慧城市园区、机械仿真、建筑可视化、全景看房、地理信息系统

## 二、起步

### 2.1 安装

```
npm install --save three
```

### 2.2 创建一个场景

概念：场景（scene）、相机（camera）和渲染器（renderer）

```js
// 导入
import * as THREE from 'three'
// 创建3D场景对象Scene
const scene = new THREE.Scene()
// 实例化一个透视投影相机对象
const camera = new THREE.PerspectiveCamera(
  45, // FOV视角：在显示器上看到的场景的范围，单位是角度
  window.innerWidth / window.innerHeight, // aspect ratio宽高比
  0.1, // near近截面：最近看到的距离
  1000 // far远截面：最远看到的距离
)
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()
// 定义threejs输出画布的尺寸(单位:像素px)
renderer.setSize(window.innerWidth, window.innerHeight)
// 渲染到dom元素里
document.body.appendChild(renderer.domElement)
```

### 2.3 创建几何体

```js
// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)
// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// 创建网格
const cube = new THREE.Mesh(geometry, material)
// 将网格添加到场景中
scene.add(cube)
```

### 2.4 渲染

```js
// 设置相机位置
camera.position.z = 5
// 目标观察点
camera.lookAt(0, 0, 0)
// 渲染场景
function animate() {
  // 动画循环
  requestAnimationFrame(animate)
  // 旋转
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  // 渲染
  renderer.render(scene, camera)
}
animate()
```

## 三、开发

### 3.1 坐标辅助器与轨道控制器