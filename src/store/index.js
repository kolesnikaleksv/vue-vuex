import { createStore } from "vuex";

export default createStore({
  state: {
    likes: 2,
    isAuth: false
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2
    }
  },
  mutations: {
    likeIncr(state) {
      state.likes++
    },
    likeDecr(state) {
      state.likes--
    }
  },
  actions: {

  },
  modules: {

  }
})