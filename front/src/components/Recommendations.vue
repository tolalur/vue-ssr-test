<template>
  <section class="recommendations">
    <h3>Рекомендуемые товары</h3>
    <div class="flex recommendations__wrapper">
      <goods-grid
        v-for="item in recommendations"
        :key="item.id"
        class="recommendations__goods"
        :goods="item"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import GoodsGrid from './goods/GoodsGrid.vue';
import {useMainPage} from '../store';

const {recommendations} = useMainPage();
</script>

<style lang="scss">
.recommendations {
  margin-top: 3rem;

  &__wrapper {
    margin-top: 1.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  &__goods {
    margin-right: 24px;
  }
}
</style>
