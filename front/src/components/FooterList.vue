<template>
  <section class="footer-list">
    <div class="footer-list__title">{{ title }}</div>
    <div class="footer-list__items" :class="columns === 1 ? 'footer-list__one-column' : 'footer-list__two-column' ">
      <router-link
          v-for="(item, index) in list"
          :to="item.value"
          :key="item.value + index"
          class="footer-list__item"
      >
        {{ item.label }}
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import {FooterModel} from '../models/footer.model';
import {PropType} from 'vue';

export default {
  name: 'FooterList',
  props: {
    columns: {
      type: Number,
      default: 2
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array as PropType<FooterModel[]>,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.footer-list {
  &__one-column {
    grid-template-columns: 1fr;
  }

  &__two-column {
    grid-template-columns: 1fr 1fr;
  }

  &__title {
    font-size: 1.1rem;
    font-weight: bold;
  }

  &__items {
    margin-top: 1rem;
    display: grid;
    grid-gap: 10px;
  }

  &__item {
    color: #ffffff;
    font-size: .8rem;
  }
}
</style>
