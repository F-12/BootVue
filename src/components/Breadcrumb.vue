<template>
  <ol class="breadcrumb">
      <li v-for="item in items"><a href="{{ item.href }}">{{ item.text }}</a></li>
  </ol>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: []
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
