const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');

const server = express();
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

server.all('/api/*', (req, res) => {
  proxy.proxyRequest(req, res, {
    target: 'http://localhost:3001',
  });
});

server.use('/dist', express.static(path.join(__dirname, '../dist')));
server.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));

module.exports = server;
