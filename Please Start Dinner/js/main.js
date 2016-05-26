$(document).ready(function($) {
	
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});


		new ScrollScene({triggerElement: "#parallax-bg1"})
								.setTween(TweenMax.from("#parallax-bg1 > div", 1, {top: "-80%", ease: Linear.easeNone}))
								.addTo(controller)


	
		new ScrollScene({triggerElement: "#parallax-bg2"})
								.setTween(TweenMax.from("#parallax-bg2 > div", 1, {top: "-80%", ease: Linear.easeNone}))
								.addTo(controller)


		new ScrollScene({triggerElement: "#parallax-bg3"})

								.setTween(TweenMax.from("#parallax-bg3 > div", 1, {top: "-80%", ease: Linear.easeNone}))
								.addTo(controller)

		new ScrollScene({triggerElement: "#parallax-bg4"})

								.setTween(TweenMax.from("#parallax-bg4 > div", 1, {top: "-80%", ease: Linear.easeNone}))
								.addTo(controller)

	$('a[href*=#]:not([href=#])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 700);
	        return false;
	   	}
    }
  });

	$("body").click(function(event) {
		if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
			$('.navbar-collapse').collapse('hide');
		}
	});



	$('.navbar-collapse a').click(function(event) {
		if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length) {
			$('.navbar-collapse').collapse('hide');
		}
	});
								
});

