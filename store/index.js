export const state = () => ({
  // 样式状态: true为白色, false为透明
  baseBG: true,
  menuBG: true,
  login: false,
  mobile: false,
})

export const mutations = {
  baseBGWhite(state) {
    state.baseBG = true
  },
  baseBGTransparent(state) {
    state.baseBG = false
  },
  menuBGWhite(state) {
    state.menuBG = true
  },
  menuBGTransparent(state) {
    state.menuBG = false
  },
  loginYes(state) {
    state.login = true
  },
  loginNO(state) {
    state.login = false
  },
  mobileYes(state) {
    state.mobile = true
  },
  mobileNO(state) {
    state.mobile = false
  },
}
