{
	$('[data-group]').each(function(){
		var $allTarget = $(this).find('[data-target]'),
				$allClick = $(this).find('[data-click]'),
				activeClass = 'active';
		
		$allTarget.first().addClass(activeClass);
		$allClick.first().addClass(activeClass);
		
		$allClick.click(function(e){
			e.preventDefault();
			
			var id = $(this).data('click'),
					$target = $('[data-target="' + id + '"]');
			
			$allClick.removeClass(activeClass);
			$allTarget.removeClass(activeClass);
			
			$target.addClass(activeClass);
			$(this).addClass(activeClass);
		});
	});

	$('.menu-nav a[href^="#"]').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
				menuHeight = $('.menu').innerHeight(),
				targetOffset = $(id).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset - menuHeight
		}, 500);
	});

	$('.logo').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500)
	});

	$('section').each(function(){
		var height = $(this).height(),
				offsetTop = $(this).offset().top,
				menuHeight = $('.menu').innerHeight(),
				id = $(this).attr('id'),
				$itemMenu = $('a[href="#' + id + '"]');
		
		$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
				$itemMenu.addClass('active');
			} else {
				$itemMenu.removeClass('active');
			}
		});
	});


	$('.mobile-btn').click(function(){
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	});
}

{
	// Identificar o clique no menu
	// Verificar o item que foi clicado e fazer referência com o alvo
	// Verificar a distância entre o alvo e o topo
	// Animar o scroll até o alvo

	const menuItems = document.querySelectorAll('.menu a[href^="#"]');

	function getScrollTopByHref(element) {
		const id = element.getAttribute('href');
		return document.querySelector(id).offsetTop;
	}

	function scrollToIdOnClick(event) {
		event.preventDefault();
		const to = getScrollTopByHref(event.currentTarget) - 80;
		scrollToPosition(to);
	}
	
	function scrollToPosition(to) {
		window.scroll({
			top: to,
			behavior: "smooth",
		})
	smoothScrollTo(0, to);
	}
}















