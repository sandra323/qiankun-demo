import { createApp } from 'vue'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import App from './App.vue'

let app = null

function render(props = {}) {
  const container = props.container

  const mountNode = container
    ? container.querySelector('#root')
    : document.querySelector('#root')

  app = createApp(App)

  app.mount(mountNode)
}

renderWithQiankun({
  async bootstrap() {
    console.log('🚀 product-app bootstrap')
  },
  async mount(props) {
    console.log('🟢 product-app mount')
    render(props)
  },
  async unmount() {
    console.log('🔴 product-app unmount')
    app?.unmount()
    app = null
  },
  async update() {},
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
