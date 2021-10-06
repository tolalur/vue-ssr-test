<template>
  <div class="home">
    <main-banner />
    <recommendations />
  </div>
</template>

<script lang="ts">
import Recommendations from "../components/Recommendations.vue";
import MainBanner from "../components/main-banner/MainBanner.vue";
import {
  defineComponent,
  onMounted,
  onServerPrefetch
} from "vue";
import { useMainPage } from "../store";

export default defineComponent({
  name: "Home",
  components: { MainBanner, Recommendations },
  setup() {
    const { getData, data, resetState } = useMainPage();

    onServerPrefetch(() => getData());

    return { getData, data, resetState };
  },

  mounted() {
    if (this.data.length == 0) {
      this.getData();
    }
  },

  beforeDestroy() {
    this.resetState();
  }
});
</script>
