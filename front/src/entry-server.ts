import createApp from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    router.push(context.url)

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }

      // Хук `rendered` будет вызван, когда приложение завершит рендеринг
      context.rendered = () => {
        // После рендеринга приложение, наше хранилище теперь
        // заполнено финальным состоянием из наших компонентов.
        // Когда мы присоединяем состояние к контексту, и есть опция `template`
        // используемая для рендерера, состояние будет автоматически
        // сериализовано и внедрено в HTML как `window.__INITIAL_STATE__`.
        context.state = store.state
      }

      resolve(app)
    }, reject)
  })
}
