<template>
  <el-main
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-background="rgba(255, 255, 255, 0.4)"
    element-loading-text="处理中..."
    class="l_main"
  >
    <!-- 中间内容 -->
    <div class="low_container">
      <div ref="preview" class="editor_preview">
        <div class="l_pc editor_device">
          <div
            ref="editor"
            class="editor_box"
            :class="components.length <= 0 ? 'empty' : ''"
          >
            <component
              :is="item.component"
              v-for="(item, index) in components"
              :key="index"
            ></component>
          </div>
        </div>
      </div>
    </div>
    <GuideBox />
  </el-main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, reactive, ref } from 'vue'
import { useMoveBoxStore } from '@/stores/modules/moveBox'
import { useLowCodeStore } from '@/stores/modules/lowCode'
import GuideBox from '@/components/GuideBox/index.vue'

const fullscreenLoading = ref<boolean>(false)

const editor = ref<HTMLDivElement>()

// 判断是否鼠标是否移入main区域
const useMoveBox = useMoveBoxStore()
const useLowCode = useLowCodeStore()
const preview = ref<HTMLDivElement>()
const components = reactive<
  Array<{
    type: string
    component: any
    id: string
  }>
>([])
document.addEventListener('mousemove', (e: MouseEvent) => {
  // 判断是否移动到目标区域
  const left = preview.value?.offsetLeft as number
  const top = preview.value?.offsetTop as number
  if (useMoveBox.isGabbing && e.clientX > left && e.clientY > top) {
    console.log('移入')
    useMoveBox.setIcon('')
  }
})
document.addEventListener('mouseup', (e: MouseEvent) => {
  const left = preview.value?.offsetLeft as number
  const top = preview.value?.offsetTop as number
  console.log(useMoveBox.isGabbing)
  if (useMoveBox.isGabbing && e.clientX > left && e.clientY > top) {
    console.log('移入到组件')
    useMoveBox.setIsGabbing(false)
    fullscreenLoading.value = true
    useLowCode.components.forEach((item) => {
      if (item.type === useMoveBox.type) {
        components.push({
          type: item.type,
          id: item.id,
          component: defineAsyncComponent(
            () => import(`@/components/${item.type}/index.vue`)
          )
        })
        fullscreenLoading.value = false
      }
    })
  }
})
</script>

<style scoped lang="less">
/* css */
.l_main {
  height: var(--main-height);
  padding: 0;
  width: var(--main-width);
  background-color: #ebedf1;
  will-change: auto;
}
.low_container {
  display: flex;
  justify-content: center;
  padding: 16px 0 43px;
  height: 100%;
  box-sizing: border-box;
}
.editor_preview {
  background-color: #fff;
  border-radius: 4px;
}
.editor_box {
  height: 100%;
  background: rgba(246, 247, 249, 0.5);
  outline: 2px dashed #dedede;
  outline-offset: -2px;
}
.editor_device {
  transition: all ease 0.3s;
  box-shadow: 1px 1px 3px #dfdfdf, -1px 1px 3px #dfdfdf;
  border-radius: 2px;
}
.l_h5 {
  min-width: 377px;
  max-width: 377px;
  min-height: 699px;
  max-height: 699px;
}
.l_pc {
  height: 100%;
  width: calc(
    100vw - var(--aside-left-width) - var(--aside-right-width) - 30px
  );
  min-width: 1025px;
  max-width: calc(
    100vw - var(--aside-left-width) - var(--aside-right-width) - 30px
  );
}
.empty::before {
  display: block;
  content: '\7a7a\5bb9\5668 (Container)';
  width: 100%;
  color: #e2e2e2;
  text-align: center;
  line-height: 1.2em;
}
</style>
