<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { globalActions, globalState } from "./microApps";

function navigate(path) {
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
}

function toggleTheme() {
  const theme = globalState.theme === "light" ? "dark" : "light";

  globalActions.setGlobalState({
    theme,
    lastAction: `主应用将主题切换为 ${theme}`,
  });
}

function clearCart() {
  globalActions.setGlobalState({
    cartCount: 0,
    lastAction: "主应用清空了购物车",
  });
}
</script>

<template>
  <div>
    <h1>我是主应用 🚀</h1>

    <p>技术栈：Vue 3</p>

    <section class="global-state-panel">
      <strong>globalState（三个应用共享）</strong>
      <span>当前用户：{{ globalState.currentUser.name }}</span>
      <span>会员：{{ globalState.currentUser.membershipLevel }}</span>
      <span>购物车：{{ globalState.cartCount }}</span>
      <span>主题：{{ globalState.theme }}</span>
      <span>最后操作：{{ globalState.lastAction }}</span>
      <button @click="toggleTheme">切换主题</button>
      <button @click="clearCart">清空购物车</button>
    </section>

    <nav>
      <a href="/" style="margin-right: 10px;" @click.prevent="navigate('/')">首页</a>
      <a href="/user" style="margin-right: 10px;" @click.prevent="navigate('/user')">用户中心</a>
      <a href="/product" style="margin-right: 10px;" @click.prevent="navigate('/product')">商品中心</a>
    </nav>

    <hr />

    <!-- 子应用将会被加载到这里 -->
    <div id="subapp-container"></div>
  </div>
</template>

<style scoped>
.global-state-panel {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #42b883;
  border-radius: 8px;
}
</style>
