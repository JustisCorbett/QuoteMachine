// JavaScript source code
$(document).ready(function(){
    function getNewQuote(){
        $.ajaxSetup({ cache: false });
    		$.getJSON('https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback', function(quoteResults) {
        	document.getElementById('quotes').innerHTML = quoteResults[0].content;
        	document.getElementById('author').innerHTML = "- " + quoteResults[0].title;
        	tweetQuote();
        
    });
			}

    getNewQuote();

})