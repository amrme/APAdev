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

   var team16 = '<div class="col-sm-12 col-md-4 member"><span class="member-name">2016 Team</span><a href="teams/team16.html"><img src="http://i.imgur.com/KOmxkag.jpg" alt="2016 AquaPhoton Academy Team" class="img-circle teams-img"></a></div>';
   var ceo16 = '<div class="col-md-3 member"><span class="member-name">Abdelhamid<br><span class="label label-warning">CEO</span></span><a href="#"><img src="http://i.imgur.com/Gs44kli.jpg" alt="Abdelhamid Kassem" class=" img-circle team-img"></a></div>';
   var teamMembers16 = [
     '<div class="col-md-3 member"><span class="member-name">Mohamed</span><a href="#"><img src="http://i.imgur.com/cwlGcKy.jpg" alt="Mohamed Khaled" class=" img-circle team-img member-image"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Mostafa<br><span class="label label-primary">CTO</span></span><a href="#"><img src="http://i.imgur.com/RJoGtLd.jpg" alt="Mostafa" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Samer</span><a href="./members/samer.html"><img src="http://i.imgur.com/7jx52I7.jpg?1" alt="Samer" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Karim</span><a href="#"><img src="http://i.imgur.com/skPTGGD.jpg" alt="Karim Tarek Farag" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Ahmad<br><span class="label label-primary">CTO</span></span><a href="#"><img src="http://i.imgur.com/yOPGkcH.jpg" alt="Ahmad Al-Tawil" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Fouad</span><a href="#"><img src="http://i.imgur.com/wpJWL7T.jpg" alt="Fouad Safawani" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Hassen</span><a href="#"><img src="http://i.imgur.com/FCLPknF.jpg" alt="Hassen Mohamed Hassen" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Omar</span><a href="#"><img src="http://i.imgur.com/hEZ64RG.jpg" alt="Omar Naguib Ibrahim Ibrahim Mostafa" class=" img-circle team-img"></a></div>',
     '<div class="col-md-3 member"><span class="member-name">Omar</span><a href="#"><img src="http://i.imgur.com/0URiCIU.jpg" alt="Omar Adel Kassem" class=" img-circle team-img"></a></div>',
 ];

 // var moreMembers = '<div class="col-md-3"><a href="team.html"><div class="circle circle-solid"><div class="circle-inner"><div class="score-text">View More Members</div></div></div></a></div>';

 // generate array of random numbers
 var randomMember = [];
 for(var i = 0; i < teamMembers16.length; i++) {
   var tmpMember = Math.floor(Math.random() * teamMembers16.length);
 // if non-rep
  while(randomMember.indexOf(tmpMember) != -1)
  {
    tmpMember = Math.floor(Math.random() * teamMembers16.length);
  }
  randomMember.push(tmpMember);
 }

 // console.log(randomMember);
 // console.log(randomMember.length);
 // console.log(teamMembers16.length);

 // append CEO
 $(".members").append(ceo16);
 // generate members
  for(var i = 0; i < teamMembers16.length; i++)
  {
    $(".members").append(teamMembers16[randomMember[i]]);
  }

  // append teams to the homepage
  // for(var i = 0; i < 1; i++)
  // {
  //   $(".members-min").append(teamMembers16[randomMember[i]]);
  // }
// append teams to the homepage
$(".members-min").append(team16);


// on hover fade out and display name of memeber

$( ".member" ).children("a").hover(function() {
 $(this).fadeTo(150, 0.03 );
 // $(this).html('<div styles="background-color:black;"></div>');
 $(this).parent().find('.member-name').fadeIn(150);
 // $(this).parent().find('.member-image').fadeTo( 150, 0.33 );

 // $(this).append("Member");
 // $( this ).fadeIn( 500 );
});

$(".member").children("a").mouseleave(function() {
  $(this).fadeTo(20, 1 );
  $(this).parent().find('.member-name').fadeOut(50);
});

// $(".player").mb_YTPlayer();

// $("#contact-vid").tubular({videoId: 'jEFz76973lM'});
// $('body').tubular('jEFz76973lM','contact-vid');

}); // close out script
