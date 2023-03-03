// 生成随机id

export function randomId(type: string) {
  const text = '1234567890'
  let result = ''
  for (let i = 0; i < 4; i++) {
    result += text.charAt(Math.floor(Math.random() * text.length))
  }
  return type + result
}

export class Stack<T> {
  private items: T[] = []

  push(item: T) {
    this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
}
