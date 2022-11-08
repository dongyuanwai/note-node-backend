'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    // 假设这是数据库里的数据
    return {
      name: '董员外',
      slogen: '网络的世界太虚拟，你把握不住',
    };
  }
}
module.exports = HomeService;
