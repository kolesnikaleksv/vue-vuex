export default {
  // logic from MyDialog
  name: 'my-dialog',
  props: {
    show: {
      type: Boolean,
      required: false
    }
  },
  // data() {

  // },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  },
  mounted() {

  }
  //...
}