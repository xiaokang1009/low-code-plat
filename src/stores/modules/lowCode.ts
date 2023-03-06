import { Stack, randomId } from '@/uitls'
import { defineStore } from 'pinia'
export const useLowCodeStore = defineStore('lowCode', {
  state: () => ({
    components: [
      {
        type: 'lLink',
        id: randomId('lLink'),
        icon: 'icon-link',
        title: '链接',
        text: '这是一个链接',
        href: 'javascript:;',
        isTarget: false
      }
    ],
    componentsStack: new Map<string, unknown>(),
    styles: [
      {
        type: 'lLink'
      }
    ]
  }),
  actions: {
    addComponent(component: any) {
      this.components.push(component)
    },
    setComponentByType(type: string, component: any) {
      const index = this.components.findIndex((item) => item.type === type)
      this.components[index] = {
        ...this.components[index],
        ...component
      }
    },
    setComponentsStack(component: unknown, tags: string) {
      this.componentsStack.set(tags, component)
    }
  }
})
