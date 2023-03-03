<template>
  <el-aside :width="props.width">
    <el-scrollbar>
      <slot></slot>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import {} from 'element-plus'

const props = defineProps({
  width: {
    type: String,
    default: '200px'
  }
})
</script>

<style scoped lang="less">
/* css */
</style>
