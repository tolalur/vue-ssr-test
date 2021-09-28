const express = require('express');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const path = require('path');

const server = express();

const template = fs.readFileSync('./src/public/index.template.html', 'utf-8');


const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

server.use('/dist', express.static(path.join(__dirname, '../dist')));

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

server.all('/api/*', (req, res) => {

  req.url = '/' + req.url.split('/').slice(2).join('/');

  proxy.proxyRequest(req, res, {
    target: "http://localhost:3001",
  });

})

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