<template>
  <div class="category-goods flex">
    <goods-grid v-for="item in data" :key="item.id" :goods="item"/>
  </div>
</template>

<script lang="ts" setup>
import GoodsGrid from '../goods/GoodsGrid.vue';
import {useCategory} from '../../store';

const {data} = useCategory();
</script>

<style lang="scss">
.category-goods {
  flex-wrap: wrap;
  gap: 21px;
}
</style>
