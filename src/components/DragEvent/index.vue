<template>
  <div
    :class="useMoveBox.isGabbing ? 'grabbing' : ''"
    class="editor-grid__item"
    @mousedown="handlerMoveDown"
    @mousemove="handlerMove"
  >
    <slot></slot>
    <div
      v-if="useMoveBox.isGabbing"
      class="mouse_box"
      :style="{
        left: movePosition.x + 'px',
        top: movePosition.y + 'px'
      }"
    >
      <span :class="useMoveBox.icon" class="iconfont"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useMoveBoxStore } from '@/stores/modules/moveBox'

const useMoveBox = useMoveBoxStore()
const movePosition = ref<{
  x: number
  y: number
}>({ x: 0, y: 0 })

type dragObj = {
  icon: string
  title: string
  type: string
}

const props = defineProps<dragObj>()

const handlerMoveDown = (e: MouseEvent) => {
  console.log(props.icon)
  useMoveBox.setIcon(props.icon)
  useMoveBox.setTitle(props.title)
  useMoveBox.setType(props.type)
  useMoveBox.setIsGabbing(true)
  movePosition.value = {
    x: e.clientX,
    y: e.clientY
  }
}
const handlerMove = (e: MouseEvent) => {
  if (useMoveBox.isGabbing) {
    console.log(e)
    movePosition.value = {
      x: e.clientX,
      y: e.clientY
    }
  }
}
document.addEventListener('mousemove', handlerMove)
</script>

<style scoped lang="less">
/* css */
.editor-grid__item.grabbing {
  cursor: grabbing;
}
.mouse_box {
  position: fixed;
  width: 80px;
  height: 40px;
  background: #fff;
  border: #e2e2e2 1px solid;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
