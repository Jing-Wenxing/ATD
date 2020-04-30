<template>
  <div class="main">
    <vs-card>
      <software-singletable />
      <vs-divider />
      <software-videoadd />
    </vs-card>
  </div>
</template>

<script>
import SingleTable from './components/SingleTable'
import SoftwareAdd from './components/SoftwareAdd'


export default {
  components: {
    'software-singletable': SingleTable,
    'software-videoadd': SoftwareAdd,
  },
}
</script>