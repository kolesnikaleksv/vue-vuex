<template>
   <div>
    <h2>List of posts</h2>
    <transition-group name="list-post">
      <PostItem 
        v-if="posts.length > 0"
        v-for="post in posts" 
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"/>
      <h2 v-else>There are not post here. Create your one</h2> 
    </transition-group>
   </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
/* .list-post-enter-active,
.list-post-leave-active {
  transition: all 0.5s ease;
}
.list-post-enter-from,
.list-post-leave-to {
  opacity: 0;
  transform: translateX(30px);
} */
.list-post-move,
.list-post-enter-active,
.list-post-leave-active {
  transition: all 0.5s ease;
}

.list-post-enter-from,
.list-post-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.list-post-leave-active {
  position: absolute;
}
/* sort animation */
.list-post-move {
  transition: transform 0.8s ease;
}
</style>