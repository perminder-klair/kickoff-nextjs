const routes = require('next-routes')();

routes.add('posts').add('post', '/post/:postId');

module.exports = routes;
