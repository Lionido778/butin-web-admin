import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token // vux存储 token
      localStorage.setItem('token', token) // localStorage存储 token
    }
  },
  actions: {
    // 登录
    login({ commit }, loginInfo) {
      return new Promise((resolve, reject) => {
        loginApi(loginInfo)
          .then((res) => {
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
