import "./App.css";
import React, { useEffect, useRef, useState } from 'react'

function App({
  onChildMessage,
  onGlobalStateChange,
  setGlobalState,
}) {
  const subscribed = useRef(false)
  const [globalState, setLocalGlobalState] = useState({
    currentUser: null,
    cartCount: 0,
    theme: 'light',
    lastAction: '还没有操作',
  })

  useEffect(() => {
    // React StrictMode 会重复执行 effect，这里保证每次挂载只注册一次。
    if (subscribed.current) return
    subscribed.current = true

    onGlobalStateChange?.((state) => {
      setLocalGlobalState(state)
    }, true)
  }, [onGlobalStateChange])

  function addToCart() {
    setGlobalState?.({
      cartCount: globalState.cartCount + 1,
      lastAction: 'React user-app 添加了一件商品',
    })
  }

  function updateDisplayName() {
    const currentUser = globalState.currentUser
    if (!currentUser) return

    setGlobalState?.({
      currentUser: {
        ...currentUser,
        name: currentUser.name === 'Sandra' ? 'Sandra Chen' : 'Sandra',
      },
      lastAction: 'React user-app 修改了用户昵称',
    })
  }

  return (
    <div>
      <h1>我是用户中心 👤</h1>
      <h2>你好，{globalState.currentUser?.name ?? '游客'}</h2>
      <p>技术栈：React</p>
      <p>用户 ID：{globalState.currentUser?.id ?? '-'}</p>
      <p>角色：{globalState.currentUser?.roles?.join(', ') ?? '-'}</p>
      <p>会员等级：{globalState.currentUser?.membershipLevel ?? '-'}</p>
      <button onClick={updateDisplayName}>修改昵称</button>
      <button
        onClick={() => {
          onChildMessage?.('你好，我是 React 子应用')
        }}
      >
        给主应用发消息
      </button>

      <hr />
      <h3>globalState</h3>
      <p>购物车：{globalState.cartCount}</p>
      <p>主题：{globalState.theme}</p>
      <p>最后操作：{globalState.lastAction}</p>
      <button onClick={addToCart}>购物车 +1</button>
    </div>
  );
}

export default App;
