<script lang="ts" setup>
import ColumnComponent from '@/components/ColumnComponent.vue'
import RowComponent from '@/components/RowComponent.vue'
</script>

<template>
  <div class="about">
    <RowComponent>
      <ColumnComponent>
        <h2>About Us</h2>
        <p>
          Locamai is a dynamic, forward-thinking solutions provider that caters to any business
          need, no matter how unique or multifaceted. With a deep understanding of diverse
          industries and a team of highly skilled professionals, we offer comprehensive services
          ranging from strategic planning and market analysis to custom development and
          implementation, ensuring our clients always have access to the most innovative and
          effective solutions to achieve their goals.
        </p>
      </ColumnComponent>
      <ColumnComponent>
        <img src="@/assets/images/about-us.png" alt="About Us" />
      </ColumnComponent>
    </RowComponent>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background-color: $blue;
  border-radius: 250px 0 250px 0;
  color: $white;
  padding: 90px 10em;

  @media (max-width: 768px) {
    padding: 90px 3em;
  }

  img {
    width: 100%;
  }

  .column {
    flex: 0 0 50%;
    max-width: 50%;

    @media (max-width: 768px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  .row {
    margin: 0 auto;
    max-width: 960px;
  }
}
</style>
