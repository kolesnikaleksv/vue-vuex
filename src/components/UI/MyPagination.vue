<template>
   <div class="page__wrapper">
    <div 
      class="page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ 
        'current-page' : page === pageNumber
       }"
       @click="changePage(pageNumber)">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-pagination',
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      page: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(pageNumber) {
        this.$emit('update:modelValue', pageNumber)
      }
    },
  }
</script>

<style scoped>
.page__wrapper {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
}
.page {
  border: 2px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  padding: 2px;
  border-radius: 4px;
  cursor: pointer;
}
.page:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.2s;
}
.current-page {
  border: 2px solid teal;
}
</style>