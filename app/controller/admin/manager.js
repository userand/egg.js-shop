'use strict';

const Controller = require('egg').Controller;
class ManagerController extends Controller {
  async index() {
      await this.ctx.render('admin/manager/article-list')
  }
}
module.exports = ManagerController;
