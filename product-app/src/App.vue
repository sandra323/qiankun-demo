<script setup>
defineProps({
  userName: {
    type: String,
    default: '',
  },
  onChildMessage: {
    type: Function,
    default: undefined,
  },
})
</script>

<template>
  <div class="product-app">
    <h1>🛒 商品中心</h1>

    <h2>你好，{{ userName }}</h2>
    <p>技术栈：Vue 3</p>

    <button @click="onChildMessage?.('你好，我是 Vue 子应用')">
      给主应用发消息
    </button>

    <div class="product">
      <h2>MacBook Pro</h2>
      <p>价格：¥19999</p>
    </div>

    <div class="product">
      <h2>iPhone</h2>
      <p>价格：¥7999</p>
    </div>
  </div>
</template>

<style scoped>
.product-app {
  padding: 30px;
}

.product {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #ddd;
}
</style>
