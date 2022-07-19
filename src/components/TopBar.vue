<script setup lang="ts">
import TopBarUserCard from './TopBarUserCard.vue'

const props = defineProps<{
  title: string
  avatar: string
  userName: string
}>()
</script>

<template>
  <div class="flex flex-row items-center justify-center">
    <div class="flex flex-row justify-around w-4/5">
      <div class="flex flex-row w-1/5 min-w-190px font-bold text-3xl">
        {{ props.title }}
      </div>
      <div class="w-1/2"></div>
      <div class="flex flex-row-reverse w-1/4">
        <TopBarUserCard :avatarUrl="props.avatar" :userName="props.userName" />
      </div>
    </div>
  </div>
</template>
