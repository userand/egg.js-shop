'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base')
class RoleController extends BaseController {
  //角色列表
  async list() {
    const result = await this.ctx.model.Role.find({})
    await this.ctx.render('admin/role/list', {
      list: result
    })
  }
  async add() {
    await this.ctx.render('admin/role/add')
  }
  //添加角色
  async doAdd() {
    const postData = this.ctx.request.body;
    let role = new this.ctx.model.Role({
      title: postData.title,
      description: postData.description
    })
    await role.save();
    await this.messageNotify(0, '角色添加成功')
  }

  async edit() {
    const id = this.ctx.query.id
    const result = await this.ctx.model.Role.find({ "_id": id });
    await this.ctx.render('admin/role/edit', {
      list: result[0]
    })
  }

  //编辑角色
  async doEdit() {
    const postData = this.ctx.request.body;
    const _id = postData._id
    const title = postData.title
    const description = postData.description
    await this.ctx.model.Role.updateOne({ "_id": _id }, {
      title,
      description
    })
    await this.messageNotify(0, '角色修改成功')
  }

}

module.exports = RoleController;
