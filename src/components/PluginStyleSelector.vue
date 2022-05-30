<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
const message = useMessage()
const props = defineProps<{
  styleSelect: string
  styleOptions: Array<any>
}>()

const styleSelect = ref(props.styleSelect)

const resetStyle = () => {
  message.success('已成功重置')

  // TODO：实现重置为默认样式
}
</script>

<template>
  <div>
    <n-list bordered>
      <n-list-item>
        <template #suffix>
          <n-button @click="resetStyle()">清空展示</n-button>
        </template>
        <n-select placeholder="请选择" v-model:value="styleSelect" :options="props.styleOptions" />
      </n-list-item>
    </n-list>
  </div>
</template>
