$(function(){
	$('.head-wrapper').load('header.html',function(){
		$.getScript('js/header.js');
	});
	$('.nav-wrapper').load('nav.html',function(){
		$.getScript('js/nav.js');
	});
	$('.body-wrapper').load('cart.html',function(){
		$.getScript('js/cart.js');
		$.getScript('js/cart-buy.js');
	})
	$('.foot-wrapper').load('foot.html',function(){
		$.getScript('js/foot.js');
	})
	
})
