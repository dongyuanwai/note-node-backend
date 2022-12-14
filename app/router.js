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
  // 修改用户个性签名
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo);
  // 获取消费类型列表
  router.get('/api/type/list', _jwt, controller.type.list); 
  // 上传图片
  router.post('/api/upload', controller.upload.upload);

  // 添加账单
  router.post('/api/bill/add', _jwt, controller.bill.add);
  // 获取账单列表
  router.get('/api/bill/list', _jwt, controller.bill.list);
  // 获取详情
  router.get('/api/bill/detail', _jwt, controller.bill.detail);
  // 账单更新
  router.post('/api/bill/update', _jwt, controller.bill.update);
  // 删除账单
  router.post('/api/bill/delete', _jwt, controller.bill.delete);
  // 获取数据
  router.get('/api/bill/data', _jwt, controller.bill.data); 

  router.post('/api/user/modify_pass', _jwt, controller.user.modifyPass); // 修改用户密码
  
};
