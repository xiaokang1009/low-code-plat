<template>
  <SideBox width="var(--aside-left-width)" class="l_aside_left">
    <!-- 左侧菜单栏 -->
    <!-- 搜索组件 -->
    <div class="editor-search-box">
      <div class="editor-search">
        <el-input
          v-model="searchText"
          type="text"
          placeholder="请输入内容"
          clearable
          class="search"
          @clear="handleClear"
          @keyup.enter.native="handleSearch"
        >
          <template #prefix>
            <el-icon><search /></el-icon>
          </template>
        </el-input>
      </div>
    </div>
    <!-- 菜单栏 -->
    <div class="editor-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template #title>
            <el-icon><Management /></el-icon
            ><span class="collapse__span">常用</span>
          </template>
          <div class="collapse-content">
            <el-row>
              <el-col :span="12">
                <DragEvent
                  :icon="'icon-link'"
                  :title="'链接(Llink)'"
                  :type="'lLink'"
                >
                  <div class="component_preview">
                    <span class="iconfont icon-link"></span>
                    <span class="component_preview_text" title="链接(lLink)"
                      >链接</span
                    >
                  </div>
                </DragEvent>
              </el-col>
              <el-col :span="12">
                <div class="editor-grid__item">
                  <div class="component_preview">
                    <span class="iconfont icon-wenben"></span>
                    <span class="component_preview_text">文本</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="editor-grid__item">
                  <div class="component_preview">
                    <span class="iconfont icon-wenben"></span>
                    <span class="component_preview_text">文本</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12"> </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <el-icon><Document /></el-icon
            ><span class="collapse__span">布局</span>
          </template>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <el-icon><Location /></el-icon
            ><span class="collapse__span">导航</span>
          </template>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <el-icon><List /></el-icon><span class="collapse__span">表单</span>
          </template>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <el-icon><Coin /></el-icon
            ><span class="collapse__span">数据容器</span>
          </template>
        </el-collapse-item>
      </el-collapse>
    </div>
  </SideBox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Search,
  Coin,
  Management,
  Document,
  Location,
  List
} from '@element-plus/icons-vue'
import SideBox from '@/components/SideBox/index.vue'
import DragEvent from '@/components/DragEvent/index.vue'

const searchText = ref('')
const activeNames = ref([])
const handleChange = (val: string[]) => {
  console.log(val)
}
const handleClear = () => {
  searchText.value = ''
}
const handleSearch = () => {
  console.log(searchText.value)
}
</script>

<style scoped lang="less">
/* css */
.editor-search-box {
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  box-sizing: border-box;
}
.editor-collapse {
  .el-icon {
    width: 30px;
    height: 30px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  .el-collapse {
    border-bottom: none;
  }
  .is-active {
    color: #409eff;
    svg {
      color: #409eff;
    }
  }
  .el-col {
    padding: 5px 0;
  }
}
.editor-grid__item {
  box-sizing: border-box;
  padding: 0 10px;
  cursor: grab;
  .component_preview {
    user-select: none;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #e2e2e2;
    display: flex;
    align-items: center;
    .iconfont {
      padding-left: 6px;
      padding-right: 4px;
      color: #000;
      pointer-events: none;
    }
    .component_preview_text {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      pointer-events: none;
    }
    &:hover {
      border-color: #409eff;
    }
  }
}
.l_aside_left {
  padding: 0;
  height: var(--aside-height);
}
</style>
