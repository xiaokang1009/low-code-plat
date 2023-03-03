import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCanvasPropertyStore = defineStore('canvasProperty', () => {
  const props = ref<Array<any>>([])

  const addProps = (prop: any) => {
    props.value.push(prop)
  }

  return {
    props,
    addProps
  }
})
