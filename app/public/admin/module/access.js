$(function () {
    //添加管理员
    $("#form-access-add").validate({
        rules: {
            module_name: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            $.ajax({
                url: '/admin/access/doAdd',
                type: 'post',
                data: $("#form-access-add").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function () {
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/access'
                        }, 500)
                    }
                }
            })
        }
    });

    //编辑权限
    $("#form-access-edit").validate({
        rules: {
            module_name: {
                required: true
            }
        },
        onkeyup: false,
        focusCleanup: true,
        success: "valid",
        submitHandler: function (form) {
            console.log($("#form-access-edit").serialize())
            $.ajax({
                url: '/admin/access/doEdit',
                type: 'post',
                data: $("#form-access-edit").serialize(),
                success: function (res) {
                    layer.msg(res.msg)
                    if (res.result == 0) {
                        layer.msg(res.msg)
                        setTimeout(function () {
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.location.replace(parent.location.href)
                            parent.layer.close(index);
                            window.location.href = '/admin/access'
                        }, 500)
                    }
                }
            })
        }
    });

});