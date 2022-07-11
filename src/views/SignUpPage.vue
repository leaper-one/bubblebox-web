<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()

// TODO：注册数据获取
const signupInfo = ref({
  phone: '',
  idcode: '',
  password: '',
  repassword: ''
})

// TODO：验证码发送功能
const sendCode = () => {
  message.success('验证码已发送！')
}

// TODO：注册功能
const signup = () => {
  message.success('注册成功！')
}
</script>

<template>
  <div class="text-3xl font-bold text-blue-500 pb-3">LEAPERone</div>
  <n-card class="max-w-28em">
    <n-tabs
      class="card-tabs text-left"
      default-value="signup"
      size="large"
      animated
      :style="{ margin: '0 -4px' }"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="手机号">
            <n-input v-model:value="signupInfo.phone" placeholder="请输入手机号" :maxlength="11" />
          </n-form-item-row>
          <n-form-item-row label="验证码">
            <n-input v-model:value="signupInfo.idcode" placeholder="请输入验证码" :maxlength="20" />
            <div class="pl-1"></div>
            <n-button @click="sendCode()">获取验证码</n-button>
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input
              v-model:value="signupInfo.password"
              placeholder="请输入密码"
              :maxlength="20"
              type="password"
            />
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input
              v-model:value="signupInfo.repassword"
              placeholder="请重复密码"
              :maxlength="20"
              type="password"
            />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="signup()"> 注册 </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
