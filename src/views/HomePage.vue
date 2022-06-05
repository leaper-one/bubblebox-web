<script lang="ts" setup>
import { ref } from 'vue'

const appear = ref(true)
</script>

<template>
  <div>
    <div class="pt-30"></div>
    <div class="text-8xl font-bold">
      <n-collapse-transition :appear="appear">
        <div class="text-left">Welcome</div>
        <div class="p-3"></div>
        <div class="text-blue-500">LEAPERone</div>
      </n-collapse-transition>
    </div>
  </div>
</template>
