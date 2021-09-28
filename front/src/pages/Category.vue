<template>
  <section class="category">
    <bread-crumbs />

    <div class="category__content">
      <filter-list />
      <category-goods />
    </div>
  </section>
</template>

<script lang="ts">
import BreadCrumbs from "../components/bread-crumbs/BreadCrumbs.vue";
import FilterList from "../components/category/filters/FilterList.vue";
import CategoryGoods from "../components/category/CategoryGoods.vue";
import { defineComponent } from "@vue/composition-api";
import { useCategory } from "../store";

export default defineComponent({
  name: "Category",
  components: { BreadCrumbs, FilterList, CategoryGoods },
  setup() {
    const { getData, data, resetState } = useCategory();
    return { getData, data, resetState };
  },

  computed: {
    path(): string {
      return this.$route.params.pathMatch.slice(1);
    }
  },

  watch: {
    path(val: string) {
      this.getData(val);
    }
  },

  serverPrefetch() {
    return useCategory().getData(this.$route.params.pathMatch.slice(1));
  },

  mounted() {
    if (this.data.length == 0) {
      this.getData(this.path);
    }
  },

  beforeDestroy() {
    this.resetState();
  }
});
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
