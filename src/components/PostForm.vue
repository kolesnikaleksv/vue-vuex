<template>
  <form name="baseForm" @submit.prevent>
    <h4>Create a new post</h4>
      <BaseInput
        v-model="post.title" 
        type="text"
        placeholder="Add Title"
        v-focus
      />
      <BaseInput
        v-model="post.body" 
        type="text"
        placeholder="Add Text"
      />
    <MainButton class="btn primary" @click="createPost">Add new post</MainButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      if(this.post.title && this.post.body) {
        this.post.id = Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
</style>