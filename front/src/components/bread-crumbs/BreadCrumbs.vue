<template>
  <div class="bread-crumbs flex">
    <bread-crumb-item
      :key="main.value"
      :bread-crumb="main"
    />

    <bread-crumb-item
      v-for="(item, index) in breadCrumbs"
      :key="item.value"
      :bread-crumb="item"
      :is-last="index === breadCrumbs.length - 1"
    />
  </div>
</template>

<script lang="ts" setup>
import BreadCrumbItem from './BreadCrumbItem.vue';
import { useCategory } from '../../store';

const { breadCrumbs } = useCategory();
const main = {
  label: 'Главная',
  value: '/',
};
</script>

<style lang="scss">
.bread-crumbs {
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>
