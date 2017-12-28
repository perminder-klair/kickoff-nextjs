const routes = require('next-routes')();

routes.add('posts');
routes.add('post', '/post/:postId');

module.exports = routes;
