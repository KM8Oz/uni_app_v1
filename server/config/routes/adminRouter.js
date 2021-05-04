const adminRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /news': 'UserController.getAllNews',
  'POST /post': 'UserController.postNews',
  'POST /delete_post': 'UserController.deletePost',
  'POST /change_rol': 'UserController.changeRole',
};

module.exports = adminRoutes;
