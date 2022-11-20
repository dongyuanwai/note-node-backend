'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.home.user);
  router.get('/user', controller.home.user);

  // post请求 添加
  router.post('/add_user', controller.home.addUser);
  // 编辑
  router.post('/edit_user', controller.home.editUser);
  // 删除
  router.post('/delete_user', controller.home.deleteUser);
};
