$(function () {
    //添加角色
    $("#form-role-add").validate({
        rules: {
            title: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            $.ajax({
                url: '/admin/role/doAdd',
                type: 'post',
                data: $("#form-role-add").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function () {
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/role'
                        }, 1000)
                    }
                }
            })
        }
    });


    //编辑角色
    $("#form-role-edit").validate({
        rules: {
            title: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            $.ajax({
                url: '/admin/role/doEdit',
                type: 'post',
                data: $("#form-role-edit").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function(){
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/role'
                        },1000)
                    }
                }
            })
        }
    });




});