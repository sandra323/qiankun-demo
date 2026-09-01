import { initGlobalState, registerMicroApps, start } from 'qiankun'
import { reactive } from 'vue'

// 实际系统中，登录用户、购物车、主题等都是跨应用状态。
const initialGlobalState = {
  currentUser: {
    id: 'user-10001',
    name: 'Sandra',
    roles: ['customer'],
    membershipLevel: 'gold',
  },
  cartCount: 0,
  theme: 'light',
  lastAction: '还没有操作',
}

export const globalState = reactive(structuredClone(initialGlobalState))

export const globalActions = initGlobalState(initialGlobalState)

globalActions.onGlobalStateChange((state) => {
  Object.assign(globalState, state)
}, true)

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:5174',
    container: '#subapp-container',
    activeRule: '/user',
    props: {
      // props 只保留该子应用专属的回调。
      onChildMessage(message) {
        console.log('主应用收到 user-app 消息：', message)
      },
    },
  },
  {
    name: 'product-app',
    entry: '//localhost:5175',
    container: '#subapp-container',
    activeRule: '/product',
    props: {
      onChildMessage(message) {
        console.log('主应用收到 product-app 消息：', message)
      },
    },
  },
])

start()
