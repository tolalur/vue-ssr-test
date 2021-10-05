const express = require('express');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const path = require('path');

const server = express();

server.use('/dist', express.static(path.join(__dirname, '../dist')));

const favicon = require('serve-favicon')
server.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();
server.all('/api/*', (req, res) => {

  proxy.proxyRequest(req, res, {
    target: "http://localhost:3001",
  });

})


const template = fs.readFileSync('./src/public/index.template.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

server.get('*', async (req, res) => {
  const context = {url: req.url};

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.warn('SSR error', err)
      res.status(500).end();
    }

    res.end(html);
  });
});

server.listen(3000);
