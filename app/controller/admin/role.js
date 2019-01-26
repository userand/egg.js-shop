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

  //渲染角色授权页面
  async auth(){
    const role_id = this.ctx.request.query.id;
    const accessList = await this.ctx.model.Access.aggregate([
      {
        $lookup: {
          from: 'access',
          localField: '_id',
          foreignField: 'module_id',
          as: 'items'
        }
      }, {
        $match: {
          'module_id': '0'
        }
      }
    ]);

    await this.ctx.render('admin/role/auth',{
      role_id,
      list:accessList
    })
  }

  //角色授权
  async doAuth(){
    const role_id = this.ctx.request.body.role_id;
    const access_node = this.ctx.request.body.access_node;
      await this.ctx.model.RoleAccess.deleteMany({ role_id });
      if(access_node==undefined){
         await this.messageNotify(1, '请选择您要授权的模块')
      }else{
        for (let i = 0; i < access_node.length; i++) {
          const roleAccessData = new this.ctx.model.RoleAccess({
              role_id,
              access_id:access_node[i]
          });
          roleAccessData.save();
        }
        await  this.messageNotify(0, '授权成功')
      }
  }

}
module.exports = RoleController;
