'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  //操作成功提示
  async success(url, msg) {
    await this.ctx.render('admin/public/success', {
      url,
      msg: msg || '操作成功'
    })
  }

 //操作失败提示
  async fail(url,msg) {
    await this.ctx.render('admin/public/fail', {
      url,
      msg: msg || '操作失败'
    })
  }

  //验证码
  async verify() {
    const captcha = await this.service.tools.captcha();
    this.ctx.session.verifycode = captcha.text;
    this.ctx.response.type = 'image/svg+xml';
    this.ctx.body = captcha.data;
  }
  
}

module.exports = BaseController;