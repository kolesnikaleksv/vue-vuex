import axios from "axios";
export const postModule = {
  state: () => ({
    loading: true,
    posts: [],
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 4,
    totalPages: 2,
    sortOptions: [
      {value: 'title', name: 'Sort by name'},
      {value: 'body', name: 'Sort by text'},
    ],
  }),
  getters: {
    // from our computed
    sortedPosts(state){
      return [...state.posts].sort((post1, post2) =>  post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
      .filter(post => post.title.includes(state.searchQuery))
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.loading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try{
        commit('setLoading', true)
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit))
        commit('setPosts', responce.data)
      } catch(e) {
        alert('Error')
      } finally {
        commit('setLoading', false)
      }
    },
    async loadMorePosts({state, commit}) {
      try{
        commit('setPage', state.page += 1); // state.page++ don't work
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });console.log(responce.data)
        commit('setTotalPages', Math.ceil(responce.headers['x-total-count'] / state.limit))
        commit('setPosts', [...state.posts, ...responce.data]);
      } catch(e) {
        alert('Error')
      }
    },
  },
  namespaced: true
}