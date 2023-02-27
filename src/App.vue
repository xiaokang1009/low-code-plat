<template>
  <el-config-provider>
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts"></script>

<style>
body::-webkit-scrollbar {
  width: 0;
}
</style>
