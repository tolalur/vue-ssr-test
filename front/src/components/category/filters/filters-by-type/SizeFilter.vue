<template>
  <div class="size-filter">
    <div
      v-for="item in data"
      :key="item.value"
      class="size-filter__item"
      @click="$emit('size', item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuModel } from '../../../../models';

defineProps<{ data: MenuModel[] }>();
defineEmits<{(e: 'size', value: string): void}>()
</script>

<style lang="scss">
@import 'src/assets/style/variables';

.size-filter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  &__item {
    text-align: center;
    border: 2px solid $color-grey;
    padding: 0.4rem;
    font-weight: bold;
    color: $color-dark;
    cursor: pointer;
  }
}
</style>
