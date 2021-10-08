const serialize = require("serialize-javascript");
const {createBundleRenderer} = require("vue-bundle-renderer");
const path = require("path");

const renderState = (context) => {
  const contextKey = 'state';
  const windowKey = '__INITIAL_STATE__';
  const state = serialize(context[contextKey]);
  const autoRemove =
    ';(function(){var s;(s=document.currentScript||document.scripts[document.scripts.length-1]).parentNode.removeChild(s);}());';

  return context[contextKey]
    ? `<script>window.${windowKey}=${state} ${autoRemove}</script>`
    : '';
};

function createCustomRenderer(bundle, options) {
  const renderer = createBundleRenderer(
    bundle,
    Object.assign(options, {
      runInNewContext: false,
      renderToString: require('@vue/server-renderer').renderToString,
      bundleRunner: require('bundle-runner'),
      basedir: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
    }),
  );

  return {
    async renderToString(context) {
      const page = await renderer.renderToString(context);
      const {renderStyles, renderResourceHints, renderScripts, html} = page;

      return `
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
    }
  }
}

module.exports = createCustomRenderer;
