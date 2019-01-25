$(function () {
    //添加管理员
    $("#form-admin-add").validate({
        rules: {
            adminName: {
                required: true,
                minlength: 4,
                maxlength: 16
            },
            password: {
                required: true,
            },
            sex: {
                required: true,
            },
            phone: {
                required: true,
                isPhone: true,
            },
            email: {
                required: true,
                email: true,
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            $.ajax({
                url: '/admin/manager/doAdd',
                type: 'post',
                data: $("#form-admin-add").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function () {
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/manager'
                        }, 500)
                    } else {
                        layer.msg(res.msg)
                    }
                }
            })
        }
    });


    //编辑管理员
    $("#form-admin-edit").validate({
        rules: {
            adminName: {
                required: true,
                minlength: 4,
                maxlength: 16
            },
            sex: {
                required: true,
            },
            phone: {
                required: true,
                isPhone: true,
            },
            email: {
                required: true,
                email: true,
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {

            $.ajax({
                url: '/admin/manager/doEdit',
                type: 'post',
                data: $("#form-admin-edit").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function(){
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/manager'
                        },500)
                    }
                }
            })
        }
    });




});