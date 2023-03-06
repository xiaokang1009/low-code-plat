<template>
  <el-row><el-col class="component_name r_title"> 链接 </el-col></el-row>
  <el-row>
    <el-col>
      <div class="id_item">
        <span class="id_item_title r_label">组件ID</span>
        <div
          class="id_input"
          @dblclick="
            () => {
              isShowIdInput = true
            }
          "
        >
          <el-input
            v-show="isShowIdInput"
            v-model="attribute.aID"
            v-click-outside="
              () => {
                isShowIdInput = false
              }
            "
            clearable
            autofocus
          ></el-input>
          <span v-show="!isShowIdInput">{{ attribute.aID }}</span>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="基础属性"></el-collapse-item>
        <el-collapse-item title="高级属性"></el-collapse-item>
        <el-collapse-item title="同用配置"></el-collapse-item>
        <el-collapse-item title="事件"></el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { useLowCodeStore } from '@/stores/modules/lowCode'
import { ref } from 'vue'
import { AttributeProps } from './index'
import { ClickOutside as vClickOutside } from 'element-plus'

const useLowCode = useLowCodeStore()
const isShowIdInput = ref<boolean>(false)
const attribute = ref<AttributeProps>({
  aID: 'lLink1291'
})
const activeNames = ref<string[]>(['1', '2', '3'])
</script>
<style scoped lang="less">
.id_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .id_item_title {
    margin-right: 10px;
  }
  .id_input {
    width: 100px;
    font-size: 14px;
    text-align: center;
  }
}
.el-row {
  margin-bottom: 20px;
  &:deep(.el-collapse-item__header) {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
