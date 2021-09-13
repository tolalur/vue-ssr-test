import express from 'express';
import fs from 'fs';
import {createBundleRenderer} from 'vue-server-renderer';
import serverBundle from '../dist/vue-ssr-server-bundle.json';
import clientManifest from '../dist/vue-ssr-client-manifest.json';
import path from 'path';

const server = express();

const template = fs.readFileSync('./src/public/index.template.html', 'utf-8');


const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
});

server.use('/dist', express.static(path.join(__dirname, '../dist')));

server.get('*', async (req, res) => {
  const context = {url: req.url};

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err, context)
      res.status(500).end();
    }

    res.end(html);
  });
});

server.listen(3000);
