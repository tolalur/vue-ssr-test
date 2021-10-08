<template>
  <div class="home">
    <main-banner />
    <recommendations />
  </div>
</template>

<script lang="ts" setup>
import Recommendations from '../components/Recommendations.vue';
import MainBanner from '../components/main-banner/MainBanner.vue';
import { onMounted, onServerPrefetch } from 'vue';
import { useMainPage } from '../store';

const { getData } = useMainPage();
onServerPrefetch(() => getData());
onMounted(() => getData());
</script>
