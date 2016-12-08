
	var taste={
		slide:$('.text-list .taste .slide'),
		imgWrapper:$('.text-list .taste').find('.img-wrapper'),
		imgs:$('.text-list .taste').find('img'),
		arrow:$('.text-list .taste').find('.arrow'),
		circle:$('.text-list .taste').find('.circle-wrapper'),
		circles:null,
		imgWidth:$('.text-list .taste').find('img').eq(0).width(),
		index:0,
		moveTop:$('.text-list .shaidan').find('.move-top'),
		num:0,
		count:0,
		discussH:$('.text-list .shaidan').find('.move-top').height(),
		personH:$('.text-list .shaidan .move-top li').height(),
		display:$('.text-list .find-best .best-c').find('.display'),
		selectCon:$('.text-list .find-best .best-b').find('.select-content'),
		addressSel:$('.text-list .find-best .best-b').find('.select'),
		address:$('.text-list .find-best .best-b').find('li'),
		selectItem:$('.text-list .find-best .best-b').find('.select-item'),
		ensure:$('.text-list .find-best .best-b').find('.ensure'),
		
		init:function(){
			var firstImg = this.imgs.eq(0).clone();
			this.imgWrapper.append(firstImg);
			this.imgs=$('.text-list .taste').find('img');
			this.hover();
			this.getCircle();
			this.arrowLClick();
			this.arrowRClick();
			this.circleClick();
			this.shaidanMove();
			this.count=parseInt(this.discussH/(this.personH*2));
			this.displayHover();
			this.selectHover();
			this.addressClick();
			this.ensureClick();
		},
		hover:function(){
			var that = this;
			this.slide.hover(function(){
				that.arrow.show();
			},function(){
				that.arrow.hide();
			})
		},
		getCircle:function(){
			var content='';
			for(var i=0;i<this.imgs.length-1;i++){
				content+='<span class="circle-item"></span>'
			}
			
			this.circle.html(content);
			this.circles=this.circle.find('.circle-item');
			this.circles.eq(0).addClass('active');
			
		},
		arrowLClick:function(){
			var that = this;
			this.arrow.eq(0).click(function(){
				that.index--;
				that.imgSwitch();
			})
		},
		arrowRClick:function(){
			var that = this;
			this.arrow.eq(1).click(function(){
				that.index++;
				that.imgSwitch();
			})
		},
		
		circleClick:function(){
			var that=this;
			this.circles.click(function(){
				
				that.index=$(this).find('.circle-item').index();
				that.imgSwitch();
			})
			
		},
		
		imgSwitch:function(){
			var that = this;
			if(this.index>=this.imgs.length){
				this.imgWrapper.css({
					marginLeft:0
				})
				this.index=1;
			}
			if(this.index<=-1){
				this.imgWrapper.css({
					marginLeft:-1*(this.imgs.length-1)*this.imgWidth
				})
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
			this.imgWrapper.stop(true).animate({
				marginLeft:-1*this.imgWidth*this.index
			},500)
		},
		
		shaidanMove:function(){
			var that = this;
			setInterval(function(){
				that.num++;
				that.num=that.num%4;
				
				that.moving();
			},1500)
			
		},
		
		moving:function(){
			var that = this;
			if(this.num==this.count){
				this.moveTop.css({
					marginTop:0
				})
			}else{
				this.moveTop.animate({
				marginTop:-1*this.num*this.personH*2
				},500)
			}
			
		},
		displayHover:function(){
			this.display.hover(function(){
				$(this).find('.message').toggle();
			})
		},
		selectHover:function(){
			var that = this;
			this.addressSel.hover(function(){
				that.selectCon.toggle();
			})
		},
		addressClick:function(){
			var that = this;
			this.address.eq(0).click(function(){
				that.selectItem.show();
				that.ensure.hide();
			});
			
		},
		ensureClick:function(){
			var that = this;
			this.address.eq(1).click(function(){
				that.ensure.show();
				that.selectItem.hide();
			});
			
		}
		
	}
	taste.init();
	
	
	
	
