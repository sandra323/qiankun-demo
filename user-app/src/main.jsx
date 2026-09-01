import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let root = null

function render(props = {}) {
  console.log('🎨 render')

  const container = props.container

  const mountNode = container
    ? container.querySelector('#root')
    : document.querySelector('#root')

  root = ReactDOM.createRoot(mountNode)

  root.render(
    <React.StrictMode>
      <App
        onChildMessage={props.onChildMessage}
        onGlobalStateChange={props.onGlobalStateChange}
        setGlobalState={props.setGlobalState}
      />
    </React.StrictMode>
  )
}

export async function bootstrap() {
  console.log('🚀 bootstrap')
}

export async function mount(props) {
  console.log('🟢 mount')
  console.log('📦 props:', props)

  render(props)
}

export async function unmount() {
  console.log('🔴 unmount 开始')

  root?.unmount()
  root = null

  console.log('🔴 unmount 完成')
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log('🟡 独立运行 user-app')
  render()
}
