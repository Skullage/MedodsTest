<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseModal",
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 5000)
    }
  }
})
</script>

<template>
  <div class="popup" :class="{'show': show}">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.popup {
  position: fixed;
  top: 1rem;
  left: 50%;
  width: 80%;
  transform: translateX(-50%) translateY(-200px);
  border-radius: 15px;
  padding: 1rem .5rem;
  background-color: #009688;
  color: white;
  transition: all 300ms linear;
}
.show {
  transform: translateX(-50%) translateY(0);
}
</style>