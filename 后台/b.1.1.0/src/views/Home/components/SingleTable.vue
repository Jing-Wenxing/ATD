<template>
  <div class="mb-base">
    <vs-table stripe
              :data="msgs">

      <template slot="thead">
        <vs-th>编号</vs-th>
        <vs-th>上传时间</vs-th>
        <vs-th>首页公告内容</vs-th>
        <vs-th>文件地址</vs-th>
        <vs-th>展示</vs-th>
        <vs-th>资源根网址</vs-th>
        <vs-th>修改数据</vs-th>
        <vs-th>删除</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr"
               v-for="(tr, indextr) in data">

          <vs-td :data="tr.id">
            {{ tr.id }}
          </vs-td>

          <vs-td :data="tr.date">
            {{ tr.date | formatDate }}
          </vs-td>

          <vs-td :data="tr.name">
            {{ tr.name }}
          </vs-td>

          <vs-td :data="tr.location">
            {{ tr.location }}
          </vs-td>

          <vs-td :data="tr.display">
            {{ tr.display == true ? '展示' : '不展示' }}
          </vs-td>

          <vs-td :data="tr.link">
            {{ tr.link=="" ? "无" : tr.link }}
          </vs-td>

          <vs-td :data="tr">
            <vs-button color="primary"
                       type="filled"
                       icon-pack="feather"
                       icon="icon-edit"
                       @click="single_edit(tr)"></vs-button>
          </vs-td>

          <vs-td :data="tr">
            <vs-button color="danger"
                       type="filled"
                       icon-pack="feather"
                       icon="icon-trash-2"
                       @click="single_delete(tr)"></vs-button>
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

    <!-- 编辑页 -->
    <vs-popup title="编辑"
              v-show=popupActivo
              button-close-hidden>
      <div class="vx-row mb-base">
        <div class="vx-col sm:w-1/2 w-full center">
          <span>
            <h4>id / 编号</h4>
          </span>
        </div>
        <div class="vx-col sm:w-1/2 w-full">
          <span>
            <h4>{{ this.msgs_item_id }}</h4>
          </span>
        </div>
      </div>

      <div class="vx-row mb-base">
        <div class="vx-col sm:w-1/2 w-full center">
          <span>
            <h4>name / 首页公告内容</h4>
          </span>
        </div>
        <div class="vx-col sm:w-1/2 w-full">
          <vs-input class="w-full"
                    icon-pack="feather"
                    icon="icon-edit-2"
                    icon-after
                    v-model="msgs_item_name" />
        </div>
      </div>

      <div class="vx-row mb-base">
        <div class="vx-col sm:w-1/2 w-full center">
          <span>
            <h4>display / 展示</h4>
          </span>
        </div>
        <div class="vx-col sm:w-1/2 w-full">
          <vs-switch v-model="msgs_item_display" />
        </div>
      </div>

      <div class="flex justify-between px-8">
        <vs-button id="edit-loading"
                   class="vs-con-loading__container"
                   color="primary"
                   vslor="primary"
                   type="filled"
                   @click=single_edit_yes>确认</vs-button>
        <vs-button color="danger"
                   type="filled"
                   @click=single_edit_no>取消</vs-button>
      </div>
    </vs-popup>

    <!-- 删除页 -->
    <vs-popup title="确认删除"
              v-show=popupActivodelete
              button-close-hidden>
      <p class="ml-base mb-base">确定删除该条数据吗？</p>
      <div class="flex justify-between px-8">
        <vs-button id="delete-loading"
                   class="vs-con-loading__container"
                   color="primary"
                   vslor="primary"
                   type="filled"
                   @click=single_delete_yes>确认</vs-button>
        <vs-button color="danger"
                   type="filled"
                   @click=single_delete_no>取消</vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 编辑页打开
      popupActivo: false,
      // 删除页打开
      popupActivodelete: false,
      // 信息数据
      msgs: [],
      // 编辑删除传参信息
      msgs_item_id: "",
      msgs_item_name: "",
      msgs_item_display: false,
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
    // ===== 删 =====
    // 删除函数
    single_delete (item) {
      this.popupActivodelete = true
      this.msgs_item_id = item.id
    },
    // 确认删除
    single_delete_yes () {
      // 删除加载
      this.$vs.loading({
        background: 'primary',
        color: '#fff',
        container: "#delete-loading",
        scale: 0.45
      })
      // 删除实体
      this.single_deletex()
    },
    // 取消删除
    single_delete_no () {
      this.popupActivodelete = false
    },
    // 删除实体
    single_deletex () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true
      axios({
        method: 'post',
        url: 'url/image/delete',
        data: {
          Id: this.msgs_item_id,
        }
      })
        .then((response) => {
          if (response.data.Status == 1) {
            this.$vs.loading.close("#delete-loading > .con-delete-loading")
            this.$vs.notify({ title: '删除成功', text: '操作已成功完成', color: 'success', icon: 'check_box' })
            setTimeout(() => {
              location.reload()
            }, 500);
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
          this.popupActivodelete = false
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    // ===== 改 ===== 
    // 编辑函数
    single_edit (item) {
      this.popupActivo = true
      this.msgs_item_id = item.id
      this.msgs_item_name = item.name
      this.msgs_item_display = item.display == 1 ? true : false
    },
    // 确认编辑
    single_edit_yes () {
      // 编辑加载
      this.$vs.loading({
        background: 'primary',
        color: '#fff',
        container: "#edit-loading",
        scale: 0.45
      })
      this.single_edit_text()
    },
    // 取消编辑
    single_edit_no () {
      this.popupActivo = false
    },
    // 编辑上传函数text
    single_edit_text () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true
      axios({
        method: 'post',
        url: 'url/image/text',
        data: {
          Id: this.msgs_item_id,
          Name: this.msgs_item_name,
        }
      })
        .then((response) => {
          if (response.data.Status == 1) {
            this.single_edit_flag()
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 编辑上传函数flag
    single_edit_flag () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true
      axios({
        method: 'post',
        url: 'url/image/flag',
        data: {
          Id: this.msgs_item_id,
          Display: this.msgs_item_display == true ? 1 : 0,
        }
      })
        .then((response) => {
          if (response.data.Status == 1) {
            this.$vs.loading.close("#edit-loading > .con-edit-loading")
            this.$vs.notify({ title: '修改成功', text: '操作已成功完成', color: 'success', icon: 'check_box' })
            setTimeout(() => {
              location.reload()
            }, 500);
          }
          else {
            this.$vs.notify({ title: '操作错误', text: response.data.Result.msg, color: 'warning', icon: 'check_box' })
          }
          this.popupActivo = false
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // ===== 查 ===== 
    get_msg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/image/all',
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
    },
    // ============== 
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margin-button {
  margin-right: 7.5px;
}
</style>

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