<template>
  <div class="alert" role='alert'
       :class="{
         'alert-success': vStyle === 'success',
         'alert-info': vStyel === 'info',
         'alert-warning': vStyel === 'warning',
         'alert-danger': vStyel === 'danger'
         }">
         <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    dissimiss() {
      console.log('dissimiss');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
