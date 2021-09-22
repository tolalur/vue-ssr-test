<template>
  <div class="main wrapper flex-col">
    <main-header/>

    <main class="main__content">
      <navigation/>
      <router-view></router-view>
    </main>

    <main-footer/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

export default {
  name: "App",
  components: {Navigation, MainHeader, MainFooter}
}
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  flex-grow: 1;

  &__content {
    flex-grow: 1;
  }
}
</style>
