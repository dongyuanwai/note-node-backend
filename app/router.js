'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret); // 传入加密字符串
  // 注册接口
  router.post('/api/user/register', controller.user.register);
  // 登录
  router.post('/api/user/login', controller.user.login);
  // 获取用户信息，并且添加鉴权中间件
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo);
  // 我们测试一下接口是否可行：
  router.get('/api/user/test', _jwt, controller.user.test);
};
