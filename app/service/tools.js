'use strict';
const svgCaptcha = require('svg-captcha'); 
const md5 = require('md5');
const Service = require('egg').Service;

class ToolsService extends Service {
    //md5加密
    async md5(str) {
        return md5(str)
    }
    //生成验证码
    async captcha(width, height) {
        width = width ? width : 100;
        height = height ? height : 32;
        const captcha = svgCaptcha.create({
          size: 4,
          fontSize: 50,
          width,
          height,
          background: '#cc9966',
        });
        return captcha;
      }
}

module.exports = ToolsService;