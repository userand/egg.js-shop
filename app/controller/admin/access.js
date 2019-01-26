'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base')

class AccessController extends BaseController {

  //渲染权限列表页面
  async list() {
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
    await this.ctx.render('admin/access/list', {
      list: accessList
    })
  }

  async add() {
    //查找模块
    const moduleList = await this.ctx.model.Access.find({ "module_id": "0" })
    await this.ctx.render('admin/access/add', {
      moduleList
    })
  }


  //添加权限
  async doAdd() {
    const postData = this.ctx.request.body;
    const module_id = postData.module_id;
    //如果当前不是模块则需要转换module_id的类型为ObjectId
    if (module_id != 0) {
      postData.module_id = this.app.mongoose.Types.ObjectId(module_id)
    }
    const result = new this.ctx.model.Access(postData)
    result.save();
    await this.messageNotify(0, '权限添加成功');
  }

  //渲染编辑权限页面
  async edit() {
    const accessId = this.ctx.request.query.id;
    const moduleList = await this.ctx.model.Access.find({ "module_id": "0" })
    const accessList = await this.ctx.model.Access.find({"_id":accessId})
    await this.ctx.render('admin/access/edit',{
      list:accessList[0],
      moduleList
    })
  }

  //修改权限
  async doEdit() {
    
    const postData =  this.ctx.request.body;

    //const result = new this.ctx.model.Access.updateOne({})
    console.log(postData)

  }
  


}

module.exports = AccessController;
