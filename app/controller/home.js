'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // // 获取参数
    // const { id } = ctx.query;
    // ctx.body = id;

    const { ctx } = this;
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    await ctx.render('index.html', {
      title: '我是董员外', // 将 title 传入 index.html
    });
  }

  // 获取用户信息
  async user() {
    const { ctx } = this;
    // 获取参数
    const result = await ctx.service.home.user();
    ctx.body = result;
  }


  async addUser() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.home.addUser(name);
      console.log('-----', result);
      ctx.body = {
        code: 200,
        msg: '添加成功1111',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }


}

module.exports = HomeController;
