<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

import OvervierwList from '../components/OverviewList.vue'
import SliderSelect from '../components/SliderSelect.vue'

// 预览组件数据
const list = [
  {
    avatar: 'https://photo.zjlblog.site/avatar.jpg',
    info: '测试内容1'
  },
  {
    avatar: 'https://photo.zjlblog.site/avatar.jpg',
    info: '测试内容2'
  }
]

// 字体大小数据
const fontList = {
  title: '字体大小',
  marks: {
    10: '',
    12: '',
    14: '',
    16: '',
    18: '',
    20: '',
    24: '',
    36: '',
    72: ''
  },
  defaultValue: 16,
  max: 72,
  min: 10
}

// 不透明度数据
const transparencyList = {
  title: '不透明度',
  marks: {},
  defaultValue: 0,
  max: 100,
  min: 0
}

// 排序
const sort = ref(false)
</script>

<template>
  <n-message-provider>
    <div style="display: flex; flex-direction: column; width: 80%">
      <div style="display: flex; flex-direction: row; width: 50%">
        <div style="display: flex; flex-direction: column; width: 100%">
          <!-- 字体 -->
          <div style="width: 100%">
            <SliderSelect
              :title="fontList.title"
              :marks="fontList.marks"
              :defaultValue="fontList.defaultValue"
              :max="fontList.max"
              :min="fontList.min"
            />
          </div>

          <!-- 不透明度 -->
          <div style="width: 100%">
            <SliderSelect
              :title="transparencyList.title"
              :marks="transparencyList.marks"
              :defaultValue="transparencyList.defaultValue"
              :max="transparencyList.max"
              :min="transparencyList.min"
              :usePercent="true"
              :step="1"
            />
          </div>
        </div>
      </div>
      <div style="width: 10%; min-width: 220px">
        <n-list bordered>
          <n-list-item>
            <template #suffix>
              <n-switch v-model:value="sort" />
            </template>
            <template #default>
              <div style="min-width: 130px; font-size: large">
                泡泡排序{{ sort.valueOf() ? '已开启' : '已关闭' }}
              </div>
            </template>
          </n-list-item>
        </n-list>
      </div>
      <div>
        <OvervierwList :list="list" />
      </div>
    </div>
  </n-message-provider>
</template>
