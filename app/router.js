'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/admin', controller.admin.index.index);

    //公共删除路由
    router.get('/admin/delete', controller.admin.base.delete);

    //登录路由
    router.get('/admin/login', controller.admin.login.index);
    router.post('/admin/dologin', controller.admin.login.dologin);
    router.get('/admin/loginout', controller.admin.login.loginout);

    //管理员路由
    router.get('/admin/manager', controller.admin.manager.list);
    router.get('/admin/manager/add', controller.admin.manager.add);
    router.post('/admin/manager/doAdd', controller.admin.manager.doAdd);
    router.get('/admin/manager/edit', controller.admin.manager.edit);
    router.post('/admin/manager/doEdit', controller.admin.manager.doEdit);

    //角色路由
    router.get('/admin/role', controller.admin.role.list);
    router.get('/admin/role/add', controller.admin.role.add);
    router.post('/admin/role/doAdd', controller.admin.role.doAdd);
    router.get('/admin/role/edit', controller.admin.role.edit);
    router.post('/admin/role/doEdit', controller.admin.role.doEdit);
    router.get('/admin/role/auth', controller.admin.role.auth);
    router.post('/admin/role/doAuth', controller.admin.role.doAuth);


    //权限路由
    router.get('/admin/access', controller.admin.access.list);
    router.get('/admin/access/add', controller.admin.access.add);
    router.post('/admin/access/doAdd', controller.admin.access.doAdd);
    router.get('/admin/access/edit', controller.admin.access.edit);
    router.post('/admin/access/doEdit', controller.admin.access.doEdit);


    //验证码路由
    router.get('/admin/verify', controller.admin.base.verify);
    // router.get('/admin/manager/add', controller.admin.manager.add);
    // router.get('/admin/manager/edit', controller.admin.manager.edit);
};
