const next = require('next');
const routes = require('./routes');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 9000;

const app = next({ dev });
const handler = routes.getRequestHandler(app);

// start server
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port);
});
