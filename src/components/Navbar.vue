<template>
<nav class="navbar"
     :class="{
       'navbar-fixed-top': fixed === 'top',
       'navbar-fixed-bottom': fixed === 'bottom',
       'navbar-static-top': fixed === 'static',
       'navbar-inverse': vStyle === 'inverse',
       'navbar-default': vStyle === 'default'
       }">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button @click="handleNavbarCollapse"
              :class="{'collapsed': !expanded}"
              type="button" class="navbar-toggle"
              data-toggle="collapse"
              data-target="#{{ dataTargetId }}"
              aria-expanded="{{ expanded.toString() }}">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="{{brandHref}}">
        <slot name="brand"></slot>
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="{{ dataTargetId }}"
         :class="{'in': expanded}"
         aria-expanded="{{ expanded.toString() }}">
      <slot></slot>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: String,
      default: ''
    },
    vStyle: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
    };
  },
  computed: {
    dataTargetId: function() {
      let id = Date.now();
      console.log(id);
    }
  },
  methods: {
    handleNavbarCollapse: function() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
