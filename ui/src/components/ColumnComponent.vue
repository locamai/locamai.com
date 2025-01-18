<script lang="ts" setup>
import { computed } from 'vue'

interface ColumnProps {
  between?: boolean
  center?: boolean
  end?: boolean
  flex?: number
}

const $props = defineProps<ColumnProps>()

const classes = computed(() => {
  return {
    between: $props.between,
    center: $props.center,
    column: true,
    end: $props.end,
  }
})
</script>

<template>
  <div :class="classes" :style="{ flex: $props.flex }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &.between {
    justify-content: space-between;
  }

  &.center {
    align-items: center;
    justify-content: center;
  }

  &.end {
    justify-content: flex-end;
  }
}
</style>
