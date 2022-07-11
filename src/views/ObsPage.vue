<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

import PluginStyleSelector from '../components/PluginStyleSelector.vue'
import PrevierwList from '../components/PreviewList.vue'
import SliderSelect from '../components/SliderSelect.vue'
import UploadWay from '../components/UploadWay.vue'

// 预览组件数据
// TODO：获取投稿信息
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
// TODO：获取字体大小数据，实现相关逻辑
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
// TODO：获取不透明度数据，实现相关逻辑
const transparencyList = {
  title: '不透明度',
  marks: {},
  defaultValue: 0,
  max: 100,
  min: 0
}

// 排序
const sort = ref(false)

// 样式选择
// TODO：获取已选择的样式
const styleSelect = 'style2'
const styleOptions = [
  {
    label: '默认样式1',
    value: 'style1'
  },
  {
    label: '默认样式2',
    value: 'style2'
  },
  {
    label: '默认样式3',
    value: 'style3'
  }
]

// 投稿方式
// TODO：获取投稿方式
const uploadWayEmail = 'example@email.com'
const uploadWayUrl = 'www.example.com'
</script>

<template>
  <n-message-provider>
    <div class="w-4/5">
      <div class="flex flex-col w-4/5 min-w-800px">
        <div class="flex flex-row w-1/1">
          <div class="flex flex-col w-1/2 min-w-360px mr-8">
            <!-- 字体 -->
            <div class="w-1/1">
              <SliderSelect
                :title="fontList.title"
                :marks="fontList.marks"
                :defaultValue="fontList.defaultValue"
                :max="fontList.max"
                :min="fontList.min"
              />
            </div>

            <!-- 不透明度 -->
            <div class="w-1/1">
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

          <div class="flex flex-col w-1/2 ml-8">
            <!-- 投稿方式 -->
            <div>
              <UploadWay :email="uploadWayEmail" :url="uploadWayUrl" />
            </div>

            <!-- 选择样式 -->
            <div class="w-1/1">
              <PluginStyleSelector :styleSelect="styleSelect" :styleOptions="styleOptions" />
            </div>
          </div>
        </div>

        <div class="w-1/10 min-w-220px">
          <n-list bordered>
            <n-list-item>
              <template #suffix>
                <n-switch v-model:value="sort" />
              </template>

              <template #default>
                <div class="min-w-130px text-lg">
                  泡泡排序{{ sort.valueOf() ? '已开启' : '已关闭' }}
                </div>
              </template>
            </n-list-item>
          </n-list>
        </div>

        <div>
          <PrevierwList :list="list" />
        </div>
      </div>
    </div>
  </n-message-provider>
</template>
