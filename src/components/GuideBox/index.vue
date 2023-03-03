<template>
  <div class="guide_box">
    <div class="guide_bd"></div>
    <div class="guide_ribbon"></div>
  </div>
</template>
<script setup lang="ts">
import { useLowCodeStore } from '@/stores/modules/lowCode'
import { reactive, watch } from 'vue'

const style = reactive<{
  x: string
  y: string
  w: string
  h: string
}>({
  x: '',
  y: '',
  w: '',
  h: ''
})
const useLowCode = useLowCodeStore()
document.addEventListener(
  'click',
  (e: MouseEvent) => {
    if (!useLowCode.componentsStack.length) {
      return
    }
    const component =
      useLowCode.componentsStack[useLowCode.componentsStack.length - 1]

    const target = e.target as HTMLElement
    const isRelay = component.id === target.id
    if (!isRelay) {
      return
    }
    style.x = target.offsetLeft + 'px'
    style.y = target.offsetTop + 'px'
    style.w = target.offsetWidth + 'px'
    style.h = target.offsetHeight + 'px'
  },
  { capture: true }
)
</script>
<style scoped lang="less">
.guide_box {
  position: relative;
  width: v-bind('style.w');
  height: v-bind('style.h');
  box-sizing: border-box;
  border: 1px solid var(--guide-border-color);
}
</style>
