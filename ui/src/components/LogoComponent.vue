<script lang="ts" setup></script>

<template>
  <div class="logo">
    <RowComponent>
      <img src="@/assets/logos/locamai.png" alt="Logo" />
      <span>Locamai</span>
    </RowComponent>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  color: $white;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  font-weight: 700;

  img {
    height: 1.75em;
    width: auto;
  }
}
</style>
