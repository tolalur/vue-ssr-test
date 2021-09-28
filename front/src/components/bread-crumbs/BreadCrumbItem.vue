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

<script lang="ts">
import Arrow from "../Arrow.vue";
export default {
  name: "BreadCrumbItem",
  components: { Arrow },
  props: {
    breadCrumb: Object,
    isLast: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/variables";
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
