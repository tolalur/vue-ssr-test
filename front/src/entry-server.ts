import _createApp from './main';

export default async (context: any) => {
  const { app, router, store } = _createApp();

  await router.push(context.url);
  await router.isReady();

  const matchedComponents = router.currentRoute.value.matched;

  if (!matchedComponents.length) {
    throw new Error('404');
  }

  context.state = store;

  return app;
};
