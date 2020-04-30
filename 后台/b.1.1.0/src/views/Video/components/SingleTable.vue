<template>
  <div class="mb-base">
    <vs-table stripe
              :data="msgs">

      <template slot="thead">
        <vs-th>编号</vs-th>
        <vs-th>视频名称</vs-th>
        <vs-th>视频介绍</vs-th>
        <vs-th>视频分类</vs-th>
        <vs-th>视频作者</vs-th>
        <vs-th>上传时间</vs-th>
        <vs-th>点击率</vs-th>
        <vs-th>白嫖链接修改</vs-th>
        <vs-th>删除</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr"
               v-for="(tr, indextr) in data">

          <vs-td :data="tr.id">
            {{ tr.id }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.name }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.intro }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.video_class }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.author }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.update }}
          </vs-td>

          <vs-td :data="tr.id">
            {{ tr.clicks == '' ? 0 : tr.clicks }}
          </vs-td>

          <vs-td :data="tr">
            <div style="display: flex;">
              <vs-button class="margin-button"
                         color="primary"
                         type="filled"
                         icon-pack="feather"
                         icon="icon-edit"
                         @click="single_edit(tr)"></vs-button>
            </div>
          </vs-td>

          <vs-td :data="tr">
            <div style="display: flex;">
              <vs-button class="margin-button"
                         color="danger"
                         type="filled"
                         icon-pack="feather"
                         icon="icon-trash-2"
                         @click="single_delete(tr)"></vs-button>
            </div>
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
    <vs-popup title="修改白嫖链接"
              v-show=popupActivo
              button-close-hidden>
      <div class="vx-row mb-base">
        <div class="vx-col sm:w-1/2 w-full center">
          <span>
            <h4>编号</h4>
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
            <h4>新白嫖链接</h4>
          </span>
        </div>
        <div class="vx-col sm:w-1/2 w-full">
          <vs-input class="w-full"
                    icon-pack="feather"
                    icon="icon-edit-2"
                    icon-after
                    v-model="msgs_item_templink" />
        </div>
      </div>

      <div class="vx-row mb-base">
        <div class="vx-col sm:w-1/2 w-full center">
          <span>
            <h4>使用</h4>
          </span>
        </div>
        <div class="vx-col sm:w-1/2 w-full">
          <vs-switch v-model="msgs_item_temp" />
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
      msgs_item_temp: false,
      msgs_item_templink: "",
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
        url: 'url/video/delete',
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
      this.msgs_item_temp = item.temp == 1 ? true : false
      this.msgs_item_templink = item.temp_link
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
      this.single_edit_temp()
    },
    // 取消编辑
    single_edit_no () {
      this.popupActivo = false
    },
    // 编辑上传
    single_edit_temp () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'post',
        url: 'url/video/temp',
        data: {
          Id: this.msgs_item_id,
          Temp: this.msgs_item_temp == true ? "1" : "0",
          Temp_link: this.msgs_item_templink,
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
          console.log(error)
        });
    },
    // ===== 查 =====
    get_msg () {
      const axios = require('axios').default
      axios.defaults.withCredentials = true

      axios({
        method: 'get',
        url: 'url/video/show',
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
          console.log(error)
        });
    },
    // ============== 
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