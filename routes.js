const routes = require('next-routes')();

routes.add('posts');
routes.add('post', '/post/:id');

module.exports = routes;
