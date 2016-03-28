#!/usr/bin/node
process.env.PRODUCTION = false;
var BrowserSync = require('browser-sync'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpack = require('webpack'),
    yargs = require('yargs'),
    proxyMiddleware = require('http-proxy-middleware'),
    browserSync = BrowserSync.create(),
    webpackConfig = require('../webpack.config'),
    bundler = webpack(webpackConfig),
    port,
    host,
    pointHost;

host = yargs.argv.host || 'localhost';
port = yargs.argv.port || '8443';
pointHost = `http://${host}:${port}`;
browserSync.init({
    server: {
        baseDir: ['app', './'],
        middleware: [
            webpackDevMiddleware(bundler, {
                // IMPORTANT: dev middleware can't access config, so we should
                // provide publicPath by ourselves
                publicPath: webpackConfig.output.publicPath,
                hot: true,
                stats: {colors: true}
            }),
            webpackHotMiddleware(bundler),
            proxyMiddleware('/api', {target: pointHost})
        ]
    },
    port: yargs.argv.port || 9000,
    ghostMode: false
});
