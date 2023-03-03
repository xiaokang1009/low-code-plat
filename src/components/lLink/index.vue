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

useLowCode.setComponentsStack({
  type: 'lLink',
  id: component.id,
  text: component.text,
  href: component.href,
  isTarget: component.isTarget,
  style: {
    x: link.value?.offsetLeft + 'px',
    y: link.value?.offsetTop + 'px',
    w: link.value?.offsetWidth + 'px',
    h: link.value?.offsetHeight + 'px'
  }
})
watch(
  useLowCode.componentsStack,
  async (newVal, oldVal) => {
    const cpt = newVal[newVal.length - 1]
    if (component.type === 'lLink') {
      component.href = cpt.href
      component.text = cpt.text
      component.id = cpt.id
      component.isTarget = cpt.isTarget
    }
  },
  { deep: true }
)
</script>
<style scoped lang="less">
.el-link {
  line-height: 2em;
  :deep(.el-link__inner) {
    pointer-events: none;
  }
}
</style>
