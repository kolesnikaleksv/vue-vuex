<template>
  <hr/>
  <!-- <h3>Our state limit - {{ $store.state.post.limit }}</h3> -->
  <!-- <BaseInput class="width-item"
    v-model="searchQuery"
    placeholder="Search..."
    v-focus/> -->
    <BaseInput class="width-item"
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
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
    <!-- <my-select 
      v-model="selectedSort"
      :options="sortOptions"
      /> -->
      <my-select 
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
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
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
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