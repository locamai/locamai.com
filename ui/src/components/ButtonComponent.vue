<script lang="ts" setup>
import { computed } from 'vue'

interface ButtonProps {
  flat?: boolean
  outline?: boolean
  primary?: boolean
  secondary?: boolean
}

const $emit = defineEmits(['click'])
const $props = defineProps<ButtonProps>()

const classes = computed(() => {
  return {
    button: true,
    flat: $props.flat,
    outline: $props.outline,
    primary: $props.primary,
    secondary: $props.secondary,
  }
})
</script>

<template>
  <button :class="classes" @click="$emit('click')">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $white;
  border: 1px solid $black;
  border-radius: 10px;
  color: $black;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  &.flat {
    background-color: transparent;
    border: none;
    color: $white;

    &:hover {
      transform: none;
    }
  }

  &.primary {
    background-color: $red;
    color: $white;
  }

  &.secondary {
    background-color: $blue;
    color: $white;
  }
}
</style>
