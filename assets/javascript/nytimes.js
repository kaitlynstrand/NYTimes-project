// Built by LucyBot. www.lucybot.com


$(document).on('click', '#search-btn', function(){

	console.log('click');	

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
		'api-key': "a8a983c3b5a54362b6db445d7cff457a",
		'q': $('#search-term').val()
	});

	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		console.log(result);

		console.log(result.response.docs[0].headline.main)

		var currentArticle = $('<div>');
		currentArticle.addClass('result-div');
		currentArticle.text(result.response.docs[0].headline.main);
		currentArticle.append('<br>');
		currentArticle.append(result.response.docs[0].byline.original);

		$('#top-articles').prepend(currentArticle);		

	}).fail(function(err) {
		throw err;
	});

})


$(document).on('click', '#clear-btn', function(){

	$('#top-articles').html('');

	});