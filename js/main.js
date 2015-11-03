/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).ready(function(){
   // cache the window object
   $window = $(window);
   $('.intro').each(function(){
     var $scroll = $(this);
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
        var coords = '50% '+ yPos + 'px';
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function


 // var moreMembers = '<div class="col-md-3"><a href="team.html"><div class="circle circle-solid"><div class="circle-inner"><div class="score-text">View More Members</div></div></div></a></div>';

 // console.log(randomMember);
 // console.log(randomMember.length);
 // console.log(teamMembers16.length);



// $(".player").mb_YTPlayer();

// $("#contact-vid").tubular({videoId: 'jEFz76973lM'});
// $('body').tubular('jEFz76973lM','contact-vid');

}); // close out script
