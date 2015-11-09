var supervisor16 = '<div class="col-md-3 member"><span class="member-name">Prof. Ahmed<br>Naguib</span><img src="http://i.imgur.com/Ko02fE0.jpg" alt="Prof. Ahmed Naguib" class=" img-circle team-img"></div>';
var mentors16 = [
  '<div class="col-md-3 member"><span class="member-name">Moataz<br>Tarek</span><img src="http://i.imgur.com/RrFv4Jc.jpg" alt="Moataz Tarek" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Ahmed<br>Saeed</span><img src="http://i.imgur.com/EsNVtoc.jpg" alt="Ahmed Saeed" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Omar<br>Ibn El Khatab</span><img src="http://i.imgur.com/sjuxYnX.jpg" alt="Omar Ibn El Khatab" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mohamed<br>Saad</span><img src="http://i.imgur.com/sZjsGxI.jpg?1" alt="Mohamed Saad" class=" img-circle team-img"></div>',
];
var ceo16 = '<div class="col-md-3 member"><span class="member-name">Abdelhamid<br><span class="label label-warning">CEO</span></span><img src="http://i.imgur.com/Gs44kli.jpg" alt="Abdelhamid Kassem" class=" img-circle team-img"></div>';
var cto16 = [
  '<div class="col-md-3 member"><span class="member-name">Mostafa<br><span class="label label-primary">CTO</span></span><img src="http://i.imgur.com/RJoGtLd.jpg" alt="Mostafa" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Ahmad<br><span class="label label-primary">CTO</span></span><img src="http://i.imgur.com/yOPGkcH.jpg" alt="Ahmad Al-Tawil" class=" img-circle team-img"></div>',
];
var teamMembers16 = [
  '<div class="col-md-3 member"><span class="member-name">Mohamed</span><img src="http://i.imgur.com/cwlGcKy.jpg" alt="Mohamed Khaled" class=" img-circle team-img member-image"></div>',
  '<div class="col-md-3 member"><span class="member-name">Samer</span><img src="http://i.imgur.com/7jx52I7.jpg?1" alt="Samer" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Karim</span><img src="http://i.imgur.com/skPTGGD.jpg" alt="Karim Tarek Farag" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Fouad</span><img src="http://i.imgur.com/wpJWL7T.jpg" alt="Fouad Safawani" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Hassen</span><img src="http://i.imgur.com/FCLPknF.jpg" alt="Hassen Mohamed Hassen" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Omar</span><img src="http://i.imgur.com/hEZ64RG.jpg" alt="Omar Naguib Ibrahim Ibrahim Mostafa" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Omar</span><img src="http://i.imgur.com/0URiCIU.jpg" alt="Omar Adel Kassem" class=" img-circle team-img"></div>',
];

// append supervisor
$("#supervisor").append(supervisor16);
// append mentors
var randmentor = random_member(mentors16);
for(var i = 0; i < mentors16.length; i++)
{
  $("#mentors").append(mentors16[randmentor[i]]);
}
// append CEO
$("#team16").append(ceo16);
// append CTOs
var randCTO = random_member(cto16);
for(var i = 0; i < cto16.length; i++)
{
  $("#team16").append(cto16[randCTO[i]]);
}
// append members
 var randMembers = random_member(teamMembers16);
 for(var i = 0; i < teamMembers16.length; i++)
 {
   $("#team16").append(teamMembers16[randMembers[i]]);
 }
