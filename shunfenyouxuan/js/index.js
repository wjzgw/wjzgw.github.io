$(function(){
	$('.head-wrapper').load('header.html',function(){
		$.getScript('js/header.js');
	});
	$('.nav-wrapper').load('nav.html',function(){
		$.getScript('js/nav.js');
	});
	$('.banner-wrapper').load('banner.html',function(){
		$.getScript('js/banner.js');
	});
	$('.body-wrapper').load('body.html',function(){
		$.getScript('js/body.js');
	});
	$('.article-wrapper').load('article.html',function(){
		$.getScript('js/article.js');
	});
	$('.foot-wrapper').load('foot.html',function(){
		$.getScript('js/foot.js');
	});
	
})
