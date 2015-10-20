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

   var teamMembers = [
     '<div class="col-md-3 member"><span class="member-name">Mohamed</span><a href="#"><img src="img/tahona.jpg" alt="Mohamed Khaled" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Mostafa</span><a href="#"><img src="img/mostafa.jpg" alt="Mostafa" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Samer</span><a href="members/samer.html" target="_blank"><img src="img/samer.jpg" alt="Samer" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Abdelhamid</span><a href="#"><img src="img/abdelhamid.jpg" alt="Abdelhamid Kassem" class=" img-circle team-img"></a></div>'

 ];

 var moreMembers = '<div class="col-md-3"><a href="team.html" target="_blank"><div class="circle circle-solid"><div class="circle-inner"><div class="score-text">View More Members</div></div></div></a></div>';

 // generate array of random numbers
 var randomMember = [];
 for(var i = 0; i < teamMembers.length; i++) {
   var tmpMember = Math.floor(Math.random() * teamMembers.length);
 // if non-rep
  while(randomMember.indexOf(tmpMember) != -1)
  {
    tmpMember = Math.floor(Math.random() * teamMembers.length);
  }
  randomMember.push(tmpMember);
 }

 // console.log(randomMember);
 // console.log(randomMember.length);
 // console.log(teamMembers.length);

 // generate members
  for(var i = 0; i < teamMembers.length; i++)
  {
    $(".members").append(teamMembers[randomMember[i]]);
  }

  // generate 3 memebrs for the home page
  for(var i = 0; i < 3; i++)
  {
    $(".members-min").append(teamMembers[randomMember[i]]);
  }
// append view more memebers
$(".members-min").append(moreMembers);

// on hover fade out and display name of memeber

$( ".member" ).children("a").hover(function() {
 $(this).fadeTo( 150, 0.33 );
 $(this).parent().find('.member-name').fadeIn(150);
 // $(this).append("Member");
 // $( this ).fadeIn( 500 );
});

$(".member").children("a").mouseleave(function() {
  $(this).fadeTo( 20, 1 );
  $(this).parent().find('.member-name').fadeOut(50);
});

// $("#contact-vid").tubular({videoId: 'jEFz76973lM'});
$('body').tubular('jEFz76973lM','contact-vid');

}); // close out script
