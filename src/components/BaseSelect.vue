<script>
import {defineComponent} from 'vue'
import FieldError from "@/components/FieldError.vue";

export default defineComponent({
  name: "BaseSelect",
  components: {FieldError},
  props: {
    label: String,
    required: Boolean,
    options: {
      type: Array,
      required: true
    },
    multiple: Boolean,
    errors: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      values: this.$attrs.value
    }
  }
})
</script>

<template>
  <fieldset>
    <legend class="legend" :class="{'required': required}">{{ label }}</legend>
    <select
        @change="$emit('input', values)"
        class="select"
        :required="required"
        :multiple="multiple"
        :class="{'multiple': multiple}"
        v-model="values"
    >
      <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
          :selected="values === option"
          class="option">{{ option }}
      </option>
    </select>
    <field-error :errors="errors" />
  </fieldset>

</template>

<style lang="scss" scoped>
.required:after {
  content: "*";
}
.legend {
  font-size: 1.4rem;
  margin-bottom: .5rem;
}
.select {
  outline: none;
  appearance: none;
  font-size: 1.2rem;
  width: 100%;
  height: auto;
  padding: 1rem 4rem 1rem 1rem;
  background: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="24" height="24" viewBox="0 0 24 24"%3E%3Cpath fill="currentColor" d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"%2F%3E%3C%2Fsvg%3E') no-repeat right 0.8em center / 1.4em,
  linear-gradient(to left, rgba(255, 255, 255, 0.3) 3em, rgba(255, 255, 255, 0.2) 3em);
  color: black;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
}
.multiple {
  background: none;
  overflow-y: auto;
  padding: 1rem;
}
.option {
  background-color: white;
  color: black;
  width: 100%;
}
</style>