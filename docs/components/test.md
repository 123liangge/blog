---
layout: page
---

<script setup>
  import CustomComponent from './test.vue'
  import { onMounted,ref,onUnmounted } from 'vue'
  const h = ref(300)
  const getHeight = () => {
    const h1 = document.querySelector('.VPContent').clientHeight
    const h2 = document.querySelector('.VPPage').offsetTop
    h.value = h1 - h2
  }
  onMounted(() => {
    getHeight()
   window.addEventListener('resize', getHeight)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', getHeight)
  })
</script>

<CustomComponent :h="h" />
