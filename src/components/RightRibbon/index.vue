<template>
  <SideBox width="var(--aside-right-width)" class="l_aside_right">
    <!-- 右侧功能栏 -->
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="属性" name="first"><Attribute /></el-tab-pane>
      <el-tab-pane label="样式" name="second"><Styles /></el-tab-pane>
    </el-tabs>
  </SideBox>
</template>

<script setup lang="ts">
import SideBox from '@/components/SideBox/index.vue'
import { ref } from 'vue'
import Attribute from '@/components/Attribute/index.vue'
import Styles from '@/components/Styles/index.vue'
const activeName = ref('first')
</script>

<style scoped lang="less">
/* css */
.l_aside_right {
  height: var(--aside-height);
  padding: 0;
}
.el-tabs :deep(.el-tabs__header) {
  margin-bottom: 15px;
}
.el-tabs {
  border-bottom: none;
  border-left: none;
}
</style>
