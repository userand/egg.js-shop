'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async list() {
    await this.ctx.render('admin/access/list')
  }

  async add() {
    await this.ctx.render('admin/access/add')
  }
  
  async edit() {
    await this.ctx.render('admin/access/edit')
  }
}

module.exports = AccessController;
