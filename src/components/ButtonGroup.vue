<template>
  <div class="btn-group" role="group" :class="[( size ? 'btn-group-'+ size : '' ), {'btn-group': !vertical, 'btn-group-vertical': vertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: ''
    },
    vertical: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
