<template>
  <div class="panel"
       :class="{
        'panel-primary': vStyle === 'primary',
        'panel-success': vStyle === 'success',
        'panel-info': vStyle === 'info',
        'panel-warning': vStyle === 'warning',
        'panel-danger': vStyle === 'danger',
        'panel-default': !vStyle }">
    <div class="panel-heading">
      <slot name="heading"></slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
