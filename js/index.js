$(function() {
	var $tip = $('.tip');
	$tip.on('mouseover', function() {
		$(this).children('.content').stop().fadeIn();
	})
	$tip.on('mouseout', function() {
		$(this).children('.content').stop().fadeOut();
	})
	$('.mouseSlider > a').on('mouseover', function() {
		$(this).find('.mod-hover').stop().fadeIn();
	})
	$('.mouseSlider > a').on('mouseout', function() {
		$(this).find('.mod-hover').stop().fadeOut();
	})
	$('.list-item').on('mouseover', function() {
		$(this).find('.shade').stop().fadeIn();
	})
	$('.list-item').on('mouseout', function() {
			$(this).find('.shade').stop().fadeOut();
		})
		//联系方式的显示隐藏控制
		//获取左边关闭按钮
	var $close = $('#close-im');
	//获取联系方式面板
	var $contact = $('.im-main');
	//获取隐藏的小提示图标
	var $openIm = $('#open-im');
	var $ropenIm = $('#open-im-r');
	$close.on('click', function() {
		$(this).parent('.im-main').css('display', 'none');
		$openIm.css('display', 'block');
	})
	$openIm.on('click', function() {
		event.preventDefault();
		$contact.css('display', 'block');
		$(this).css('display', 'none');
	});
	//获取右边的关闭按钮
	var $rclose = $('#close-im-r');
	$rclose.on('click', function() {
		$(this).parent('.im-main').css('display', 'none');
		$ropenIm.css('display', 'block');
	})
	$ropenIm.on('click', function() {
		event.preventDefault();
		$contact.css('display', 'block');
		$(this).css('display', 'none');
	});
})