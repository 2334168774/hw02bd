$(function(){
    var $username=$('#username');
    var $number=$('#number');
    var $mima=$('#mima');
    var $yzm=$('#yzm');
    var $reg=$('#reg');
    var $btnCal=$('#btn');

    $reg.click(function(){
        if(!validate("#username")||!validate("#number")||!validate("#mima")||!validate("#yzm")) 
        return;
    });
    $btnCal.click(function(){
        $("#btn").attr("disabled",true);
        $("#yzm-valid").html("");
        var time=5;
        var hander=setInterval(function() {
            if ($yzm.val()=='' && time <= 0) {
                clearInterval(hander); 
                $("#btn").val("获取验证码");
                $("#yzm-valid").html("请求超时，请稍后再试");
                $("#btn").attr("disabled",false);
                return false;
            }
            if ($yzm.val()!=='' && time <= 0) {
                clearInterval(hander); 
                $("#btn").val("获取验证码");
                $("#btn").attr("disabled",false);
                return false;
            }
            else {
                if(time>=0){
                    $("#btn").val("发送中"+(time--)+"s");
                }
            }
        }, 1000);
    });
    //字段校验
    $number.focusout(function(){
        if(!validate("#number")) $number.select();
    })
    $mima.focusout(function(){
        if(!validate("#mima")) $mima.select();
    })
    $username.focusout(function(){
        if(!validate("#username")) $username.select();
    })


    //表单校验
    function validate(a){
        var $data=$(a);
        var $msg=$(a+'-valid');
        console.log(a)
        if(a.indexOf("username")==1){
            if($data.val()===""){
                $msg.html("用户名不能为空");
                $data.select();
                return false
            }
            if(/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test($data.val())==false){
                $msg.html("用户名仅支持中英文、数字和下划线，且不能为纯数字");
                $data.select();
                return false
            }

        }
        if(a.indexOf("number")==1){
            if($data.val()===""){
                $msg.html("手机号不能为空");
                $data.select();
                return false
            }   
            if(!/^[1][3,4,5,7,8,9][0-9]{9}$/.test($data.val())){
                $msg.html("手机号码格式不正确");
                $data.select();
                return false
            }
        }
        if(a.indexOf("mima")==1){
            if($data.val()===""){
                $msg.html("密码不能为空");
                $data.select();
                return false
            }  
            if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val())){
                $msg.html("密码设置不符合要求");
                $data.select();
                return false
            } 
        }
        if(a.indexOf("yzm")==1){
            if($data.val()===""){
                console.log(1111)
                $msg.html("验证码不能为空");
                $data.select();
                return false
            }   
        }
        $msg.html("");
        return true;
    }
})