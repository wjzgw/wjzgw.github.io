
	var main={
		banner:$('.banner-container'),
		imgWrapper:$('#banner .img-wrapper'),
		imgs:$('#banner .img-wrapper img'),
		imgWidth:$('#banner .img-wrapper img').eq(0).width(),
		circle:$('#banner .circle-wrapper .circle'),
		index:0,
		timer:null,
		circles:null,
		init:function(){
			var firstImg=this.imgs.eq(0).clone();
			this.imgWrapper.append(firstImg);
			this.imgs=$('#banner .img-wrapper img');
			
			
			this.hover();
			this.autoPlay();
			this.circlenum();
			this.circleClick();
			
		},
		
		circlenum:function(){
			var that = this;
			var content='';
			
			for(var i=0;i<this.imgs.length-1;i++){
				
				content+='<span class="circle-item">'+(i+1)+'</span>';
				
			}
			
			this.circle.html(content);
			this.circles=this.circle.children();
			this.circles.eq(0).addClass('active');
			
		},
		
		circleClick:function(){
			var that = this;
			
				this.circle.click(function(e){
				if($(e.target).is(that.circles)){
					that.index=$(e.target).index();
					that.imgSwitch();
				}
			})
		},
		autoPlay:function(){
			var that=this;
			this.timer=setInterval(function(){
				that.index++;
				
				that.imgSwitch();
			},1500)
			
		},
		
		hover:function(){
			var that = this;
			this.banner.hover(function(){
				clearInterval(that.timer);
			},function(){
				
				that.autoPlay();
			})
			
		},
		
		imgSwitch:function(){
			var that=this;
			
			if(this.index>=this.imgs.length){
				
				this.imgWrapper.css({
					marginLeft:0
				});
				this.index=1;
			};
			if(this.index<=-1){
				this.imgWrapper.css({
					marginLeft:-1*(this.imgs.length-1)*this.imgWidth
				});
				this.index=this.imgs.length-2;
			}
			for(var k=0;k<this.circles.length;k++){
				
				this.circles.eq(k).removeClass('active')
			}
			if(this.index==this.imgs.length-1){
				this.circles.eq(0).addClass('active')
			}else{
				
				this.circles.eq(this.index).addClass('active');
			}
			this.imgWrapper.animate({
				marginLeft:-1*this.index*this.imgWidth
			},500)
		}
		
		
	
	}
	main.init();

	$(window).resize(function(){
		main.init();
	})

