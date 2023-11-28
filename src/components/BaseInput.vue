<script>
import {defineComponent} from "vue";
import FieldError from "@/components/FieldError.vue";

export default defineComponent({
  name: "BaseInput",
  components: {FieldError},
  data() {
    return {
      typeExceptions: ['date', 'tel']
    }
  },
  props: {
    label: String,
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    maxLength: Number,
    errors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
})
</script>

<template>
  <div>
    <div class="input-group" :class="{'red-border': errors.length > 0}">
      <span class="span" v-if="type === 'tel'">+7</span>
      <input
          :type="type"
          @input="updateValue"
          :required="required"
          class="input"
          :value="$attrs.value"
          placeholder=""
          :class="{'tel': type === 'tel'}"
          :maxlength="maxLength"
      >

      <label class="label" :class="[{'exception': typeExceptions.includes(type)}, {'required': required}]">{{ label }}</label>
    </div>
    <field-error :errors="errors" />
  </div>

</template>

<style lang="scss" scoped>
.input-group {
  position: relative;
  font-size: 1.25rem;
  display: flex;
  align-items: center;

  .span {
    padding: 1rem;
    border: 1px solid black;
    border-right: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  .input {
    padding: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    font-size: 1.25rem;
    width: 100%;

    &:focus {
      border: 1px solid darkgoldenrod;
    }
  }

  .label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .tel {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
.input:is(:focus, :valid):not(:placeholder-shown) ~ .label, .exception {
  transform: translateY(-120%) scale(.7);
  background-color: #fff;
  padding-inline: .3rem;
}
.required:after {
  content: "*";
}
.red-border .span, .red-border .input {
  border-color: red!important;
}
</style>