<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseButton"
})
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 100%;
  padding: 1rem .5rem;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  transition: all 200ms linear;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #009688;
    border-color: #009688;
    color: white;
  }

}
</style>