<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  marks: Record<string, string>
  defaultValue: number
  step?: number
  max: number
  min: number
  usePercent?: boolean
}>()

const value = ref(props.defaultValue)
const step = ref(props.step).value ? 1 : 'mark'
</script>

<template>
  <n-list bordered>
    <n-list-item>
      <template #default>
        <div style="display: flex; flex: auto; flex-direction: row">
          <div class="flex row" style="width: 20%; min-width: 80px; font-size: large">
            {{ props.title }}
          </div>
          <div class="flex flex-auto" style="margin: 0">
            <n-slider
              v-model:value="value"
              :marks="props.marks"
              :step="step"
              :max="props.max"
              :min="props.min"
              :tooltip="false"
              :style="{ margin: '4px 0' }"
            />
          </div>
          <div class="flex row-reverse" style="width: 15%; min-width: 60px; font-size: large">
            {{ value }} {{ usePercent ? '%' : '' }}
          </div>
        </div>
      </template>
    </n-list-item>
  </n-list>
</template>
