<template>
  <el-link
    :id="component.id"
    ref="link"
    :href="component.href"
    :target="component.isTarget ? '_blank' : '_self'"
    type="primary"
  >
    {{ component.text }}
  </el-link>
</template>
<script setup lang="ts">
import { useLowCodeStore } from '@/stores/modules/lowCode'
import { onMounted, reactive, ref, watch } from 'vue'
type lLinkProps = {
  href: string
  text?: string
  id: string
  isTarget: boolean
}
const useLowCode = useLowCodeStore()
const link = ref<HTMLElement>()
const initValue =
  useLowCode.components[
    useLowCode.components.findIndex((item) => item.type === 'lLink')
  ]

const component = reactive<lLinkProps>({
  href: initValue.href,
  text: initValue.text,
  id: initValue.id,
  isTarget: initValue.isTarget
})
onMounted(() => {
  console.log(link.value?.$el.offsetWidth)
})
</script>
<style scoped lang="less">
.el-link {
  line-height: 2em;
  :deep(.el-link__inner) {
    pointer-events: none;
  }
}
</style>
