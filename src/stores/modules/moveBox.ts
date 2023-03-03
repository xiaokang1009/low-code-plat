import { defineStore } from 'pinia'

export const useMoveBoxStore = defineStore('moveBox', {
  state: () => ({
    icon: '',
    title: '',
    isGabbing: false,
    type: ''
  }),
  actions: {
    setIcon(icon: string) {
      this.icon = icon
    },
    setTitle(title: string) {
      this.title = title
    },
    setIsGabbing(isGabbing: boolean) {
      this.isGabbing = isGabbing
    },
    setType(type: string) {
      this.type = type
    }
  }
})
