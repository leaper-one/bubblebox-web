<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopBar from './components/TopBar.vue'

const pageTitle = 'OBS插件后台'
const avatarUrl = 'https://photo.zjlblog.site/avatar.jpg'
const userName = '测试名字'
</script>

<template>
  <n-message-provider>
    <TopBar :title="pageTitle" :avatar="avatarUrl" :userName="userName" />
    <div id="main">
      <router-view />
    </div>
  </n-message-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

.flex {
  display: flex;
}

.align {
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

.justify {
  justify-content: center;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.row-reverse {
  flex-direction: row-reverse;
}

.flex-auto {
  flex: auto;
}
</style>
