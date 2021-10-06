<template>
  <div class="filter-list flex-col">
    <openable v-for="item in filters" :key="item.type">
      <template slot="title">{{ item.title }}</template>
      <component :is="filterByType(item.type)" :data="item.data"/>
    </openable>
  </div>
</template>

<script lang="ts" setup>
import Openable from './Openable.vue';
import SizeFilter from './filters-by-type/SizeFilter.vue';
import TextFilter from './filters-by-type/TextFilter.vue';
import ColorFilter from './filters-by-type/ColorFilter.vue';
import {useCategory} from '../../../store';
import {FilterType} from '../../../../../common/data-models/filter.model';

const {filters} = useCategory();

function filterByType(filterType: FilterType) {
  switch (filterType) {
    case FilterType.COLOR:
      return ColorFilter;
    case FilterType.SIZE:
      return SizeFilter;
    case FilterType.TEXT:
      return TextFilter;
  }
}
</script>

<style lang="scss">
.filter-list {
  gap: 1rem;
  padding-right: 1rem;
}
</style>
