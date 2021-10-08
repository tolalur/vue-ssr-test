<template>
  <div class="main wrapper flex-col">
    <main-header />

    <main class="main__content flex-col">
      <navigation />

      <router-view />
    </main>

    <main-footer />
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation.vue';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
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
