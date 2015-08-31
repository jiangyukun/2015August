$(function(){
	
	//激活动画效果
	$(".bx_showMenu").hover(function(){
        $(this).addClass('bx_showMenu_hover');
    },function(){
		$(this).removeClass('bx_showMenu_hover')
    });

	//进度条
	$(".bx_progressbar").each(function (index, element) {
		var $current = $(element).find(".current");
		var $percent = $(element).text();
		var $parseInt = parseInt($percent,10);
		//$current.animate({"width":($(element).width() * ($parseInt / 100))},500);
		$current.animate({"width":$parseInt + '%'},500);
	});
	
	//返回头部
	$(window).scroll(function(){ 
		if ($(window).scrollTop()>200){ 
		$(".bx_rightNav").fadeIn(500); 
		} 
		else 
		{ 
		$(".bx_rightNav").fadeOut(500); 
		} 
	}); 
	$(".bx_goTop").click(function(){ 
		$('body,html').animate({scrollTop:0},1000); 
		return false; 
	});

	//右侧导航
	$(window).scroll(function () {
		var $module = $('.bx_products');
		$module.each(function(){
			var $this = $(this),
				num = $this.index(),
				len = $module.length,
				top = $this.offset().top+$this.outerHeight(true)*0.75,
				bottom = $this.offset().top+$this.outerHeight(true),
				srollPos = $(window).scrollTop(),
				windowHeight = $(window).height(),
				lastHeight = $module.eq( len-1 ).offset().top;

			//屏幕滑入当前模块右侧菜单选中当前模块菜单
			if( (top >= srollPos && top < ( srollPos+windowHeight ) ) || bottom >= srollPos && bottom < ( srollPos+windowHeight ) ){
				$(".bx_rightNav li").eq(num-1).addClass("on").siblings().removeClass('on');
			}

			//超出最后一个模块取消当前选择状态
			if( lastHeight < srollPos){
				$(".bx_rightNav li").removeClass('on');
			}
		})

	})
	
})
