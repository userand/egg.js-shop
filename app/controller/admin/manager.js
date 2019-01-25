'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base')

class ManagerController extends BaseController {
    //管理员列表
    async list() {
        //管理员表和角色表联查aggregate
        const adminList = await this.ctx.model.Admin.aggregate([{
            $lookup: {
                from: 'role',
                localField: 'role_id',
                foreignField: '_id',
                as: 'role'
            }
        }]);

        await this.ctx.render('admin/manager/list', {
            adminList
        })
    }

    //渲染添加管理员页面
    async add() {
        const roleList = await this.ctx.model.Role.find({});
        await this.ctx.render('admin/manager/add', {
            roleList
        })
    }

    //添加管理员
    async doAdd() {
        const postData = this.ctx.request.body;
        postData.password = await this.ctx.service.tools.md5(postData.password);
        const result = new this.ctx.model.Admin({
            username: postData.adminName,
            password: postData.password,
            email: postData.email,
            mobile: postData.phone,
            role_id: postData.adminRole
        });
        //查询管理员是否存在
        const adminResult = await this.ctx.model.Admin.find({"username": postData.adminName});
        if (adminResult.length > 0) {
            await this.messageNotify(1, '添加失败,管理员已存在');
        } else {
            await result.save();
            await this.messageNotify(0, '管理员添加成功');
        }
    }
    //编辑管理员
    async edit() {
        const id = this.ctx.query.id;
        //根据id查找要编辑的数据
        const result = await this.ctx.model.Admin.find({"_id": id});
        //查询角色列表
        const roleList = await this.ctx.model.Role.find({});
        await this.ctx.render('admin/manager/edit', {
            list: result[0],
            roleList
        })
    }
    //修改管理员
    async doEdit() {
        const postData = this.ctx.request.body;
        const id = postData.id;
        const password = postData.password;
        const email = postData.email;
        const phone = postData.phone;
        const adminRole = postData.adminRole;
        //如果密码存在则修改密码不存在则使用原密码
        if (password) {
            await this.ctx.model.Admin.updateOne({"_id": id}, {
                password: await this.ctx.service.tools.md5(password),
                email: email,
                mobile: phone,
                role_id: adminRole
            })
        } else {
            await this.ctx.model.Admin.updateOne({"_id": id}, {
                email: email,
                mobile: phone,
                role_id: adminRole
            })
        }
        await this.messageNotify(0, '管理员修改成功')
    }
}

module.exports = ManagerController;
