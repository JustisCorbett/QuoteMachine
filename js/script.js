// JavaScript source code
$(document).ready(function(){
	var quote;
	var author;
    function getNewQuote(){
        $.ajax({
					url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
					
					dataType: 'json',
					 success: function ( data ) {
        		var post = data.shift(); // The data is an array of posts. Grab the first one.
       			$( '#author' ).html("<p>&mdash; " + post.title + "</p>");
       			$( '#quotes' ).html( post.content );
						quote = $('#quotes').text;
						author = $('#author').text;
					 },
					 cache: false
				});
			};

    getNewQuote();
$('#newQuote').on('click', function(event){
		event.preventDefault();
		getNewQuote();
});
$('#tweetQuote').on('click', function(event){
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + quote + author + " &hashtags=design");
})
})
