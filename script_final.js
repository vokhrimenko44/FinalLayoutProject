$(function(){
	const disableScroll = function()
	{
		$('html, body').on('mousewheel', function(){
			return false;
		});
	}

	const enableScroll = function()
	{
		$('html, body').off('mousewheel');
	}

	$(".button-call")
		.click(function(){
			$('#popup1').fadeIn(400, disableScroll);
		});

	$(".footer__button-call")
		.click(function(){
			$('#popup1').fadeIn(400, disableScroll);
		});

	$(".first-screen__button_orange")
		.click(function(){
			$('#popup1').fadeIn(400, disableScroll);
		});

	$(".first-screen__button_orange_320")
		.click(function(){
			$('#popup1').fadeIn(400, disableScroll);
		});

	$(".mobile-picture")
		.click(function(){
			$('#popup1').fadeIn(400, disableScroll);
		});

	$(".fixed-container__second-screen__button_orange")
		.click(function(){
			$('#popup2').fadeIn(400, disableScroll);
		});

	$(".fixed-container__third-screen__button_orange")
		.click(function(){
			$('#popup3').fadeIn(400, disableScroll);
		});

	$(".burger")
		.click(function(){
			$('#popup_burger').fadeIn(400, disableScroll);
		});

	$(".burger_320")
		.click(function(){
			$('#popup_burger_320').fadeIn(400, disableScroll);
		});

	$('#popup1').click(function(event){
		if(event.target == this){
			$(this).hide();
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('#popup2').click(function(event){
		if(event.target == this){
			$(this).hide();
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('#popup3').click(function(event){
		if(event.target == this){
			$(this).hide();
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('#popup_burger').click(function(event){
		if(event.target == this){
			$(this).hide();
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('#popup_burger_320').click(function(event){
		if(event.target == this){
			$(this).hide();
			$(this).fadeOut(400, enableScroll);
		}
	})

	$(".menu__services_burger").click(function(event){
			$('#popup_burger').hide();
			$('#popup_burger_320').hide();
			$('#popup_burger').fadeOut(400, enableScroll);
			$('#popup_burger_320').fadeOut(400, enableScroll);
	})

	$(".menu__portfolio_burger").click(function(event){
			$('#popup_burger').hide();
			$('#popup_burger_320').hide();
			$('#popup_burger').fadeOut(400, enableScroll);
			$('#popup_burger_320').fadeOut(400, enableScroll);
	})

	$(".menu__price_burger").click(function(event){
			$('#popup_burger').hide();
			$('#popup_burger_320').hide();
			$('#popup_burger').fadeOut(400, enableScroll);
			$('#popup_burger_320').fadeOut(400, enableScroll);
	})
});