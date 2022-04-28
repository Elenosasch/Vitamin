$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();

$(document).ready(function () {
	$('.phones-header__phone').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.spoilers-price__title').click(function (event) {
		if ($('.price__spoilers').hasClass('one')) {
			$('.spoilers-price__title').not($(this)).removeClass('active');
			$('.spoilers-price__text-block').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function () {
	$('.specialists-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.specialists__arrow-prev',
		nextArrow: '.specialists__arrow-next',
		responsive: [{
			breakpoint: 1780,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 1120,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 730,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});