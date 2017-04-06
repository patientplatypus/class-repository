//alert("Javascript is working!");


$(document).ready(function(){
	$('.title').css({
		'color':'red',
		'font-size':'45px'
	});

	$('.title').addClass('large-text');
	$('.title').removeClass('large-text');
	$('.grocerylist').append('<li>cashews</li>');
	$('.grocerylist').prepend('<li>condoms</li>')
});
