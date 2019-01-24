$(function(){
  
    //添加管理员
    $("#form-admin-add").validate({
        rules:{
            adminName:{
                required:true,
                minlength:4,
                maxlength:16
            },
            password:{
                required:true,
            },
            password2:{
                required:true,
                equalTo: "#password"
            },
            sex:{
                required:true,
            },
            phone:{
                required:true,
                isPhone:true,
            },
            email:{
                required:true,
                email:true,
            },
            adminRole:{
                required:true,
            },
            remarks: {
                maxlength: 100,
            }
        },
        onkeyup:false,
        focusCleanup:true,
        success:"valid",
        submitHandler:function(form){
            $(form).ajaxSubmit();
            var index = parent.layer.getFrameIndex(window.name);
            parent.location.replace(parent.location.href)
            parent.layer.close(index);
        }
    });






    
});