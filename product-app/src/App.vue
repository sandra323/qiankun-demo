<script setup>
import { onMounted, reactive } from 'vue'

const props = defineProps({
  onChildMessage: {
    type: Function,
    default: undefined,
  },
  onGlobalStateChange: Function,
  setGlobalState: Function,
})

const globalState = reactive({
  currentUser: null,
  cartCount: 0,
  theme: 'light',
  lastAction: '还没有操作',
})

onMounted(() => {
  props.onGlobalStateChange?.((state) => {
    Object.assign(globalState, state)
  }, true)
})

function addToCart(productName) {
  props.setGlobalState?.({
    cartCount: globalState.cartCount + 1,
    lastAction: `Vue product-app 加购了 ${productName}`,
  })
}
</script>

<template>
  <div class="product-app">
    <h1>🛒 商品中心</h1>

    <h2>你好，{{ globalState.currentUser?.name ?? '游客' }}</h2>
    <p>技术栈：Vue 3</p>
    <p>会员等级：{{ globalState.currentUser?.membershipLevel ?? '-' }}</p>

    <button @click="onChildMessage?.('你好，我是 Vue 子应用')">
      给主应用发消息
    </button>

    <section class="global-state-panel">
      <h3>globalState</h3>
      <p>购物车：{{ globalState.cartCount }}</p>
      <p>主题：{{ globalState.theme }}</p>
      <p>最后操作：{{ globalState.lastAction }}</p>
    </section>

    <div class="product">
      <h2>MacBook Pro</h2>
      <p>价格：¥19999</p>
      <button @click="addToCart('MacBook Pro')">加入购物车</button>
    </div>

    <div class="product">
      <h2>iPhone</h2>
      <p>价格：¥7999</p>
      <button @click="addToCart('iPhone')">加入购物车</button>
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

.global-state-panel {
  padding: 12px;
  margin-top: 16px;
  border: 1px solid #42b883;
  border-radius: 8px;
}
</style>
