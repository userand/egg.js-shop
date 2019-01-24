'use strict';

const Controller = require('egg').Controller;
class ManagerController extends Controller {
  async list() {
    await this.ctx.render('admin/manager/list')
  }

  async add() {
    await this.ctx.render('admin/manager/add')
  }

  async edit() {
    await this.ctx.render('admin/manager/edit')
  }
}
module.exports = ManagerController;
