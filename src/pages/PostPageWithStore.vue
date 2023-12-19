<template>
  <!-- <p>{{ $store.state.isAuth ? 'You are authorised': 'you are not authorised, go to authorisation' }}</p>
  <h1>Page thate uses store vuex</h1>
    <h2>My store state : {{ $store.state.likes }}</h2>
    <h3>Double likes: {{ $store.getters.doubleLikes }}</h3> -->
    <!-- <main-button class="btn primary" @click="$store.commit('likeIncr')">Add likes</main-button>
    <main-button class="btn primary" @click="$store.commit('likeDecr')">Remove likes</main-button> -->
  <hr/>
  <!-- <h3>Our state limit - {{ $store.state.post.limit }}</h3> -->
  <BaseInput class="width-item"
    v-model="searchQuery"
    placeholder="Search..."
    v-focus/>
  <div class="tools">
    <div>
      <MainButton class="btn primary" @click="openPopup">
        Create new post
      </MainButton>
      <MainButton class="btn primary" @click="fetchPosts">
        fetch posts
      </MainButton>
    </div>
    <my-select 
      v-model="selectedSort"
      :options="sortOptions"
      />
  </div>
  <my-dialog v-model:show="visibleDialog">
    <PostForm @create="createPost"/>
  </my-dialog>
  <PostList 
    :posts="sortedPosts" 
    @remove="removePost"
    v-if="!loading"/>
  <h2 v-else>Loading...</h2>
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Liker from '@/components/Liker.vue'
import axios from 'axios'
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'

export default {
  components: {
    PostForm, PostList, Liker
  },
  data() {
    return {
      visibleDialog: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.visibleDialog = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    openPopup() {
      this.visibleDialog = true
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      loading: state => state.post.loading,
      posts: state => state.post.posts,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts'
    })
  },
}
</script>

<style>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.width-item {
  width: 100%;
}
.observer {
  width: 100%;
  height: 10px;
  background: green;
}
</style>