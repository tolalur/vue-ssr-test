<template>
  <section class="category">
    <bread-crumbs />

    <div class="category__content">
      <filter-list />
      <category-goods />
    </div>
  </section>
</template>

<script lang="ts" setup>
import BreadCrumbs from '../components/bread-crumbs/BreadCrumbs.vue';
import FilterList from '../components/category/filters/FilterList.vue';
import CategoryGoods from '../components/category/CategoryGoods.vue';
import { computed, onMounted, onServerPrefetch, watch } from 'vue';
import { useCategory } from '../store';
import { useRoute } from 'vue-router';

const { fetchCategory } = useCategory();
const route = useRoute();

const path = computed<string[] | null>(() =>
  Array.isArray(route.params['nested']) ? route.params['nested'] : null,
);

const isPathNull = (path: any): path is null => path == null;

watch(
  () => path.value,
  (val: string[] | null) => !isPathNull(val) && fetchCategory(val),
);

onServerPrefetch(() => !isPathNull(path.value) && fetchCategory(path.value));

onMounted(() => !isPathNull(path.value) && fetchCategory(path.value));
</script>

<style lang="scss">
.category {
  &__content {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 372px 1fr;
  }
}
</style>
