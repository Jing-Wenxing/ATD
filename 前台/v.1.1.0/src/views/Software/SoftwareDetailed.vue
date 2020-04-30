<template>
  <div class="main">
    <software-search v-if='islogin' />
    <pages-unlogin v-else />
  </div>
</template>

<script>
import SoftwareSearch from './components/SoftwareSearch'
import Unlogin from '../pages/unlogin'

export default {
  components: {
    'software-search': SoftwareSearch,
    'pages-unlogin': Unlogin,
  },
  data () {
    return {
      islogin: true,
    }
  },
  methods: {
    usermsg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/user/profile',
      })
        .then((response) => {
          if (response.data.Status == 0) {
            this.islogin = false
          }
          else {
            this.islogin = true
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created () {
    this.usermsg()
  }
}
</script>