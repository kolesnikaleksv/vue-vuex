<template>
  <div>
    <h1>Page for one post</h1>
    <div>Post: {{ $route.params.id }}</div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
  <div>{{ $route.params }}</div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        post: {}
      }
    },
    name: 'post-page',
    methods: {
      async fetchPost() {
      try{
        this.isFetching = true;
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
        this.post = responce.data;
      } catch(e) {
        alert('Error')
      } finally {
        this.isFetching = false;
      }
    },
    },
    mounted() {
      this.fetchPost();
    }
  }
</script>

<style scoped>

</style>