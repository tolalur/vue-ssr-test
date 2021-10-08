<template>
  <div class="openable">
    <div
      class="openable__title flex"
      @click="show = !show"
    >
      <span>
        <slot name="title" />
      </span>
      <arrow
        class="openable__title-icon"
        :class="{ 'openable__title-icon-close': !show }"
      />
    </div>

    <transition name="slide">
      <div
        v-if="show"
        class="openable__content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import Arrow from '../../Arrow';
import { ref } from 'vue';

const show = ref(true);
</script>

<style lang="scss">
@import 'src/assets/style/variables';
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
}

.openable {
  border-top: 3px solid $color-grey;

  &__title {
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    color: $color-dark;

    &-icon {
      margin-left: 1rem;
      transition: all 0.3s ease;

      &-close {
        transform: rotate(180deg);
      }
    }
  }

  &__content {
    margin-top: 0.4rem;
  }
}
</style>
