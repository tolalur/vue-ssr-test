<template>
  <a :href="data.url" class="main-banner-title flex-col">
    <h4>{{ data.subtitle }}</h4>
    <h3>{{ data.title }}</h3>
    <h6>к коллекции</h6>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MainBannerTitle } from '../../models';

export default defineComponent({
  name: 'MainBannerTitle',
  props: {
    data: Object as PropType<MainBannerTitle>,
  },
});
</script>

<style lang="scss">
@import 'src/assets/style/variables';

.main-banner-title {
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 2rem;
  padding-bottom: 1rem;

  h4,
  h3 {
    text-transform: uppercase;
  }

  h3 {
    font-size: 4rem;
    text-align: right;
  }

  h6 {
    margin-top: 1rem;
  }
}
</style>
