<script setup>
import { Graph } from '@antv/x6'
import { onMounted, ref } from 'vue'
defineProps({ h: Number })
const graphBox = ref(null)
let graph = null
const data = {
  // 1、定义节点数据
  nodes: [
    {
      id: 'node1', // 节点唯一标识
      x: 0, // 节点位置左上角的 x 坐标
      y: 0, // 节点位置左上角的的 y 坐标
      width: 80, // 节点宽度
      height: 40, // 节点高度
      label: 'hello', // 节点内容
    },
    {
      id: 'node2',
      x: 160,
      y: 180,
      width: 80,
      height: 40,
      label: 'world',
    },
  ],
  // 2、定义边数据
  edges: [
    {
      shape: 'edge',
      source: 'node1', // 边的源节点 id
      target: 'node2', // 边的目节点 id
    },
  ],
}
onMounted(() => {
  // 2、创建画布
  graph = new Graph({
    container: graphBox.value,
    autoResize: true,
    grid: true, // 开启网格
    background: {
      color: '#fff',
    },
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
  })
  // 3、添加节点
  graph.fromJSON(data)
  graph.zoomToFit({ padding: 24 })
})
// 打印节点数据
// console.log(graph.toJSON())
const qa = () => {
  console.log(graph.toJSON())
}
</script>

<template>
  <p @click="qa" style="position: absolute;z-index: 999;">按钮</p>
  <div ref="graphBox" :style="{ height: h + 'px' }" />
</template>
