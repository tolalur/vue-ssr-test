<template>
  <div class="bread-crumbs flex">
    <bread-crumb-item :breadCrumb="main" :key="main.value" />

    <bread-crumb-item
      v-for="(item, index) in breadCrumbs"
      :key="item.value"
      :bread-crumb="item"
      :is-last="index === breadCrumbs.length - 1"
    />
  </div>
</template>

<script lang="ts">
import BreadCrumbItem from "./BreadCrumbItem.vue";
import { useCategory } from "../../store";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "BreadCrumbs",
  components: { BreadCrumbItem },
  setup() {
    const { breadCrumbs } = useCategory();

    const main = {
      label: "Главная",
      value: "/"
    };

    return { breadCrumbs, main };
  }
});
</script>

<style lang="scss">
.bread-crumbs {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>
