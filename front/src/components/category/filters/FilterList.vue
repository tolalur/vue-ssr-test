<template>
  <div class="filter-list flex-col">
    <openable v-for="item in filters" :key="item.type">
      <template slot="title">{{ item.title }}</template>
      <component :is="filterByType(item.type)" :data="item.data" />
    </openable>
  </div>
</template>

<script lang="ts">
import Openable from "./Openable.vue";
import SizeFilter from "./filters-by-type/SizeFilter.vue";
import TextFilter from "./filters-by-type/TextFilter.vue";
import ColorFilter from "./filters-by-type/ColorFilter.vue";
import { defineComponent } from "@vue/composition-api";
import { useCategory } from "../../../store";
import { FilterType } from "../../../../../backend/common/data-models/filter.model";

export default defineComponent({
  name: "FilterList",
  components: {
    Openable,
    SizeFilter,
    TextFilter,
    ColorFilter
  },
  setup() {
    const { filters } = useCategory();
    return {
      filters
    };
  },

  methods: {
    filterByType(filterType: FilterType) {
      switch (filterType) {
        case FilterType.COLOR:
          return "color-filter";
        case FilterType.SIZE:
          return "size-filter";
        case FilterType.TEXT:
          return "text-filter";
      }
    }
  }
});
</script>

<style lang="scss">
.filter-list {
  gap: 1rem;
  padding-right: 1rem;
}
</style>
