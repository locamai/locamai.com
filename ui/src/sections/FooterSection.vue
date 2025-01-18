<script lang="ts" setup>
import { computed } from 'vue'
import RowComponent from '@/components/RowComponent.vue'
import ColumnComponent from '@/components/ColumnComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <div class="footer">
    <ColumnComponent>
      <RowComponent>
        <ColumnComponent :flex="2">
          <h2>Locamai</h2>
          <p class="small">
            The name "Locamai" combines the idea of local community engagement and action,
            suggesting an invitation to connect and bring local information and services to the
            forefront, perfectly aligning with the business's focus on community information
            management, marketing, and digital services.
          </p>
        </ColumnComponent>
        <ColumnComponent :flex="1">
          <h2>Links</h2>
          <ColumnComponent>
            <ButtonComponent flat to="/"> Home </ButtonComponent>
            <ButtonComponent flat to="/blog"> Blog </ButtonComponent>
            <ButtonComponent flat scroll="#products"> Products </ButtonComponent>
            <ButtonComponent flat scroll="#services"> Services </ButtonComponent>
            <ButtonComponent flat scroll="#about"> About </ButtonComponent>
            <ButtonComponent flat scroll="#contact"> Contact </ButtonComponent>
          </ColumnComponent>
        </ColumnComponent>
        <ColumnComponent :flex="2">
          <h2>Contact</h2>
          <a href="https://maps.app.goo.gl/GupVmaHRbS7KKsvT9">166 Pa Me Lane, Bishop, CA 93514</a>
          <a href="tel:+17609206036">Call +1 (760) 920-6036</a>
          <a href="mailto:sales@locamai.com">Email sales@locamai.com</a>
          <RowComponent>
            <a href="">
              <i class="fa fa-facebook" />
            </a>
            <a href="">
              <i class="fa fa-instagram" />
            </a>
            <a href="">
              <i class="fa fa-twitter" />
            </a>
          </RowComponent>
        </ColumnComponent>
      </RowComponent>
      <RowComponent center class="copyright">
        &copy; {{ year }} All rights reserved by Locamai.
      </RowComponent>
    </ColumnComponent>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $blue;
  border-radius: 250px 0 0 0;
  color: $white;
  padding: 10em 5em 2em 10em;

  @media (max-width: 768px) {
    padding: 10em 3em 2em 3em;
  }

  a,
  button {
    color: $white;

    &:hover {
      color: $red;
    }
  }

  button {
    padding: 0;
  }

  .copyright {
    margin-top: 2em;
    width: 100%;
  }

  .small {
    font-size: 0.85em;
  }
}
</style>
