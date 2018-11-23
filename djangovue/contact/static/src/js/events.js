/**
 * Events
 */

$('#showSearch').click(function () {
	$('.search-wrapper-mobile').toggleClass('is-hidden');
});

$('.header__search-close').click(function () {
	$('.search-wrapper-mobile').addClass('is-hidden');
});
