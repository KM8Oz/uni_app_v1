const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /news': 'UserController.getAllNews',
  'POST /post': 'UserController.postNews',
  'POST /delete_post': 'UserController.deletePost',
};

module.exports = privateRoutes;
