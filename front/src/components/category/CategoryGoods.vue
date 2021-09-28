<template>
  <div class="category-goods flex">
    <goods-grid
        v-for="item in data"
        :key="item.id"
        :goods="item"
    />
  </div>
</template>

<script lang="ts">
import GoodsGrid from '../goods/GoodsGrid.vue';
import {GoodsGridModel} from '../../models';
import {useCategory} from '../../store';

export default {
  name: 'CategoryGoods',
  components: {
    GoodsGrid
  },

  setup() {
    const {data} = useCategory();
    return {data};
  }
};
</script>

<style lang="scss">
.category-goods {
  flex-wrap: wrap;
  gap: 21px;
}
</style>
