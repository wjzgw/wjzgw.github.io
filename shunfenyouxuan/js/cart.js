var glass={
	filter:$('.goods .small').find('.filter'),
	largeWrap:$('.goods .glass').find('.large'),
	smallWrap:$('.goods .glass').find('.small'),
	largeImg:$('.goods .large').find('.large-img'),
	arrowT:$('.goods .glass').find('.arrow-top'),
	arrowB:$('.goods .glass').find('.arrow-bottom'),
	imgWrap:$('.glass .left-side').find('.img-wrapper'),
	imgs:$('.glass .left-side .img-wrapper').find('img'),
	imgHigh:$('.glass .left-side .img-wrapper').find('img').eq(0).outerHeight(),
	index:0,
	num:0,
	init:function(){
		this.mousemove();
		this.hover();
		this.imgHover();
		this.arrowTClick();
		this.arrowBClick();
	},

	mousemove:function(){
		var that = this;
		this.smallWrap.on('mousemove',function(e){
			
			var t = that.smallWrap.offset().top;
			var l = that.smallWrap.offset().left;
			var left = e.pageX-l;
			var top = e.pageY-t;
			left = left < 50?50:(left > 250)?250 :left;
			top = top < 50?50:(top> 250)?250 :top;
			that.filter.css({
				left:left-50,
				top:top-50
			});
			that.largeImg.css({
				left:-2*(left-50),
				top:-2*(top-50)
			})
		})
		
	},
	
	hover:function(){
		var that = this;
		this.smallWrap.hover(function(){
			that.largeWrap.show();
			that.filter.show();
		},function(){
			that.largeWrap.hide();
			that.filter.hide();
		})
	},
	imgHover:function(){
		this.imgs.eq(0).addClass('active');
		var that = this;
		this.imgs.hover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			that.smallWrap.find('img').attr('src',$(this).attr('src'));
			that.largeWrap.find('img').attr('src',$(this).attr('src'));
		})
	},
	
	arrowTClick:function(){
		var that= this;
		this.arrowT.click(function(){
			that.index++;
			that.index%=that.imgs.length/2;
			that.imgWrap.stop(true).animate({
				marginTop:-1*that.index*that.imgHigh
			},300)
		})
	},
	arrowBClick:function(){
		var that= this;
		this.arrowB.click(function(){
			console.log(that.index)
			that.index--;
			if(that.index<=0){
				that.index=0;
				return;
			}
			that.imgWrap.stop(true).animate({
				marginTop:-1*(that.index-1)*that.imgHigh
			},300)
		})
	},

}
glass.init();
