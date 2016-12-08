

	var Info={
		infoWrapper:$('.main-info .info-l a'),
		fruitCart:$('.fresh-fruit .fruit-c a'),
		ftop:$('.fresh-fruit .fruit-l .ftop'),
		nowHour1:$('.nowhour1'),
		nowMinute1:$('.nowminute1'),
		nowSecond1:$('.nowsecond1'),
		
		init:function(){
			this.cartHover();		
			this.fruitHover();
			this.fruitFade();
			this.showTime();
			//this.timing();
		},
		cartHover:function(){
			
			var that = this;
			this.infoWrapper.hover(function(){
				
				$(this).find('.cart-c').stop(true).animate({
					bottom:10
				},500)
			},function(){
				$(this).find('.cart-c').stop(true).animate({
					bottom:-24
				},500)
			})
			
				
		},
		fruitHover:function(){
			this.fruitCart.hover(function(){
				$(this).find('.cart').stop(true).animate({
					bottom:0
				},200)
			},function(){
				$(this).find('.cart').stop(true).animate({
					bottom:-20
				},200)
			})
		},
		fruitFade:function(){
			this.ftop.hover(function(){
				$(this).fadeTo(200,0.8)
			},function(){
				$(this).fadeTo(200,1)
			})
		},
		timing:function(){
			var that = this;
			var start_time=Date.now();
			var end_time=Date.parse('2016.12.30');
			var diff=end_time-start_time;
			var hour=parseInt(diff/1000/3600);
			var minute=parseInt(diff/1000/60%60);
			var second=parseInt(diff/1000%60);
			var hour = this.addZero(hour);
			var minute = this.addZero(minute);
			var second = this.addZero(second);
			this.nowHour1.html(hour);
			this.nowMinute1.html(minute);
			this.nowSecond1.html(second);
			
		},

		addZero:function(num){
			
			if(num<10){
				num='0'+num;
			}
			return num;
		},
		
		showTime:function(){
			var that = this;
			setInterval(function(){
				that.timing();
			},400);
			
		}
		
		
	}
	
	Info.init();
	
	
	
	
	
	
	
	
	
