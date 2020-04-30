/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "首页",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/association",
    name: "协会",
    slug: "association",
    icon: "MonitorIcon",
  },
  {
    header: "服务",
    icon: "PackageIcon",
    i18n: "Videos",
    items: [
      {
        url: null,
        name: "视频",
        icon: "YoutubeIcon",
        i18n: "Dashboard",
        submenu: [
          {
            url: '/video',
            name: "最新视频",
            slug: "video",
            i18n: "Video",
          },
          {
            url: '/video/detailed',
            name: "视频详情",
            slug: "video-detailed",
            i18n: "VideoDetailed",
          },
          {
            url: '/video/contribute',
            name: "视频投稿",
            slug: "contribute",
            i18n: "Contribute",
          },
        ]
      },
      {
        url: null,
        name: "软件",
        icon: "BoxIcon",
        i18n: "Dashboard",
        submenu: [
          {
            url: '/software',
            name: "最新软件",
            slug: "software",
            i18n: "software",
          },
          {
            url: '/software/detailed',
            name: "软件详情",
            slug: "software-detailed",
            i18n: "SoftwareDetailed",
          },
          {
            url: '/software/need',
            name: "软件需求",
            slug: "software-need",
            i18n: "software-need",
          },
        ]
      },
      {
        url: '/tools',
        name: "微服务",
        icon: "ArchiveIcon",
        slug: "tools",
        i18n: "tools",
      },
    ]
  },
  {
    header: "用户",
    icon: "PackageIcon",
    i18n: "Users",
    items: [
      {
        url: '/user',
        name: "个人",
        icon: "UserIcon",
        slug: "user",
        i18n: "User",
      },
      {
        url: '/user/opinion',
        name: "反馈",
        icon: "MailIcon",
        slug: "user-opinion",
        i18n: "Opinion",
      },
    ]
  },
]
