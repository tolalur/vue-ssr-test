<template>
  <footer class="footer">
    <footer-list
        :title="data.title"
        :list="data.list"
    />
    <footer-list
        title="виды спорта"
        :list="data.list"
    />
    <footer-list
        title="коллекции"
        :list="data.list"
    />
    <footer-list
        :columns="1"
        :title="help.title"
        :list="help.list"
    />
  </footer>
</template>

<script lang="ts">
import FooterList from "./FooterList.vue";
import {footerData, footerDataHelp} from '../data/footer.data';

export default {
  name: "MainFooter",
  components: {FooterList},
  computed: {
    data() {
      return footerData
    },
    help() {
      return footerDataHelp
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/variables";

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
