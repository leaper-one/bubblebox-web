<template>
  <div class="text-3xl font-bold text-blue-500 pb-3">LEAPERone</div>
  <n-card class="max-w-28em">
    <n-tabs
      class="card-tabs text-left"
      default-value="signin"
      size="large"
      animated
      style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="帐号">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong> 登录 </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
