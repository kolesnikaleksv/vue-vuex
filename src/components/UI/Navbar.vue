<template>
  <nav class="navbar">
    <MainButton class="btn primary"><RouterLink to="/">Home</RouterLink></MainButton>
    <MainButton class="btn primary"><RouterLink to="/posts">Posts</RouterLink></MainButton>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
  export default {
    name: 'navbar'
  }
</script>

<style scoped>
.navbar {
  background: #50C846;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 15px;
}
.btn {
  margin: 0;
}
</style>