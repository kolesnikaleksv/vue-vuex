import { createStore } from "vuex";

// export default createStore({
//   state: {

//   },
//   getters: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
//   modules: {

//   }
// })

export default createStore({
  state: {
    likes: 2
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