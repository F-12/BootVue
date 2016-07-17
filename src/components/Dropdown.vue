<!--
  Spec: dropdown组件
-->
<template>
  <div class="btn-group clearfix" :class="[{'dropdown' : !up, 'dropup': up}, (size ? 'btn-group-'+ size : '')]">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggle">
    {{ placeholder }}
      <span class="caret"></span>
    </button>
    <!-- Alignment: dropdown-menu-left / dropdown-menu-right -->
    <ul class="dropdown-menu" :class="{'dropdown-menu-right': right}">
      <template v-for="item in items">
        <li v-if="item.header" class="dropdown-header">{{ item.label }}</li>
        <li v-if="item.divider" class="divider" role="separator"></li>
        <li v-if="!item.header && !item.divider" value="{{ item.value }}" :class="{ 'disabled': item.disabled }"><a href="#">{{ item.label }}</a></li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'items', 'position', 'up', 'right', 'size'],
  data() {
    return {
    };
  },
  methods: {
    toggle() {
      // add class 'open' to dropdown div
      // set attribute aria-expanded of button to false
      this.$el.classList.toggle('open');
      let expanded = this.$el.querySelector('button[data-toggle=dropdown]').getAttribute('aria-expanded');
      if (expanded === 'true') {
        expanded = 'false';
      } else {
        expanded = 'true';
      }
      this.$el.querySelector('button[data-toggle=dropdown]').setAttribute('aria-expanded', expanded);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
