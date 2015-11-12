var supervisor16 = [
   '<div class="col-md-12 member"><span class="member-name">Prof. Mohamed<br>El Gohary</span><img src="" alt="" class=" img-circle team-img"></div>',
]

var ceo16 =    '<div class="col-md-3 member"><span class="member-name">Moataz<br><span class="label label-warning">CEO</span></span><img src="http://i.imgur.com/RrFv4Jc.jpg" alt="Moataz Tarek" class=" img-circle team-img"></div>';

var cto16 = [
  '<div class="col-md-3 member"><span class="member-name">Mohamed<br><span class="label label-primary">CTO</span></span><img src="http://i.imgur.com/sZjsGxI.jpg?1" alt="Mohamed Saad" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mostafa<br><span class="label label-primary">CTO</span></span><img src="http://i.imgur.com/FEfNbXJ.jpg" alt="Omar Ibn El Khatab" class=" img-circle team-img"></div>',
];
var teamMembers16 = [
  '<div class="col-md-3 member"><span class="member-name">Omar<br>Ibn El Khatab</span><img src="http://i.imgur.com/sjuxYnX.jpg" alt="Omar Ibn El Khatab" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Abd Elrahman</span><img src="" alt="" class=" img-circle team-img" style="background-color:white;"></div>',
  '<div class="col-md-3 member"><span class="member-name">Ahmed<br>Saeed</span><img src="http://i.imgur.com/EsNVtoc.jpg" alt="Ahmed Saeed" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mohamed<br>Mosaad</span><img src="http://i.imgur.com/TAOWNxN.jpg" alt="Mohamed Mosaad" class=" img-circle team-img"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mostafa<br>Abdelaal</span><img src="" alt="" class=" img-circle team-img" style="background-color:white;"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mohamed<br>Farouk</span><img src="" alt="" class=" img-circle team-img" style="background-color:white;"></div>',
  '<div class="col-md-3 member"><span class="member-name">Mohamed<br>Zaytoon</span><img src="" alt="" class=" img-circle team-img" style="background-color:white;"></div>',
  '<div class="col-md-3 member"><span class="member-name">Serag<br>El Din</span><img src="" alt="" class=" img-circle team-img" style="background-color:white;"></div>',
 ];

// append supervisor
var randSup = random_member(supervisor16);
for(var i = 0; i < supervisor16.length; i++)
{
  $("#supervisor").append(supervisor16[randSup[i]]);
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
