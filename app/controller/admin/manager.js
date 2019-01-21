'use strict';

const Controller = require('egg').Controller;
class ManagerController extends Controller {
  async index() {
      await this.ctx.render('admin/manager/index')
  }
}
module.exports = ManagerController;
