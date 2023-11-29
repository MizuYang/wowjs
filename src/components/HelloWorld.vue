<template>
  <main class="text-center"
        style="overflow-x:hidden;">
    <!-- 假資料 -->
    <template v-for="t in 100" :key="`test-${t}`">
      <div class="wow animate__fadeInLeft"
           data-wow-duration="2s"
           data-wow-offset="10"
           data-wow-iteration="1"
           style="margin:50px 0;">
        左到右
      </div>

      <div class="wow animate__backInDown"
           data-wow-duration="2s">
        上到下
      </div>
      <div class="wow animate__backInUp"
           data-wow-duration="2s">
        下到上
      </div>
      <div class="wow animate__slideInRight"
           data-wow-offset="10"
           data-wow-duration="2s">
        右到左
      </div>

    </template>
  </main>
</template>

<script setup>

import { reactive, nextTick, onMounted } from 'vue' // eslint-disable-line
import WOW from 'wow.js'

onMounted(() => {
  wowjsInit()
})

function wowjsInit () {
  const wow = new WOW({
    boxClass: 'wow', // 動畫元素的 CSS 類別（默認為 wow）
    animateClass: 'animated', // 動畫的 CSS 類別（默認為 animated）
    offset: 0, // 觸發動畫的元素距離視窗的距離（默認為 0）
    mobile: true, // 在移動設備上觸發動畫（默認為 true）
    live: true, // 對於異步加載的內容是否生效（默認為 true）
    callback: function (box) {
      // 每次動畫啟動時觸發的回調函數
      // 傳遞的參數是正在動畫的 DOM 节點
    },
    scrollContainer: null, // 可選的滾動容器選擇器，否則使用 window
    resetAnimation: true // 在動畫結束時重置動畫（默認為 true）
  })
  wow.init()
}
</script>

<style lang='scss' scope></style>
