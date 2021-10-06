<template>
  <a class="main-banner-item" :href="'/product/' + data.id">
    <img :src="data.img[0]" />
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GoodsGridModel } from "../../models";

export default defineComponent({
  name: "MainBannerItem",
  props: {
    data: Object as PropType<GoodsGridModel>
  }
});
</script>

<style lang="scss">
@import "src/assets/style/variables";

.main-banner-item {
  display: block;
  max-width: $desktop-width / 3;
  width: 100%;

  img {
    width: auto;
    height: 100%;
    max-width: 100%;
  }
}
</style>
