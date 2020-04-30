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
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // 首页
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home/Home.vue')
        },
        // =============================================================================
        // 协会
        // =============================================================================
        {
          path: '/association',
          name: 'association',
          component: () => import('./views/Association/main/Association.vue'),
        },
        {
          path: '/association/all_managsement',
          name: 'managements',
          component: () => import('./views/Association/components/AllManagements.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '协会', url: '/association' },
              { title: '管理层手册', active: true },
            ],
            pageTitle: '管理层手册',
            rule: 'editor'
          },
        },
        {
          path: '/association/management',
          name: 'management',
          component: () => import('./views/Association/components/Management.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '协会', url: '/association' },
              { title: '管理层手册', active: true },
            ],
            pageTitle: '管理层手册',
            rule: 'editor'
          },
        },
        {
          path: '/association/member',
          name: 'member',
          component: () => import('./views/Association/components/Member.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '协会', url: '/association' },
              { title: '会员手册', active: true },
            ],
            pageTitle: '会员手册',
            rule: 'editor'
          },
        },
        {
          path: '/association/financial',
          name: 'financial',
          component: () => import('./views/Association/components/Financial.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '协会', url: '/association' },
              { title: '财务报表', active: true },
            ],
            pageTitle: '财务报表',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 用户
        // =============================================================================
        {
          path: '/user',
          name: 'user',
          component: () => import('./views/User/UserMessage.vue'),
        },
        {
          path: '/user/opinion',
          name: 'opinion',
          component: () => import('./views/User/Opinion.vue'),
        },
        // =============================================================================
        // 视频
        // =============================================================================
        {
          path: '/video',
          name: 'video',
          component: () => import('./views/Video/Video.vue'),
        },
        {
          path: '/video/contribute',
          name: 'contribute',
          component: () => import('./views/Video/VideoContribute.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '视频', active: '/video' },
              { title: '投稿', active: true },
            ],
            pageTitle: '投稿',
            rule: 'editor'
          },
        },
        {
          path: '/video/detailed',
          name: 'detailed',
          component: () => import('./views/Video/VideoDetailed'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '视频', active: '/video' },
              { title: '详情', active: true },
            ],
            pageTitle: '详情',
            rule: 'editor'
          },
        },
        {
          path: '/video/programbase',
          name: 'programbase',
          component: () => import('./views/Video/actions/ProgramBase.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '视频', url: '/video' },
              { title: '编程基础', active: true },
            ],
            pageTitle: '编程基础',
            rule: 'editor'
          },
        },
        {
          path: '/video/topic',
          name: 'topic',
          component: () => import('./views/Video/actions/Topic.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '视频', active: '/video' },
              { title: '题目讲解', active: true },
            ],
            pageTitle: '题目讲解',
            rule: 'editor'
          },
        },
        {
          path: '/video/others',
          name: 'video-others',
          component: () => import('./views/Video/actions/Others.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '视频', active: '/video' },
              { title: '其他视频', active: true },
            ],
            pageTitle: '其他视频',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 软件
        // =============================================================================
        // 软件
        {
          path: '/software',
          name: 'software',
          component: () => import('./views/Software/Software.vue'),
        },
        {
          path: '/software/need',
          name: 'software-need',
          component: () => import('./views/Software/SoftwareNeed'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '软件', active: '/software' },
              { title: '软件需求', active: true },
            ],
            pageTitle: '软件需求',
            rule: 'editor'
          },
        },
        {
          path: '/software/detailed',
          name: 'detaileds',
          component: () => import('./views/Software/SoftwareDetailed'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '软件', active: '/video' },
              { title: '详情', active: true },
            ],
            pageTitle: '详情',
            rule: 'editor'
          },
        },
        {
          path: '/software/codes',
          name: 'codes',
          component: () => import('./views/Software/actions/Code.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '软件', url: '/software' },
              { title: '编程应用', active: true },
            ],
            pageTitle: '编程应用',
            rule: 'editor'
          },
        },
        {
          path: '/software/tools',
          name: 'tools',
          component: () => import('./views/Software/actions/Tools.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '软件', url: '/software' },
              { title: '实用工具', active: true },
            ],
            pageTitle: '实用工具',
            rule: 'editor'
          },
        },
        {
          path: '/software/others',
          name: 'software-others',
          component: () => import('./views/Software/actions/SOther.vue'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '软件', url: '/software' },
              { title: '其他软件', active: true },
            ],
            pageTitle: '其他软件',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 工具箱
        // =============================================================================
        {
          path: '/tools',
          name: 'tools',
          component: () => import('./views/Tools/Tools'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '微服务', active: true },
            ],
            pageTitle: '微服务',
            rule: 'editor'
          },
        },
        // =============================================================================
        // 测试
        // =============================================================================
        {
          path: '/test',
          name: 'test',
          component: () => import('./views/pages/Test'),
          meta: {
            breadcrumb: [
              { title: 'Home', url: '/' },
              { title: '测试', active: true },
            ],
            pageTitle: '测试',
            rule: 'editor'
          },
        },
        // =============================================================================
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
          path: '/pages/register',
          name: 'page-register',
          component: () => import('@/views/pages/Register.vue')
        },
        {
          path: '/pages/found-password',
          name: 'page-found-password',
          component: () => import('@/views/pages/Foundpass.vue')
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
