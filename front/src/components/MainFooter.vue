<template>
  <footer class="footer">
    <footer-list
      v-for="item in links"
      :key="item.title"
      :title="item.title"
      :links="item.list"
      :columns="2"
    />

    <footer-list
      :columns="1"
      :title="helpLinks.title"
      :links="helpLinks.list"
    />
  </footer>
</template>

<script lang="ts" setup>
import FooterList from './FooterList.vue';
import { FooterLink, FooterHelpLinks } from '../data/footerLink';

const links = [
  new FooterLink('категории'),
  new FooterLink('виды спорта'),
  new FooterLink('коллекции'),
];
const helpLinks = new FooterHelpLinks();
</script>

<style scoped lang="scss">
@import 'src/assets/style/variables';

.footer {
  color: #ffffff;
  background-color: $color-dark;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 3rem 2rem 5rem;
  margin-top: 3rem;
}
</style>
