$(function(){
	var form={
		input:$('.enroll-content').find('input'),
		userName:$('.enroll-content').find('.username'),
		passWord:$('.enroll-content').find('.password'),
		checkPsw:$('.enroll-content').find('.check-password'),
		vertify:$('.enroll-content').find('a'),
		auth:$('.enroll-content').find('.auth-word'),
		authBox:$('.enroll-content').find('.authbox'),
		register:$('.enroll-content').find('.register'),
		level:$('.enroll-content .password-strong').find('.level'),
		regUser:/^1[358]\d{9}$/,
		regPsw:/^\w{6,20}$/,
		regPswLow:/^\d{6,20}$/,
		regPswMid:/[a-zA-Z]/,
		regPswHigh: /[!@#\$%\^&\*\+\-]/,
		init:function(){
			this.inputFocus();
			this.vertifyClick();
			this.usernameBlur();
			this.passwordBlur();
			this.checkwordBlur();
			this.authBlur();
			this.registerClick();
			
			
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
		
		vertifyClick:function(){
			var that = this;
			this.vertify.click(function(){
				that.creatVertify();
			})
		},
		
		usernameBlur:function(){
			var that = this;
			this.userName.blur(function(){
				var unameV = that.userName.val();
				if(!that.regUser.test(unameV)){
					that.userName.parents('.enroll-user').find('.error').html('请输入正确的手机号码')
					return;
				}else{
					that.userName.parents('.enroll-user').find('.error').html('');
					
				}
			})
		},
		passwordBlur:function(){
			var that = this;
			this.passWord.blur(function(){
				var pswV=that.passWord.val();
				if(!that.regPsw.test(pswV)){
					that.passWord.parents('.enroll-password').find('.error').html('密码只能为6-20位字母数字下划线组合')
					return;
				}else{
					that.passWord.parents('.enroll-password').find('.error').html('')
				}
			})
			
		},
		checkwordBlur:function(){
			var that = this;
			this.checkPsw.blur(function(){
			var checkPV=that.checkPsw.val();
			var pswV=that.passWord.val();
				if(checkPV!=pswV){
					that.checkPsw.parents('.check-word').find('.error').html('两次输入不一致，请重新输入')
					return;
				}else{
					that.checkPsw.parents('.check-word').find('.error').html('')
				}
			})
		},
		authBlur:function(){
			var that = this;
			this.auth.blur(function(){
				var authBV=that.authBox.html();
				var authV=that.auth.val();
				if(authBV!=authV){
					that.auth.parents('.auth').find('.error').html('网站验证码不正确')
				}else{
					that.auth.parents('.auth').find('.error').html('')
				}
			})
		},
	
		registerClick:function(){
			var that = this;
			this.register.click(function(){
				var unameV = that.userName.val();
				var pswV=that.passWord.val();
				var checkPV=that.checkPsw.val();
				var authBV=that.authBox.html();
				var authV=that.auth.val();
				if(!that.regUser.test(unameV)){
					that.userName.parents('.enroll-user').find('.error').html('请输入正确的手机号码')
					return;
				}else{
					that.userName.parents('.enroll-user').find('.error').html('')
				}
				if(!that.regPsw.test(pswV)){
					that.passWord.parents('.enroll-password').find('.error').html('密码只能为6-20位字母数字下划线组合')
					return;
				}else{
					that.passWord.parents('.enroll-password').find('.error').html('')
				}
				if(checkPV!=pswV){
					that.checkPsw.parents('.check-word').find('.error').html('两次输入不一致，请重新输入')
					return;
				}else{
					that.checkPsw.parents('.check-word').find('.error').html('')
				}
				if(authBV!=authV){
					that.auth.parents('.auth').find('.error').html('网站验证码不正确')
				}else{
					that.auth.parents('.auth').find('.error').html('')
				}
				$.cookie('username',unameV,{expires:365,path:'/'});
				$.cookie('password',pswV,{expires:365,path:'/'});
				
				alert('注册成功')
				
			})
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	}
	form.init();
})
