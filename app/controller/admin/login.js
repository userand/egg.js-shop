'use strict';
const Controller = require('egg').Controller;
const BaseController = require('./base')

class LoginController extends BaseController {
  
   //渲染登录页面
  async index() {
     await this.ctx.render('admin/login/login')
  }

  //开始登录
  async dologin(){
    const requestBody = this.ctx.request.body;
    const username = requestBody.username;
    const password = await this.ctx.service.tools.md5( requestBody.password );
    const verity = requestBody.verity;
    if( verity.toUpperCase()== this.ctx.session.verifycode.toUpperCase() ){
       
        await this.success('/admin/login', '验证码正确');
    }else{
        console.log('验证码不正确')
        // await this.ctx.body = "验证码不正确"
        await this.fail('/admin/login', '验证码错误');
    }
  }

} 
module.exports = LoginController;
