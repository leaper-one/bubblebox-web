<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()

const props = defineProps<{
  email?: string
  url?: string
}>()

const uploadOptions = [
  {
    label: props.email ? `邮箱：${props.email}` : '未设置邮箱',
    value: 'email'
  },
  {
    label: props.url ? `Url：${props.url}` : '未设置Url',
    value: 'url'
  }
]

const uploadWay = ref('email')

const resetStyle = () => {
  const way = `${uploadWay.value === 'url' ? props.url : props.email}`
  if (way === 'undefined') {
    message.error(`请先设置${uploadWay.value === 'email' ? '邮箱' : 'Url'}`)
  } else {
    navigator.clipboard.writeText(way).then(() => {
      message.success('复制成功')
    })
  }
}
</script>

<template>
  <div>
    <n-list bordered>
      <n-list-item>
        <template #suffix>
          <n-button @click="resetStyle()">复制</n-button>
        </template>
        <n-select placeholder="请选择" v-model:value="uploadWay" :options="uploadOptions" />
      </n-list-item>
    </n-list>
  </div>
</template>
