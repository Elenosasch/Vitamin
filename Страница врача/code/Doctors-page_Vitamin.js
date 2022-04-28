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

const tabsBtn = document.querySelectorAll(".doctors-tabs__nav-btn");
const tabsItems = document.querySelectorAll(".doctors-tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}

document.querySelector('.doctors-tabs__nav-btn:nth-child(1)').click();

$(document).ready(function () {
	$('.reviews-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.reviews-doctors__arrow-prev',
		nextArrow: '.reviews-doctors__arrow-next',
		responsive: [{
			breakpoint: 1330,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 930,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});

$(document).ready(function () {
	$('.specialists-slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		easing: 'ease',
		prevArrow: '.another-doctors__arrow-prev',
		nextArrow: '.another-doctors__arrow-next',
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