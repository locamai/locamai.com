<script lang="ts" setup>
import { computed } from 'vue'

interface RowProps {
  between?: boolean
  center?: boolean
  end?: boolean
  flex?: number
}

const $props = defineProps<RowProps>()

const classes = computed(() => {
  return {
    between: $props.between,
    center: $props.center,
    end: $props.end,
    row: true,
  }
})
</script>

<template>
  <div :class="classes" :style="{ flex: $props.flex }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &.between {
    justify-content: space-between;
  }

  &.center {
    justify-content: center;
  }

  &.end {
    justify-content: flex-end;
  }
}
</style>
