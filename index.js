$(function(){var e=$("#username"),t=$("#number"),l=$("#mima"),n=$("#yzm"),i=$("#reg"),a=$("#btn");function r(e){var t=$(e),l=$(e+"-valid");if(console.log(e),1==e.indexOf("username")){if(""===t.val())return l.html("用户名不能为空"),void t.select();if(0==/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test(t.val()))return l.html("用户名仅支持中英文、数字和下划线，且不能为纯数字"),void t.select()}if(1==e.indexOf("number")){if(""===t.val())return l.html("手机号不能为空"),void t.select();if(!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t.val()))return l.html("手机号码格式不正确"),void t.select()}if(1==e.indexOf("mima")){if(""===t.val())return l.html("密码不能为空"),void t.select();if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(t.val()))return l.html("密码设置不符合要求"),void t.select()}return 1==e.indexOf("yzm")&&""===t.val()?(console.log(1111),l.html("验证码不能为空"),void t.select()):(l.html(""),1)}i.click(function(){r("#username")&&r("#number")&&r("#mima")&&r("#yzm")}),a.click(function(){$("#btn").attr("disabled",!0),$("#yzm-valid").html("");var e=5,t=setInterval(function(){return""==n.val()&&e<=0?(clearInterval(t),$("#btn").val("获取验证码"),$("#yzm-valid").html("请求超时，请稍后再试"),$("#btn").attr("disabled",!1),!1):""!==n.val()&&e<=0?(clearInterval(t),$("#btn").val("获取验证码"),$("#btn").attr("disabled",!1),!1):void(0<=e&&$("#btn").val("发送中"+e--+"s"))},1e3)}),t.focusout(function(){r("#number")||t.select()}),l.focusout(function(){r("#mima")||l.select()}),e.focusout(function(){r("#username")||e.select()})});