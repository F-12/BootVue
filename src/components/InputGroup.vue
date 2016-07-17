<template>
  <div class="input-group" :class="[( size ? 'btn-group-'+ size : '' )]">
    <slot name="before"></slot>
    <input type="text" class="form-control" value="" placeholder="placeholder">
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String
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
