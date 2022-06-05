<template>
  <div class="text-3xl font-bold text-blue-500 pb-3">LEAPERone</div>
  <n-card class="max-w-28em">
    <n-tabs
      class="card-tabs text-left"
      default-value="signup"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="手机号">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="验证码">
            <n-input />
            <div class="pl-1"></div>
            <n-button>获取验证码</n-button>
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong> 注册 </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
