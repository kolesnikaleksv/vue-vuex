<template>
    <div class="liker">
    <button class="btn" @click="addLike">Like</button>
    <button class="btn" @click="addDisLike">dislike</button>
    <div>
      Our likes: <strong>{{ grade.likes }}</strong>
    </div>
    <div>
      Our dislikes: <strong>{{ grade.dislikes }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grade: {
        likes: '',
        dislikes: ''
      }
    }
  },
  methods: {
    addLike() {
      this.grade.likes++
    },
    addDisLike() {
      this.grade.dislikes++
    },
  }
}
</script>

<style>
.liker {
  margin: 15px 0;
  border: 1px solid green;
  padding: 15px;
}
</style>