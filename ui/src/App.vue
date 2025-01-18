<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderComponent from './sections/HeaderSection.vue'
import FooterComponent from './sections/FooterSection.vue'
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="body">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: $blue;
}

.body {
}
</style>
