<template>
  <div class="centerx">
    <vx-card>
      <vs-table stripe
                :data="users">
        <template slot="header">
          <h3>
            Users
          </h3>
        </template>
        <template slot="thead">
          <vs-th>
            Email
          </vs-th>
          <vs-th>
            Name
          </vs-th>
          <vs-th>
            Website
          </vs-th>
          <vs-th>
            Nro
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr"
                 v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].email">
              {{data[indextr].email}}
            </vs-td>

            <vs-td :data="data[indextr].username">
              {{data[indextr].name}}
            </vs-td>

            <vs-td :data="data[indextr].id">
              {{data[indextr].id}}
            </vs-td>

            <vs-td :data="data[indextr].id">
              {{data[indextr].website}}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>

      <div class="fill-row">
        <div id="div-with-loading"
             class="vs-con-loading__container">Load Me!</div>
      </div>
    </vx-card>

    <vs-button ref="loadableButton"
               id="button-with-loading"
               class="vs-con-loading__container"
               @click="openLoadingContained"
               type="relief"
               vslor="primary">Button with Loading</vs-button>

    <vs-button @click="closeLoadingContained"
               type="relief"
               vslor="primary">Close with Loading</vs-button>

    <vs-button @click="openLoadingInDiv"
               type="relief"
               vslor="primary">Div with Loading</vs-button>

    <!-- <div class="fill-row-loading">
      <div :class="{'activeLoading':activeLoading}"
           @click="openLoading(type)"
           v-for="type in types"
           :id="[`loading-${type}`]"
           class="vs-con-loading__container loading-example">
      </div>
    </div> -->

    <div class="fill-row-loading"
         :display="false">
      <div :class="{'activeLoading':activeLoading}"
           id="loading-default"
           class="vs-con-loading__container loading-example">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "website": "hildegard.org",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "website": "anastasia.net",
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "website": "ramiro.info",
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "website": "kale.biz",
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "website": "demarco.info",
        },
      ],
      backgroundLoading: 'primary',
      colorLoading: '#fff',
      types: [
        'default',
        // 'point',
        // 'radius',
        // 'corners',
        // 'border',
        // 'sound',
        // 'material',
      ],
      activeLoading: false,
    }
  },
  mounted () {
    // this.types.forEach((type) => {
    //   // console.log(type)
    //   this.$vs.loading({
    //     container: `#loading-${type}`,
    //     type,
    //     text: type
    //   })
    // })
    this.$vs.loading({
      container: `#loading-default`,
    })
  },
  methods: {
    openLoadingContained () {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-with-loading",
        scale: 0.45
      })
      // setTimeout(() => {
      // }, 3000);
    },
    closeLoadingContained () {
      this.$vs.loading.close("#button-with-loading > .con-vs-loading")
    },
    openLoadingInDiv () {
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      })
      setTimeout(() => {
        this.$vs.loading.close('#div-with-loading > .con-vs-loading')
      }, 3000);
    },
    openLoading (type) {
      this.activeLoading = true
      this.$vs.loading({
        type: type,
      })
      setTimeout(() => {
        this.activeLoading = false
        this.$vs.loading.close()
      }, 3000);
    },
  }
}
</script>

<style>
#div-with-loading {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
</style>

<style lang="stylus">
.fill-row-loading
  display flex
  align-items center
  justify-content center
  flex-wrap wrap
  .loading-example
    width 120px
    float left
    height 120px
    box-shadow 0px 5px 20px 0px rgba(0, 0, 0, 0.05)
    border-radius 10px
    margin 8px
    transition all 0.3s ease
    cursor pointer
    &:hover
      box-shadow 0px 0px 0px 0px rgba(0, 0, 0, 0.05)
      transform translate(0, 4px)
    h4
      z-index 40000
      position relative
      text-align center
      padding 10px
    &.activeLoading
      opacity 0 !important
      transform scale(0.5)
</style>