<template>
  <div>
    <ul class="nav"
       :class="{
                'nav-tabs': vStyle === 'tabs',
                'nav-pills': vStyle === 'pills'
              }"
       @click="handleHeaderClick"
       role="tablist">
        <li v-for="h in headers" role="presentation"
            :class="{
                  'active': $index == active
              }">
          <a href="javascript:void(0)" role="tab" data-toggle="tab" aria-expanded="true" data-index="{{ $index }}">
            <slot name="{{ h.title }}" >
              {{h.title}}
            </slot>
          </a>
        </li>
    </ul>
    <div class="tab-content" v-el:tab-content>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vStyle: {
      type: String,
      default: 'tabs'
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // headers从子组件tab中收集形成，内部结构为
      // {
      //   title: [String],
      //
      // }
      headers: []
    };
  },
  methods: {
    prev: function() {
      if (this.active < this.headers.length - 1) {
        this.active++;
      }
    },
    next: function() {
      if (this.active > 0) {
        this.active--;
      }
    },
    toggleDisable: function(index) {
      if (index >= 0 && index < this.headers.length) {
        this.$children[index].disabled = true;
      }
      console.log(index);
    },
    handleHeaderClick(event) {
      this.active = event.target.getAttribute('data-index');
    }
  },
  ready() {
    console.log('tabset is ready...');
    let $children = this.$children;
    for (let c in $children) {
      $children[c].index = c;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
