<script setup>
import HelloWorld from "./components/HelloWorld.vue";

function navigate(path) {
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
}
</script>

<template>
  <div>
    <h1>我是主应用 🚀</h1>

    <p>技术栈：Vue 3</p>

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
