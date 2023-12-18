<template>
   <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div>
        <RouterLink :to="{path: `/posts/` + post.id}">
        Post title: <strong>{{ post.title }}</strong>
        </RouterLink>
      </div>
      <div>
        Post text: <strong>{{ post.body }}</strong>
      </div>
    </div>
      <MainButton class="btn primary" @click="$router.push(`/tutor/${post.id}`)">Open</MainButton>
      <MainButton class="btn danger" @click="$emit('remove', post)">Delete post</MainButton>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid green;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.danger {
  margin: 0;
}
.btn {
  margin: 0;
  margin-left: 15px;
}
</style>