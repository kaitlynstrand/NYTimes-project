// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "a8a983c3b5a54362b6db445d7cff457a",
  'q': 'bears'
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  console.log(result.response.docs[0].headline.main)

}).fail(function(err) {
  throw err;
});
