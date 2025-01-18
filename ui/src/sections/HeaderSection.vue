<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import LogoComponent from '@/components/LogoComponent.vue'
import RowComponent from '@/components/RowComponent.vue'

const $route = useRoute()

const isHome = computed(() => {
  return $route.path === '/'
})
</script>

<template>
  <div class="header">
    <RowComponent between>
      <RouterLink to="/">
        <LogoComponent />
      </RouterLink>
      <RowComponent>
        <ButtonComponent flat to="/"> Home </ButtonComponent>
        <ButtonComponent flat to="/blog"> Blog </ButtonComponent>
        <ButtonComponent v-if="isHome" flat scroll="#products"> Products </ButtonComponent>
        <ButtonComponent v-if="isHome" flat scroll="#services"> Services </ButtonComponent>
        <ButtonComponent v-if="isHome" flat scroll="#about"> About </ButtonComponent>
        <ButtonComponent v-if="isHome" flat scroll="#contact"> Contact </ButtonComponent>
      </RowComponent>
      <ButtonComponent primary> Get in touch! </ButtonComponent>
    </RowComponent>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: $blue;
  border-radius: 0 0 45px 0;
  padding: 1em 2em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .flat:hover {
    background-color: $white;
    color: $black;
  }
}
</style>
