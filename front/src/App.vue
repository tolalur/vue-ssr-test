<template>
  <div class="main wrapper flex-col">
    <main-header/>

    <main class="main__content flex-col">
      <navigation/>
      <!--      <router-view></router-view>-->
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </main>

    <main-footer/>
  </div>
</template>

<script lang="ts" setup>
import Navigation from './components/Navigation';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';
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
