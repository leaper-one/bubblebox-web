<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const message = useMessage()

// TODO：登录数据获取
const signinInfo = ref({
  name: '',
  password: ''
})

// TODO：登录功能
const signin = () => {
  message.success('登陆成功！')
}

const toRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="text-3xl font-bold text-blue-500 pb-3">LEAPERone</div>
  <n-card class="max-w-28em">
    <n-tabs
      class="card-tabs text-left"
      default-value="signin"
      size="large"
      animated
      :style="{ margin: '0 -4px' }"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="帐号">
            <n-input v-model:value="signinInfo.name" placeholder="请输入帐号" :maxlength="20" />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input
              v-model:value="signinInfo.password"
              placeholder="请输入密码"
              :maxlength="20"
              type="password"
            />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="signin()"> 登录 </n-button>
        <div class="flex flex-row-reverse">
          <div>
            没有账号？
            <n-button text tag="a" target="_blank" type="primary" @click="toRegister()">
              立即注册
            </n-button>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
