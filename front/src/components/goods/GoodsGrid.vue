<template>
  <div class="goods">
    <a :href="'/product/' + goods.id">
      <div class="goods__img">
        <img :src="preview" alt="" />
      </div>
      <div>{{ goods.title }}</div>
      <div>{{ goods.price }} ₽</div>
      <div class="goods__color-count">{{ goods.colorCount }} цвета</div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { GoodsGridModel } from '../../models';

export default defineComponent({
  name: 'GoodsGrid',
  props: {
    goods: Object as PropType<GoodsGridModel>,
  },
  computed: {
    preview(): string {
      return this.goods?.img[0] || '';
    },
  },
});
</script>

<style lang="scss">
@import 'src/assets/style/variables';

.goods {
  font-size: 1.1rem;

  a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__img {
    overflow: hidden;
    width: 342px;
    height: 380px;
    border-radius: 0.4rem 0.4rem 0 0;
  }

  img {
    height: auto;
    width: 100%;
  }

  &__color-count {
    color: $color-dark-grey;
    font-size: 0.9rem;
    line-height: 1.33;
  }
}
</style>
