<template>
  <div class="main">
    <vs-card>
      <home-singletable />
      <vs-divider />
      <home-carouseladd />
    </vs-card>
  </div>
</template>

<script>
import SingleTable from './components/SingleTable'
import CarouselAdd from './components/CarouselAdd'

export default {
  components: {
    'home-singletable': SingleTable,
    'home-carouseladd': CarouselAdd,
  },
}
</script>