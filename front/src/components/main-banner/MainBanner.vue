<template>
  <section class="main-banner">
    <main-banner-title :data="collection" />
    <main-banner-item
      v-for="item in data"
      :key="item.id"
      :data="item"
    />
  </section>
</template>

<script lang="ts" setup>
import MainBannerTitle from './MainBannerTitle.vue';
import MainBannerItem from './MainBannerItem.vue';
import { useMainPage } from '../../store';

const { collection, data } = useMainPage();
</script>

<style>
.main-banner {
  margin-top: 1.5rem;
  display: flex;
  gap: 1.2rem;
}
</style>
