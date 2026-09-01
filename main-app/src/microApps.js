import { registerMicroApps, start } from 'qiankun'
import { ref } from 'vue'

const username = ref('Sandra')

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:5174',
    container: '#subapp-container',
    activeRule: '/user',
    props: {
      userName: username.value,

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
      userName: username.value,

      onChildMessage(message) {
        console.log('主应用收到 product-app 消息：', message)
      },
    },
  },
])

start()
