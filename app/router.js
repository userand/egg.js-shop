'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin/manager', controller.admin.manager.index);
  // router.get('/admin/manager/add', controller.admin.manager.add);
  // router.get('/admin/manager/edit', controller.admin.manager.edit);
};
