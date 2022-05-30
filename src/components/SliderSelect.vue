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
  <div class="min-w-320px">
    <n-list bordered>
      <n-list-item>
        <template #default>
          <div class="flex flex-auto flex-row">
            <div class="flex flex-row w-1/5 min-w-80px text-lg">
              {{ props.title }}
            </div>
            <div class="flex flex-auto m-0 min-w-160px">
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
            <div class="flex flex-row-reverse w-3/20 min-w-60px text-lg">
              {{ value }} {{ usePercent ? '%' : '' }}
            </div>
          </div>
        </template>
      </n-list-item>
    </n-list>
  </div>
</template>
