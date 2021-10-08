<template>
  <div class="bread-crumb__item" v-if="breadCrumb">
    <template v-if="!isLast">
      <router-link :to="breadCrumb.value">
        {{ breadCrumb.label }}
      </router-link>
      <arrow class="bread-crumb__item-arrow" />
    </template>

    <template v-if="isLast">
      <span class="bread-crumb__item-last">
        {{ breadCrumb.label }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Arrow from '../Arrow.vue';
import { MenuModel } from '../../models';

const props = defineProps<{
  breadCrumb: MenuModel;
  isLast?: Boolean;
}>();
</script>

<style lang="scss">
@import '../../assets/style/variables';
.bread-crumb__item {
  display: flex;
  align-items: center;

  &-last {
    color: $color-dark-grey;
  }

  &-arrow {
    transform: rotate(90deg);
  }
}
</style>
