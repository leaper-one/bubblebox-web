<script setup lang="ts">
import { useMessage } from 'naive-ui'

const props = defineProps<{
  avatarUrl: string
  userName: string
}>()

const message = useMessage()

const logOut = () => {
  message.success('退出登录')
}
</script>

<template>
  <div class="flex align space-between">
    <div style="min-width: 30px">
      <n-avatar round :src="props.avatarUrl" />
    </div>
    <div style="min-width: 120px; font-weight: bold">{{ props.userName }}</div>
    <div>
      <n-button type="error" @click="logOut()">登出</n-button>
    </div>
  </div>
</template>
