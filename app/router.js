'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 注册接口
  router.post('/api/user/register', controller.user.register);
};
