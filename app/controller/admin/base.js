'use strict';
const Controller = require('egg').Controller;
class BaseController extends Controller {
    //操作成功提示
    async messageNotify(result, msg) {
        this.ctx.body = {
            result,
            msg
        }
    }
    //验证码
    async verify() {
        const captcha = await this.service.tools.captcha();
        this.ctx.session.verifycode = captcha.text;
        this.ctx.response.type = 'image/svg+xml';
        this.ctx.body = captcha.data;
    }

    async delete() {
        const id = this.ctx.query.id;
        const model = this.ctx.query.model;
        await this.ctx.model[model].deleteOne({"_id": id});
        this.messageNotify(0, "删除成功")
    }
}

module.exports = BaseController;