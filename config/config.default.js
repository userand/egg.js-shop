'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548043156813_8883';

  //配置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 8640000,
    httpOnly: true,  //只是服务端有效
    encrypt: true,  //加密
    renew: true, //延长会话有效期
  };

  //自定义中间件
  config.middleware = ['adminauth'];
  config.adminauth = {
    match: '/admin'
  }


    config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/shop',
      options: {},
    }
  };
  

  //配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  return config;
};
