var detail ={
	main:$('.goods .glass .buy').find('.buy-bottom'),
	
	errorWarn:$('.error-warning'),
	init:function(){
		this.amountInput=this.main.find('.input-amount');
		this.amountInc=this.main.find('.amount-increase');
		this.amountDec=this.main.find('.amount-decrease');
		this.addCart=this.main.find('.addCart');
		this.buyNow=this.main.find('.buyNow');
		this.errorWarn=$('.error-warning');
		this.errorCon=$('.error-content');
		this.errorInfo=this.errorCon.find('p');
		this.ensure=this.errorCon.find('.ensure');
		this.errorWarn.height( $('html').height() );
		this.data={};
			this.initData();
		
	},

	initData:function(){
		var gid = $('.goods .glass .img-wrapper').attr('data-gid');
		
		var that = this;
		$.getJSON('js/data.json',function(result){
			that.data = result[gid];
			that.increase();
			that.decrease();
			that.input();
			that.ensureClick();
			that.addCartClick();
		})
	},

	increase:function(){
		var that = this;
		this.amountInc.click(function(){
			var amount = parseInt(that.amountInput.val());
			if(amount>1000){
				return;
			}
			amount++;
			that.amountInput.val(amount);
		})
	},
	decrease:function(){
		var that = this;
		this.amountDec.click(function(){
			var amount = parseInt(that.amountInput.val());
			if(amount<=1){
				return;
			}
			amount--;
			that.amountInput.val(amount);
		})
	},
	input:function(){
		var that = this;
		this.amountInput.on('input',function(){
			var amount = that.amountInput.val();
			if(amount == ''){
				that.amountInput.val(1);
				return;
			}
			amount = Number(amount);
			if(isNaN(amount)){
				that.errorWarn.show();
				that.errorCon.show();
				that.errorInfo.html('输入的格式有误')
				return;
			}
			if(amount>1000){
				that.errorWarn.show();
				that.errorCon.show();
				that.errorInfo.html('对不起购买上线不能大于1000!!')
			}
			
				
			
		})
	},
	ensureClick:function(){
		var that = this;
		this.ensure.click(function(){
			that.errorWarn.hide();
			that.errorCon.hide();
			that.amountInput.val(1);
		})
	},
	
	addCartClick:function(){
		var that = this;
		this.addCart.click(function(){
			var gid = $('.goods .glass .img-wrapper').attr('data-gid');
			var amount = parseInt(that.amountInput.val());
			
			var cart = $.cookie('SF_cart')||'{}';
			cart = JSON.parse(cart);
			if(!cart[gid]){
				cart[gid]={
					"goods-id":gid,
					"amount":amount
				};
			}else{
				cart[gid].amount+=amount;
			}
			$.cookie('SF_cart',JSON.stringify(cart),{expires:365,path:'/'});
			alert('添加成功');
			
		})
	}









}
detail.init()
