const path = require('path');
const expressInit = require('express');
const favicon = require('serve-favicon');

const server = expressInit();
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

server.all('/api/*', (req, res) => {
  proxy.proxyRequest(req, res, {
    target: 'http://localhost:3001',
  });
});

server.use('/dist', expressInit.static(path.join(__dirname, '../dist')));
server.use(favicon(path.join(__dirname, '../src/public', 'favicon.ico')));

module.exports = server;
