<template>
<nav>
  <ul class="pagination"
      :class="{
        'pagination-lg' : size === 'lg',
        'pagination-sm' : size === 'sm',
        }"
      @click="pageChanged">
    <li data-index="prev" :class="{ 'disabled': page.current === 1}">
      <a href="javascript:void(0)" aria-label="Prev">
        &laquo;
      </a>
    </li>
    <li v-for="item in items" data-index="{{ $index + 1 }}" :class="{'active': page.current == ($index + 1)}"><a href="javascript:void(0)">{{ item }}</a></li>
    <li data-index="next" :class="{ 'disabled': page.current == page.total}">
      <a href="javascript:void(0)" aria-label="Next">
        &raquo;
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
const EVENT = {
  PAGE_CHANGED: 'page-changed.pager'
};
export default {
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      page: {
        total: 0,
        current: 1
      }
    };
  },
  computed: {
    items: function() {
      var list = [];
      for (let i = 1; i <= this.page.total; i++) {
        list.push(i);
      }
      return list;
    }
  },
  methods: {
    init(page) {
      this.page = page;
    },
    pageChanged(event) {
      // 如果total < 1，应该表现为简单的Prev/Next
      let dataIdx = event.target.parentElement.getAttribute('data-index');
      let changed = false;
      // 如果点击的是页码，直接分派
      // 如果点击Prev或Next，转换后分派
      if (dataIdx === 'prev' && this.page.current > 1) {
        this.page.current--;
        changed = true;
      }
      if (dataIdx === 'next' && this.page.current < this.page.total) {
        this.page.current++;
        changed = true;
      }
      if (dataIdx !== 'prev' && dataIdx !== 'next' && dataIdx !== this.page.current) {
        this.page.current = dataIdx;
        changed = true;
      }
      if (changed) {
        this.$dispatch(EVENT.PAGE_CHANGED, this.page);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
