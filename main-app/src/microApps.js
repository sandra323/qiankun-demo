import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'user-app',
    entry: '//localhost:5174',
    container: '#subapp-container',
    activeRule: '/user',
  },
  {
    name: 'product-app',
    entry: '//localhost:5175',
    container: '#subapp-container',
    activeRule: '/product',
  },
])

start()
