$(document).ready(function() {
  var count = 0;
  $(".se-pre-con").show();
       $.ajax({
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift();
          $('#quote-author').text("-- " + post.title);
          $('#quote-author1').text("-- " + post.title);
          var content = post.content.replace(/<\/*p>/g, "");
          $('#quote-content').html('"' + $.trim(content) + '"');
          $('#quote-content1').html('"' + $.trim(content) + '"');
        },
        cache: false
    });
  $("#getQuote").on("click", function(e) {
    $(".se-pre-con").show();
    var bgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg','6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    var path = 'images/';
    var imageUrl = path + bg;
    $('body').css('background-image', 'url(' + imageUrl +')');
      $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift();
          $('#quote-author').text("-- " + post.title);
          var content = post.content.replace(/<\/*p>/g, "");
          $('#quote-content').html('"' + $.trim(content) + '"');
         
        },
        cache: false
    });
       $(".se-pre-con").fadeOut("slow");
  });
$(".se-pre-con").fadeOut("slow");
  $("#getQuote1").on("click", function(e) {
    $(".se-pre-con").show();
      $.ajax( {
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift();
          $('#quote-author1').text("-- " + post.title);
          var content = post.content.replace(/<\/*p>/g, "");
          $('#quote-content1').html('"' + $.trim(content) + '"');
        },
        cache: false
    });
       $(".se-pre-con").fadeOut("slow");
  });
});