<template>
  <div class="main">
    <vs-card>
      <video-singletable />
      <vs-divider />
      <video-videoadd />
    </vs-card>
  </div>
</template>

<script>
import SingleTable from './components/SingleTable'
import VideoAdd from './components/VideoAdd'

export default {
  components: {
    'video-singletable': SingleTable,
    'video-videoadd': VideoAdd,
  },
}
</script>