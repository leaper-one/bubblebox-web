<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopBar from '../components/TopBar.vue'

const pageTitle = 'OBS插件后台'
const avatarUrl = 'https://photo.zjlblog.site/avatar.jpg'
const userName = '测试名字'
</script>

<template>
  <n-message-provider>
    <TopBar :title="pageTitle" :avatar="avatarUrl" :userName="userName" />
    <div class="flex flex-col items-center justify-center p-30px">
      <router-view />
    </div>
  </n-message-provider>
</template>
