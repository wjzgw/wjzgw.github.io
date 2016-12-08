$(function(){
	var form={
		input:$('.login-container .login-content').find('input'),
		authBox:$('.login-container .login-content .auth-content').find('span'),
		userName:$('.login-container').find('.username'),
		passWord:$('.login-container').find('.password'),
		auth:$('.login-container').find('.authword'),
		loginBtn:$('.login-container').find('.login-btn'),
		init:function(){
			this.inputFocus();
			this.authBoxClick();
			this.loginBtnClick();
			
		},
	
		inputFocus:function(){
			var that = this;
			this.input.on({
				'focus':function(){
					$(this).addClass('active')
				},
				'blur':function(){
					$(this).removeClass('active')
				}
			})
		},
		creatVertify:function(){
			var str='';
			for(var i=0;i<26;i++){
				str+=String.fromCharCode(97+i);
			}
			var strUpper=str.toUpperCase();
			var mingle=str+strUpper+'0123456789';
			var v='';
			for(var j=0;j<4;j++){
				var index = parseInt(Math.random()*62);
				v+=mingle[index];
				
			}
			this.authBox.html(v);
			
		},
		
		authBoxClick:function(){
			var that = this;
			this.authBox.click(function(){
				that.creatVertify();
			})
		},
		loginBtnClick:function(){
			var that = this;
			
			this.loginBtn.click(function(){
				if(!$.cookie('username')){
					return;
				}
				var username=$.cookie('username');
				var password=$.cookie('password');
				var unameV = that.userName.val();
				var pswV=that.passWord.val();
				var authBV=that.authBox.html();
				var authV=that.auth.val();
				if(username!=unameV){
					that.userName.parents('.user-content').find('.error').html('用户名错误')
					return;
				}else{
					that.userName.parents('.user-content').find('.error').html('')
				}
				if(password!=pswV){
					that.passWord.parents('.password-content').find('.error').html('密码错误')
					return;
				}else{
					that.passWord.parents('.password-content').find('.error').html('')
				}
				
				if(authBV!=authV){
					that.auth.parents('.auth-content').find('.error').html('验证码不正确')
					return;
				}else{
					that.auth.parents('.auth-content').find('.error').html('')
				}
				
				
				alert('登录成功')
				
			})
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
	form.init();
})
