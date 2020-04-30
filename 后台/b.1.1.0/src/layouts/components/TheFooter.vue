<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
  <footer class="the-footer flex-wrap justify-between"
          :class="classes">
    <p>
      <span>COPYRIGHT &copy;</span>
      <span>2017 - {{ new Date().getFullYear() }} </span>
      <router-link to="/association">ATD计算机协会 </router-link>
      <span class="hidden sm:inline-block">, All rights Reserved</span>
    </p>
    <p>
      <span class="md:flex hidden items-center">
        <span>制作团队: 官网项目组</span>
        <feather-icon icon="HeartIcon"
                      svgClasses="stroke-current text-danger w-6 h-6"
                      class="ml-2 mr-2" />
        <span>B 1.0.4 内测版</span>
      </span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    }
  }
}
</script>