'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base')

class LoginController extends BaseController {
   //渲染登录页面
   async index() {
      await this.ctx.render('admin/login/login')
   }
   //开始登录
   async dologin() {
      const requestBody = this.ctx.request.body;
      const username = requestBody.username;
      const password = await this.ctx.service.tools.md5( requestBody.password );
      const verity = requestBody.verity;
      if (verity.toUpperCase() == this.ctx.session.verifycode.toUpperCase()) {
         const result = await this.ctx.model.Admin.find({
            "username": username,
            "password": password
         })
         if (result.length > 0) {
            this.messageNotify(0, '登录成功')
            this.ctx.session.userinfo = result[0];
         } else {
            this.messageNotify(1, '用户名或密码错误')
         }
      } else {
         this.messageNotify(1, '验证码不正确')
      }
   }
   //退出登录
   async loginout() {
      this.ctx.session.userinfo=null;
      this.ctx.redirect('/admin/login');
    }
  
}
module.exports = LoginController;
