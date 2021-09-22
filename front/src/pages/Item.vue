<template>
 <div>
   item
   <div v-if="item">{{ item.title }}</div>
   <div v-else>...No item...</div>
 </div>
</template>

<script>
export default {
  name: "Item",
  computed: {
    // Отображаем элемент из состояния хранилища
    item () {
      console.log(this.$store.state.items[this.$route.params.id])
      return this.$store.state.items[this.$route.params.id]
    }
  },

  // Только на стороне сервера
  // Будет автоматически вызвано рендером сервера
  serverPrefetch () {
    // возвращает Promise из действия, поэтому
    // компонент ждёт данные перед рендерингом
    return this.fetchItem()
  },

  // Только на стороне клиента
  mounted () {
    // Если мы не сделали ещё это на сервере,
    // то получаем элемент (сначала показав текст загрузки)
    if (!this.item) {
      this.fetchItem()
    }
  },

  methods: {
    fetchItem () {
      // возвращаем Promise из действия
      return this.$store.dispatch('fetchItem', this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
