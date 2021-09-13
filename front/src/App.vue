<template>
  <div class="main">
    <header>
      <h1>Сайт, слегка похожий на Fila...</h1>
    </header>
    <main class="main__content">
      <navigation/>
      <router-view></router-view>
    </main>
    <footer>Подвал сайта</footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {Navigation}
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.main {
  @include wrapper-width;
  width: 100%;
  height: 100%;

  &__content {
    flex-grow: 1;
    border: 1px solid #9A4948;
  }
}
</style>
