# 依赖安装

## 配置环境

```
// 进入目录
cd vuexy/*
// 安装服务依赖，使用淘宝镜像
npm install --registry=https://registry.npm.taobao.org
// 改写node-sass
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass
// 运行服务
npm run serve
```

## 插件安装

### vee-validate 表单验证插件

```
// 安装
npm install vee-validate --save

// main.js 引入
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});
```

### vue-dplayer 视频插件

```
// 安装
npm install vue-dplayer -S
```

## 资源

- [vue-feather-icons](https://vue-feather-icons.netlify.com/)

# 上线模块

## 前台

```
项目
│
├── 首页/
│   ├── 轮播图公告
│   └── 活动页入口
│
├── 协会/
│   ├── 活动瞬间
│   └── 管理层介绍
│
│── 视频/
│   ├── 最新视频
│   ├── 视频详情
│   │   ├── 搜索模块
│   │   ├── 编程基础分类
│   │   ├── 题目讲解模块
│   │   └── 其他视频模块
│   │
│   └── 视频投稿
│
│── 软件/
│   ├── 最新软件
│   ├── 软件详情
│   │   ├── 搜索模块
│   │   ├── 编程应用分类
│   │   ├── 实用工具模块
│   │   └── 其他软件模块
│   │
│   └── 软件需求
│
│── 微服务
│
│── 个人
│
│── 反馈
│
└── 常见问题
```

## 后台

```
项目
│
├── 首页/
│   ├── 轮播图公告信息
│   └── 添加操作
│
├── 信息/
│   └── 反馈、投稿信息
│
└── 视频/
    ├── 视频信息
    └── 添加操作
```

