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
	$('.spoiler-block__title').click(function (event) {
		if ($('.main-block__spoiler').hasClass('one')) {
			$('.spoiler-block__title').not($(this)).removeClass('active');
			$('.spoiler-block__text-block').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});