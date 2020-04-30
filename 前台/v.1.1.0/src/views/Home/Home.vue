<template>
  <div class="main">
    <home-slideshow />
    <home-actionhere />
  </div>
</template>

<script>
import SlideShow from './components/SlideShow.vue'
import ActionHere from './components/ActionHere.vue'

export default {
  components: {
    'home-slideshow': SlideShow,
    'home-actionhere': ActionHere,
  },
}
</script>