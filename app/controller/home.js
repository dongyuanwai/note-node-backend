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

  // post请求方法
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    ctx.body = {
      title,
    };
  }


}

module.exports = HomeController;
