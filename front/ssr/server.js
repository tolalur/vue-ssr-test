const server = require('./express.init');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const createRenderer = require('./bundle.renderer');

server.get('*', async (req, res) => {

  const context = { url: req.url };
  const renderer = createRenderer(serverBundle, { clientManifest });

  try {
    const page = await renderer.renderToString(context);
    res.setHeader('Content-Type', 'text/html');
    res.send(page);
  } catch (err) {
    res.status(500).send('500 | Internal Server Error');
    console.error(`error during render : ${req.url}`);
    console.error(err);
  }
});

server.listen(3000);
