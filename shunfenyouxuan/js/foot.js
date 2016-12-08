
	var foot={
		navCart:$('.nav-side').find('.nav-cart'),
		navHistory:$('.nav-side').find('.nav-history'),
		navDownload:$('.nav-side').find('.nav-download'),
		backTop:$('.nav-side').find('.back-top'),
		
		flag:false,
		flag1:false,
		flag2:false,
		init:function(){
			this.display();
			this.backTopClick();
			this.navCartHover();
			this.navHistoryHover();
			this.navDownloadHover();
			this.toTopHover();
			
			
		},
		
		navCartHover:function(){
			
			
			var that=this;
			this.navCart.hover(function(){
				
				if(that.flag){
				return;
				}
				that.flag=true;
				$(this).find('.cart-content').stop(true).delay(1000).animate({
					left:-375
				},500)
			},function(){
				$(this).find('.cart-content').stop(true).delay(1000).animate({
					left:60
				},500,function(){
					that.flag=false;
				})
				
			})
		},
		navHistoryHover:function(){
			var that=this;
			
			this.navHistory.hover(function(){
				if(that.flag1){
					return;
				}
				that.flag1=true;
				$(this).find('.history-content').stop(true).delay(1000).animate({
					left:-355
				},500)
			},function(){
				$(this).find('.history-content').stop(true).delay(1000).animate({
					left:60
				},500,function(){
					that.flag1=false;
				})
				
			})
		},
		navDownloadHover:function(){
			
			var that=this;
			this.navDownload.hover(function(){
				if(that.flag2){
					return;
				}
				that.flag2=true;
				$(this).find('.download-content').stop(true).delay(1000).animate({
					left:-370
				},500)
			},function(){
				$(this).find('.download-content').stop(true).delay(1000).animate({
					left:60
				},500,function(){
					that.flag2=false;
				})
				
			})
		},
		backTopClick:function(){
			var that = this;
			this.backTop.click(function(){
				$('html,body').animate({
					scrollTop:0
				},300)
			});
		},
		display:function(){
			var that = this;
			$(window).scroll(function(){
				var t = $(this).scrollTop();
				if(t<=0){
					that.backTop.fadeOut();
				}else{
					that.backTop.fadeIn();
				}
			})
		}
		
	}
	foot.init();

