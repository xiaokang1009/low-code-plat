/** * @Author xiaokang1009 * @Date 2023/2/27 * @LastEditor xiaokang1009 *
@LastEditTime 2023/2/27 * @Description 侧边栏盒子组件 */
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
.l_aside_left {
  padding: 0;
  height: var(--aside-height);
}
</style>
