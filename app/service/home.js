'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询接口
  async user() {
    const { ctx, app } = this;
    const QUERY_STR = 'id, name';
    let sql = `select ${QUERY_STR} from list`; // 获取 id 的 sql 语句
    try {
      const result = await app.mysql.query(sql); // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到。
      console.log('获取到用户数据', result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  // 新增接口
  async addUser(name) {
    const { ctx, app } = this;
    console.log(1);
    try {
      const result = await app.mysql.insert('list', { name }); // 给list表新增一条数据
      console.log('新增一条用户数据', result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = HomeService;
