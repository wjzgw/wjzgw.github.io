$(function(){
	var nav={
		sortItem:$('#nav').find('.sort-item'),
		threeLevel:$('#nav').find('.three-level'),
		levelItem:$('#nav .sort').find('.level-item'),
		sortContent:$('#nav .sort-content'),
		sort:$('#nav .sort'),
		init:function(){
			this.navWrapperhover();
			this.navHover();
			this.sortHover();
			
		},
		sortHover:function(){
			var that=this;
			this.sort.hover(function(){
				that.sortContent.toggle();
			})
			
		},
		
		navWrapperhover:function(){
			var that = this;
			this.sortContent.mouseleave(function(){
				that.threeLevel.hide();
				that.sortItem.removeClass('hover')
			})
		},
		
		navHover:function(){
			var that = this;
			this.sortItem.hover(function(){
				that.threeLevel.show();
				var index = $(this).index();
				$(this).addClass('hover').siblings().removeClass('hover');
				that.levelItem.eq(index).show().siblings().hide();
			})
		}
		
	}
	
	nav.init();

})
