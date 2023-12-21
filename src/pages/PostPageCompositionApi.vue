<template>
  <hr/>
  <BaseInput class="width-item"
    v-model="searchQuery"
    placeholder="Search..."
    v-focus/>
  <div class="tools">
    <div>
      <!-- <MainButton class="btn primary" @click="openPopup">
        Create new post
      </MainButton> -->
      <!-- <MainButton class="btn primary" @click="fetchPosts">
        fetch posts
      </MainButton> -->
    </div>
    <my-select 
      v-model="selectedSort"
      :options="sortOptions"
      />
  </div>
  <my-dialog v-model:show="visibleDialog">
    <!-- <PostForm @create="createPost"/> -->
  </my-dialog>
  <PostList 
    :posts="searchAndSortedPosts" 
    v-if="!isFetching"/>
  <h2 v-else>Loading...</h2>
  <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Liker from '@/components/Liker.vue'
import {usePosts} from '@/hooks/usePosts'
import {useSortedPosts} from '@/hooks/useSortedPosts'

export default {
  components: {
    PostForm, PostList, Liker
  },
  data() {
    return {
      visibleDialog: false,
      sortOptions: [
        {value: 'title', name: 'Sort by name'},
        {value: 'body', name: 'Sort by text'},
      ],
    }
  },
  setup(props) {
    const {posts, totalPages, isFetching} = usePosts(4);
    const {selectedSort, searchQuery, searchAndSortedPosts} = useSortedPosts(posts);
 
    return {
      posts,
      totalPages,
      isFetching,
      selectedSort,
      searchAndSortedPosts,
      searchQuery
    }
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