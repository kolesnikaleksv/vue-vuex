<template>
  <input type="text" :value="modelValue" @input="updateInput" >
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style>
input {
  border: 1px solid green;
  padding: 10px 15px;
  margin-top: 15px;
  font-size: 18px;
}
</style>