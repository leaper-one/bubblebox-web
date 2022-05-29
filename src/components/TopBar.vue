<script setup lang="ts">
import TopBatUserCard from './TopBatUserCard.vue'

const props = defineProps<{
  title: string
  avatar: string
  userName: string
}>()
</script>

<template>
  <div class="flex row align justify">
    <div style="display: flex; flex-direction: row; justify-content: space-around; width: 80%">
      <div class="flex row" style="width: 25%; font-size: 24px; font-weight: bolder">
        {{ props.title }}
      </div>
      <div style="width: 50%"></div>
      <div class="flex row-reverse" style="width: 25%">
        <TopBatUserCard :avatarUrl="props.avatar" :userName="props.userName" />
      </div>
    </div>
  </div>
</template>
