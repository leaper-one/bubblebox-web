<script lang="ts" setup>
import { ref } from 'vue'

const appear = ref(true)
</script>

<template>
  <div>
    <header class="">
      <div class="float-left font-700 text-lg text-blue-500">LEAPERone</div>
    </header>
    <div class="pt-30"></div>
    <div class="text-8xl font-bold">
      <n-collapse-transition :appear="appear">
        <div class="text-left">Welcome</div>
        <div class="p-3"></div>
        <div class="text-blue-500">LEAPERone</div>
        <div class="pt-4">
          <n-button
            type="info"
            ghost
            class="text-lg text-blue-500 border-gray-0 px-3 py-2 rounded-5px flex align-left font-700 shadow-xl button"
          >
            Learn more
          </n-button>
        </div>
      </n-collapse-transition>
    </div>
  </div>
</template>
