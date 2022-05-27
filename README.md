# bubblebox-web

泡泡树洞插件后台的前端仓库

## 项目开发环境说明

**安装依赖**

```bash
pnpm i
```

项目使用了 `pnpm` 作为包管理器，`pnpm` 兼容大多数 `npm` 的指令，只需要在源指令前加 `p` 即可，详细介绍可以参考下面的文章

`pnpm` 包管理器的官方文档：[https://pnpm.js.org/](https://pnpm.js.org/) 以及介绍文章 [https://juejin.cn/post/6932046455733485575](https://juejin.cn/post/6932046455733485575)

**在本地开发环境运行项目**

```bash
pnpm dev
```

项目使用了 [Vite](https://github.com/vitejs/vite) 作为构建工具，对比起来，`Vite` 比 `Webpack` 更加简单，更加快速，并且开箱即用，无需繁琐的配置。

有关 `Vite` 的介绍文章：[https://juejin.cn/post/7064853960636989454](https://juejin.cn/post/7064853960636989454)

**代码风格规范**

项目简单配置了多种代码风格规范，包括：

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)

对于多数情况而言，代码风格与规范不符而导致的报错，只需按下 `ctrl + s` 或 `cmd + s` 即可自动修复。

**组件库使用**

项目的组件库选择了 [NaiveUI](https://github.com/TuSimple/naive-ui)，组件的使用说明可以参考 `NaiveUI` 的官方说明文档

同时项目添加了一个插件，可以实现自动按需导入 `NaiveUI` 中的组件，无需提前 `import` 即可使用

## 代码提交说明

每个人都将代码提交到自己 `fork` 下来的仓库中，最后再通过提交 `PR` 的方式，将自己的代码合并到主仓库的 `dev` 分支上。提完 `PR` 后，最后找至少一位小伙伴 `Review` 一下代码，然后再点 `Merge` 的按钮

**同步上游更新**

```bash
git pull upstream dev # 将上游的更新同步到本地的 dev 分支上
```
