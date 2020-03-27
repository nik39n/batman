	$(document).ready(function(){
		let tabsItem = $('.tabs-item')


		tabsItem.on('click',function(event){
			event.preventDefault();
			let activeContent = $(this).attr('href');
			$('.visible').toggleClass('visible');
			$(activeContent).toggleClass('visible');
			$('.tabs-active').toggleClass('tabs-active');
			$(this).toggleClass('tabs-active');
			let activeanim = $(this).attr('href');
			$('.animated fadeInRight').toggleClass('animated fadeInRight');
			$(activeanim).toggleClass('animated fadeInRight');
		});
		// tabsItem.on('click',function(){
		// 	$(.tabs-item).toggleClass('tabs-active');
		// });
	});