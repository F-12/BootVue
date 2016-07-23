<template>
  <div class="modal fade"
       :class="{'in': isShown,
                'open': isShown
                }"
       @click="hide"
       tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document"
         :class="{
           'modal-lg': size === 'lg',
           'modal-lg': size === 'sm',
           }">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer">
            <button type="button" class="btn btn-primary" @click="confirm">{{ confirmText }}</button>
            <button type="button" class="btn btn-default" @click="cancel">{{ cancelText }}</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const EVENTS = {
  SHOW: 'show.bv.modal',
  SHOWN: 'shown.bv.modal',
  HIDE: 'hide.bv.modal',
  HIDDEN: 'hidden.bv.modal',
  CONFIRM: 'confirm.bv.modal',
  CANCEL: 'cancel.bv.modal'
};
export default {
  props: {
    size: {
      type: String,
      default: 'lg'
    },
    isShown: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {

    };
  },
  methods: {
    show() {
      this.$dispatch(EVENTS.SHOW);
      this.isShown = true;
      this.$dispatch(EVENTS.SHOWN);
    },
    hide() {
      this.$dispatch(EVENTS.HIDE);
      this.isShown = false;
      this.$dispatch(EVENTS.HIDDEN);
    },
    confirm() {
      this.$dispatch(EVENTS.CONFIRM);
    },
    cancel() {
      this.$dispatch(EVENTS.CANCEL);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.open {
  display: block !important;
}
</style>
