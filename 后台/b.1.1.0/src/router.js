/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // 初始载入转到
        // =============================================================================
        // {
        //   path: '/',
        //   redirect: '/home'
        // },
        // =============================================================================
        // 首页
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home/Home.vue'),
          meta: {
            pageTitle: '轮播图公告',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 信息
        // =============================================================================
        {
          path: '/messages',
          name: 'messages',
          component: () => import('./views/Messages/Messages.vue'),
          meta: {
            pageTitle: '反馈、投稿信息',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 视频
        // =============================================================================
        {
          path: '/video',
          name: 'video',
          component: () => import('./views/Video/Video.vue'),
          meta: {
            pageTitle: '视频数据',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 视频
        // =============================================================================
        {
          path: '/software',
          name: 'software',
          component: () => import('./views/Software/Software.vue'),
          meta: {
            pageTitle: '软件数据',
            rule: 'editor'
          },
        },
        // {
        //   path: '/pagetest',
        //   name: 'pagetest',
        //   component: () => import('./views/pagetest.vue'),
        // },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

export default router
