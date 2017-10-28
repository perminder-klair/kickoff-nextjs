const next = require('next');
const express = require('express');
const compression = require('compression');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 9000;

const app = next({ dev });
const handler = routes.getRequestHandler(app);

// start server
app.prepare().then(() => {
  express()
    .use(compression())
    .use(handler)
    .listen(port);
});
