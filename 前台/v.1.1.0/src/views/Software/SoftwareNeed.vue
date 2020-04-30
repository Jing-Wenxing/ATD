<template>
  <div class="main">
    <usermsg-content v-if='islogin' />
    <pages-unlogin v-else />
  </div>
</template>

<script>
import Content from './components/SoftwareNeed_content'
import Unlogin from '../pages/unlogin'

export default {
  components: {
    'usermsg-content': Content,
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