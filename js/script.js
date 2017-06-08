// JavaScript source code
$(document).ready(function(){
    function getNewQuote(){
        $.ajax({
					url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
					
					dataType: 'json',
					 success: function ( data ) {
        		var post = data.shift(); // The data is an array of posts. Grab the first one.
       			$( '#author' ).html("<p>&mdash; " + a[0].title + "</p>");
       			$( '#quotes' ).html( post.content );
					 },
					 cache: false
				});
			};

    getNewQuote();

})