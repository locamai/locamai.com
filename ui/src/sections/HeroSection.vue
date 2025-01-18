<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import ColumnComponent from '@/components/ColumnComponent.vue'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
}
</script>

<template>
  <div class="hero">
    <ColumnComponent center>
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in 10" :key="slide">
          <div class="carousel__item">
            <h1>Hero {{ slide }}</h1>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </ColumnComponent>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-color: $blue;
  border-radius: 0 0 350px 0;
  height: 100vh;

  @media (max-width: 768px) {
    margin-top: 50vh;
  }

  .column {
    height: 100vh;
  }
}
</style>
