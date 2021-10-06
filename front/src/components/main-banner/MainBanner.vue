<template>
  <section class="main-banner">
    <main-banner-title :data="collection" />
    <main-banner-item v-for="item in goods" :key="item.id" :data="item" />
  </section>
</template>

<script lang="ts">
import MainBannerTitle from "./MainBannerTitle.vue";
import MainBannerItem from "./MainBannerItem.vue";
import { defineComponent } from "vue";
import { useMainPage } from "../../store";

export default defineComponent({
  name: "MainBanner",
  components: { MainBannerTitle, MainBannerItem },
  setup() {
    const { collection, data } = useMainPage();

    return {
      collection,
      goods: data
    };
  }
});
</script>

<style>
.main-banner {
  margin-top: 1.5rem;
  display: flex;
  gap: 1.2rem;
}
</style>
