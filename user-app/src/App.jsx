import "./App.css";
import React from 'react'

function App({ userName, onChildMessage }) {
  return (
    <div>
      <h1>我是用户中心 👤</h1>
      <h2>你好，{userName}</h2>
      <p>技术栈：React</p>
      <button
        onClick={() => {
          onChildMessage?.('你好，我是 React 子应用')
        }}
      >
        给主应用发消息
      </button>
    </div>
  );
}

export default App;
