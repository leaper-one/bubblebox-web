<script setup lang="ts">
import { useMessage } from 'naive-ui'

const props = defineProps<{
  list: Array<{
    avatar: string
    info: string
  }>
}>()

const message = useMessage()

const clickToPreview = () => {
  message.success('预览')
  // TODO: 实现预览的具体功能
}

const clickToFiled = () => {
  message.success('归档')
  // TODO: 实现归档的具体功能
}
</script>

<template>
  <n-list bordered>
    <n-list-item v-for="(item, index) in props.list" :key="index">
      <template #prefix>
        <n-avatar round :src="item.avatar" />
      </template>
      <template #suffix>
        <div class="flex flex-row">
          <n-button @click="clickToPreview()">预览</n-button>
          <n-button @click="clickToFiled()">归档</n-button>
        </div>
      </template>
      <n-thing>
        {{ item.info }}
      </n-thing>
    </n-list-item>
  </n-list>
</template>
