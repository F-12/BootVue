<template>
  <div role="tabpanel" class="tab-pane fade" id="{{ title }}"
    :class="{
      'in': $parent.active == index,
      'active': $parent.active == index
      }">
    <p>
      {{show}}
    </p>
    <slot></slot>

</template>

<script>
/*
 * Tab组件应该自己维护自己是否显示的状态数据
 * 是否显示的状态数据应该根据父组件的active的header的下标进行计算
 * 如果父组件不存在对应active属性，应该显示
 */
export default {
  props: {
    title: {
      type: String
    },
    index: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  computed: {

  },
  created() {
    this.$parent.headers.push({
      title: this.title
    });
  },
  ready() {
    console.log('tab is ready...');
  },
  beforeDestroy() {
    this.$remove();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
