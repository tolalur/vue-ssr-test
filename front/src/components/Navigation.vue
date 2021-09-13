<template>
  <nav class="main-navigation">
    <router-link
        v-for="item in navigItem"
        :to="item.value"
        :key="item.value"
        class="main-navigation__item"
    >
      {{item.label}}
    </router-link>
  </nav>
</template>

<script lang="ts">

import {MenuModel} from '../../../common/data-models/menu.model';

export default {
  name: 'Navigation',
  computed: {
    navigItem(): MenuModel[] {
      return [
        {label: 'Женщинам', value: 'women'},
        {label: 'Мужчинам', value: 'men'},
        {label: 'Детям', value: 'children'},
        {label: 'Тренды', value: 'trends'},
        {label: 'Новинки', value: 'latest'},
        {label: 'Скидки', value: 'discounts'}
      ];
    }
  }
};
</script>

<style scoped lang="scss">
.main-navigation {
  width: 100%;
  background-color: #F2F2F2;
  padding: 1.5em 2em;
  display: flex;
  justify-content: space-between;

  &__item {
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;

    &.router-link-active {
      color: #9A4948;
    }
  }
}

</style>
