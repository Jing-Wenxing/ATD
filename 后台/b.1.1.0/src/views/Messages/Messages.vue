<template>
  <div>
    <vs-card>
      <vs-table stripe
                :data="msgs">

        <template slot="thead">
          <vs-th>id / 编号</vs-th>
          <vs-th>user_login / 用户名</vs-th>
          <vs-th>name / 姓名</vs-th>
          <vs-th>contact / 联系方式</vs-th>
          <vs-th>title / 信息主题</vs-th>
          <vs-th>description / 信息内容</vs-th>
          <vs-th>date / 信息时间</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr"
                 v-for="(tr, indextr) in data">

            <vs-td :data="tr.id">
              {{ tr.id }}
            </vs-td>

            <vs-td :data="tr.user_login">
              {{ tr.user_login }}
            </vs-td>

            <vs-td :data="tr.name">
              {{ tr.name }}
            </vs-td>

            <vs-td :data="tr.contact">
              {{ tr.contact }}
            </vs-td>

            <vs-td :data="tr.title">
              {{ tr.title }}
            </vs-td>

            <vs-td :data="tr.description">
              {{ tr.description }}
            </vs-td>

            <vs-td :data="tr.date">
              {{ tr.date | formatDate}}
            </vs-td>

          </vs-tr>
        </template>
      </vs-table>

      <!-- 加载条 -->
      <div v-show="loading_show"
           class="fill-row-loading">
        <div :class="{'activeLoading':false}"
             id="loading-default"
             class="vs-con-loading__container loading-example">
        </div>
      </div>
    </vs-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msgs: [],
      // 加载展示
      loading_show: true,
    }
  },
  mounted () {
    this.$vs.loading({
      container: `#loading-default`,
      scale: 0.6
    })
  },
  methods: {
    // 获取信息
    get_msg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/feedback/show',
      })
        .then((response) => {
          if (response.data.Status == 1) {
            this.loading_show = false
            this.msgs = response.data.Result
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  filters: {
    formatDate: function (value) {
      var date = new Date(value * 1);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate();
      return Y + M + D;
    }
  },
  created () {
    this.get_msg()
  }
}
</script>

<style>
.fill-row-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.loading-example {
  width: 100%;
  height: 50px;

  float: left;
  border-radius: 10px;
  margin: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
}
</style>