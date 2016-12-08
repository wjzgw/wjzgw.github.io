var Cart = {
		data:null,
		cart:{},
		pay:{},
		cartCon:$('.cart-container .cart-main-content'),
	init:function(){
		this.readCookie();
		var that = this;
		$.getJSON('js/data.json?key='+Math.random(),function(data){
			that.data = data;
			for(var key in that.cart){
				(function(k){
					var ul = $('<ul class="cart-goods-item clear"></ul>');
					ul.load('goodsInfo.html?key='+Math.random(),function(){
						var gid = that.cart[k]['goods-id'];
						ul.attr({
							'data-gid':gid
						});
						ul.find('.goods-price').html(data[gid]['goods-price'].toFixed(2));
						ul.find('.amount-input').val(that.cart[k].amount);
						var total = that.cart[k].amount*data[gid]['goods-price'];
						ul.find('.goods-money').html(total.toFixed(2));
						that.cartCon.append(ul);
						
					});
				})(key);
			}
		});
		
		this.goodsSelect();
		this.selectAll();
		this.delSelected();
		this.increase();
		this.decrease();
		this.input();
		this.remove();
		
		
		
		
	},
	increase:function(){
		var that = this;
		this.cartCon.on('click','.amount-increase',function(){
			var amount = $(this).prev().val();
			var gid = $(this).parents('.cart-goods-item').data('gid');
			var stock = that.data[gid].stock;
			if(amount>=stock){
				return;
			}
			amount++;
			$(this).prev().val(amount);
			that.handleCookie( $(this).prev() );
		})
	},
	decrease:function(){
		var that = this;
		this.cartCon.on('click','.amount-decrease',function(){
			var amount = $(this).next().val();
			var gid = $(this).parents('.cart-goods-item').data('gid');
			var stock = that.data[gid].stock;
			if(amount<=1){
				return;
			}
			amount--;
			$(this).next().val(amount);
			that.handleCookie( $(this).next() );
		})
	},
	input:function(){
		var that = this;
		this.cartCon.on('input','.amount-input',function(){
			var amount = $(this).val();
			amount = parseInt(amount);
			var gid = $(this).parents('.cart-goods-item').data('gid');
			var stock = that.data[gid].stock;
			if(amount>=stock){
				amount = stock;
			}
			if(isNaN(amount)||amount == 0){
				$(this).val(1);
			}else{
				$(this).val(amount);
			}
			that.handleCookie($(this))
		})
	},
	handleCookie:function(input){
		var goodsItem = input.parents('.cart-goods-item');
		var gid =goodsItem.data('gid');
		var price  = parseFloat(goodsItem.find('.goods-price').html());
		var totalMoneyBox = goodsItem.find('.goods-money');
		var totalMoney = (parseInt(input.val())*price).toFixed(2)
		totalMoneyBox.html(totalMoney);
		this.cart[gid].amount = parseInt(input.val());
		this.setCookie();
		if(goodsItem.find('input[type="checkbox"]').prop('checked')){
			this.pay[gid] = totalMoney;
			this.handlePay();
		}
		
	},
	remove:function(){
		var that = this;
		this.carCon.on('click','.delete',function(){
			if(confirm('确定删除宝贝吗？')){
				$(this).parents('.cart-goods-item').remove();
				var gid = $(this).parents('.cart-goods-item').data('gid');
				delete that.cart[gid];
				that.setCookie();
			}
		})
	},
	goodsSelect:function(){
		var that = this;
		
		this.cartCon.on('change','.td-checkbox input[type="checkbox"]',function(){
			
			var goodsItem = $(this).parents('.cart-goods-item');
			var gid = goodsItem.data('gid');
			var total = goodsItem.find('.goods-money').html();
			
			if(that.pay[gid]){
				delete that.pay[gid];
			}else{
				that.pay[gid] = total;
			}
			var allCheckBox  = that.cartCon.find('input[type="checkbox"]');
			var allChecked = that.cartCon.find('input[type="checkbox"]:checked');
			if(allCheckBox.length == allChecked.length){
				$('.select-all-btn').prop('checked',true);
			}else{
				$('.select-all-btn').prop('checked',false);
			}
			that.handlePay();
		})
	},
	handlePay:function(){
		var goodsAmount = $('.user-goods-amount');
		var goodsMoney = $('.user-goods-money');
		var goPay = $('.go-pay');
		var totalNum = 0;
		var totalMoney = 0;
		for(var key in this.pay){
			totalNum++;
			totalMoney+=parseFloat(this.pay[key]);
		}	
		if(totalNum>0){
			goPay.addClass('can-pay');
		}else{
			goPay.removeClass('can-pay');
		}
		goodsAmount.html(totalNum);
		goodsMoney.html(totalMoney.toFixed(2))
		
	},
	selectAll:function(){
		$('.select-all-btn').click(function(){
			var status = $(this).prop('checked');
			var allCheckBox=$('.cart-main-content input[type="checkbox"]');
			if(status){
				allCheckBox.prop('checked',true);
			}else{
				allCheckBox.prop('checked',false);
			}
			allCheckBox.change();
		})
	},
	delSelected:function(){
		var that = this;
		$('.cart-option .delete ').click(function(){
			var allChecked = that.cartCon.find('input[type="checkbox"]:checked');
			if(allChecked.length == 0){
				alert('请选择需要删除的商品！！！');
				return;
			}
			if(confirm('确定删除选中的宝贝吗？')){
				allChecked.each(function(){
					var gid = $(this).parents('.cart-goods-item').data('gid');
					$(this).parents('.cart-goods-item').remove();
					delete that.cart[gid];
					that.setCookie();
					delete that.pay[gid];
					that.handlePay();
				});
			}
		});
		
	},
	readCookie:function(){
		this.cart = $.cookie('SF_cart');
		this.cart = JSON.parse(this.cart);
	},
	setCookie:function(){
		$.cookie('SF_cart',JSON.stringify(this.cart),{expires:365,path:'/'});
		
	}
};
Cart.init();
