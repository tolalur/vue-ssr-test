<template>
  <section class="recommendations">
    <h3>Рекомендуемые товары</h3>
    <div class="flex recommendations__wrapper">
      <goods-grid
          class="recommendations__goods"
          v-for="item in recommendations"
          :key="item.id"
          :goods="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from '@vue/composition-api';
import GoodsGrid from './goods/GoodsGrid.vue';

import {useMainPage} from '../store';


export default defineComponent({
  name: 'Recommendations',
  components: {GoodsGrid},
  setup() {
    const {recommendations} = useMainPage();

    return {
      recommendations
    };
  }
});
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
