<template>
  <!-- <Liker :likes="likes" :dislikes="dislikes"/> -->
  <hr/>
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
    v-if="!isFetching"/>
  <h2 v-else>Loading...</h2>
  <!-- <my-pagination
    :totalPages="totalPages"
    :page="page"
    v-model="page"/> -->
  <!-- <div ref="observer" class="observer"></div> -->

  <!-- move observe function to custom directives -->
  <!-- <div v-intersection="{name: 'alex'}" class="observer"></div> -->
  <div v-intersection="loadMorePosts" class="observer"></div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Liker from '@/components/Liker.vue'
import axios from 'axios'

export default {
  components: {
    PostForm, PostList, Liker
  },
  data() {
    return {
      likes: 0,
      dislikes: 0,
      visibleDialog: false,
      isFetching: true,
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
    }
  },
  methods: {
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
    async fetchPosts() {
      try{
        this.isFetching = true;
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit)
        // this.posts = [...this.posts, ...responce.data];
        this.posts = responce.data;
      } catch(e) {
        alert('Error')
      } finally {
        this.isFetching = false;
      }
    },
    async loadMorePosts() {
      try{
        // this.isFetching = true;
        this.page++
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...responce.data];
      } catch(e) {
        alert('Error')
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) =>  post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
      .filter(post => post.title.includes(this.searchQuery))
    }
  },
  // watch: {
  //   page() {
  //     this.fetchPosts();
  //   }
  // }
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