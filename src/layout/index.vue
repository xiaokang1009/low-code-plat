<template>
  <el-container class="l_container">
    <!-- 头部 -->
    <HeaderRibbon />
    <!-- 左侧 -->
    <LeftMenus />
    <!-- 中间 -->
    <Main />
    <!-- 右侧 -->
    <RightRibbon />
  </el-container>
</template>
<script setup lang="ts">
import HeaderRibbon from '@/components/HeaderRibbon/index.vue'
import LeftMenus from '@/components/leftMenus/index.vue'
import RightRibbon from '@/components/RightRibbon/index.vue'
import Main from '@/components/Main/index.vue'
</script>
<style scoped lang="less">
.l_container {
  flex-wrap: wrap;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
}
</style>
