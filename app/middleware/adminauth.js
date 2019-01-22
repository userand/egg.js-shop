const url = require('url');

module.exports = (options, app) => {
    //自定义中间件adminauth
    return async function adminauth(ctx, next) {
        //post提交设置全局csrf
        ctx.state.csrf = ctx.csrf;
        if (ctx.session.userinfo) {

            
        } else {
            const pathName =  url.parse(ctx.request.url).pathname;
            if (pathName == '/admin/login'|| pathName == '/admin/dologin' || pathName == '/admin/verify') {
                await next()
            } else {
                ctx.redirect('/admin/login');
            }
        }
    }
}