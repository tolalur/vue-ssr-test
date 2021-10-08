// const {renderToString} = require('@vue/server-renderer');
// const fs = require('fs');
const server = require('./express')
const path = require('path');
const serialize = require('serialize-javascript');
const {createBundleRenderer} = require('vue-bundle-renderer');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      clientManifest,
      runInNewContext: false,
      renderToString: require('@vue/server-renderer').renderToString,
      bundleRunner:  require('bundle-runner'),
      basedir: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
    })
  );
}

server.get('*', async (req, res) => {
  const renderState = (context) => {
    const contextKey = 'state';
    const windowKey = '__INITIAL_STATE__';
    const state = serialize(context[contextKey]);
    const autoRemove =
      ';(function(){var s;(s=document.currentScript||document.scripts[document.scripts.length-1]).parentNode.removeChild(s);}());';
    var nonceAttr = context.nonce ? ' nonce="' + context.nonce + '"' : '';
    return context[contextKey]
      ? '<script' +
      nonceAttr +
      '>window.' +
      windowKey +
      '=' +
      state +
      autoRemove +
      '</script>'
      : '';
  };

  const context = {url: req.url};

  const renderer = createRenderer(serverBundle, {clientManifest});

  let page;
  try {
    page = await renderer.renderToString(context);

    let {renderStyles, renderResourceHints, renderScripts, html} = page;

    const data = `
        <!DOCTYPE html>
            <html lang="en">
              <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
               ${renderResourceHints()}
              ${renderStyles()}
              <title>SSR Vue 3</title>
              </head>
              <body>
                <div id="app">${html}</div>
                ${renderScripts()}
                ${renderState(context)}
                </body>
            </html>
        `;

    res.setHeader('Content-Type', 'text/html');
    res.send(data);

  } catch (err) {
    res.status(500).send('500 | Internal Server Error');
    console.error(`error during render : ${req.url}`);
    console.error(err);
  }
});

server.listen(3000);
