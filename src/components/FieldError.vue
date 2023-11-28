<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FieldError",
  props: {
    errors: {
      type: Array,
      required: true
    }
  }
})
</script>

<template>
  <div class="error" v-if="errors.length > 0">
    <ul class="error-list">
      <li v-for="error in errors" :key="error.$uid">{{ error.$message }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.error {
  color: red;
  font-size: .8rem;
  margin-top: .25rem;

  &-list {
    list-style: none;
  }
}
</style>