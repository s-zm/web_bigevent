

$(function(){
    //给link-reg添加点击事件
    $("#link-reg").on("click", function(){
        $(".login-box").hide()
        $(".reg-box").show()
    })
    //给link-login添加点击事件
    $("#link-login").on("click", function(){
        $(".reg-box").hide()
        $(".login-box").show()
    })
    //从layui中获取form对象
    var form = layui.form
    form.verify({
        pwd:[
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] 
    })
    //监听注册表单提交事件
    $('#form_reg').on("submit", function(e){
        e.preventDefault()
        $.post('http://www.liulongbin.top:3007/api/reguser', {username: $("#form_reg [name=username]").val(), password: $("#form_reg [name=password]").val()}, function(res){
            if(res.status !== 0){
                console.log(res.message);
            }
            console.log("注册成功");

        })
    })

})