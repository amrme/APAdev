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

// generate random numbers for members in array
function random_member(arrOfMembers) {
  // generate array of random numbers
  var randomMember = [];
  for(var i = 0; i < arrOfMembers.length; i++) {
    var tmpMember = Math.floor(Math.random() * arrOfMembers.length);
  // if non-rep
   while(randomMember.indexOf(tmpMember) != -1)
   {
     tmpMember = Math.floor(Math.random() * arrOfMembers.length);
   }
   randomMember.push(tmpMember);
  }
  return randomMember;
}

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

   var team16 = '<div class="col-sm-12 col-md-4 member"><span class="member-name">2016 Team</span><a href="teams/team16.html"><img src="http://i.imgur.com/KOmxkag.jpg" alt="2016 AquaPhoton Academy Team" class="img-circle teams-img"></a></div>';
   var team15 = '<div class="col-sm-12 col-md-4 member"><span class="member-name">2015 Team</span><a href="teams/team15.html"><img src="http://i.imgur.com/xCmX1MR.jpg" alt="2015 AquaPhoton Academy Team" class="img-circle teams-img"></a></div>';
   var team14 = '<div class="col-sm-12 col-md-4 member"><span class="member-name">2014 Team</span><a href="teams/team14.html"><img src="http://i.imgur.com/5AJ1d2y.jpg" alt="2014 AquaPhoton Academy Team" class="img-circle teams-img"></a></div>';
   var team13 = '<div class="col-sm-12 col-md-4 member"><span class="member-name">2013 Team</span><a href="teams/team13.html"><img src="http://i.imgur.com/Y1sleM0.jpg?1" alt="2013 AquaPhoton Academy Team" class="img-circle teams-img"></a></div>';
   // append teams to the homepage
   $(".members-min").append(team16);
   $(".members-min").append(team15);
   $(".members-min").append(team14);
   $(".members-min").append(team13);

   // on hover fade out and display name of memeber
   $( ".member" ).children("a").hover(function() {
   $(this).fadeTo(150, 0.03 );
   $(this).parent().find('.member-name').fadeIn(250);
   });
   $(".member").children("a").mouseleave(function() {
    $(this).fadeTo(20, 1 );
    $(this).parent().find('.member-name').fadeOut(50);
   });
}); // close out script
