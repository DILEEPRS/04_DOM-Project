
//changing background colors

barbarian= document.getElementsByClassName('clash-card__unit-stats--barbarian')[0];
barbarian.style.backgroundColor="#ec9b3b";

archer = document.getElementsByClassName('clash-card__unit-stats--archer')[0];
archer.style.backgroundColor='#ee5487';

gaint = document.getElementsByClassName('clash-card__unit-stats--giant')[0];
gaint.style.backgroundColor="#f6901a";

goblin = document.getElementsByClassName('clash-card__unit-stats--goblin')[0];
goblin.style.backgroundColor="#82bb30";

wizard = document.getElementsByClassName('clash-card__unit-stats--wizard')[0];
wizard.style.backgroundColor='#4facff';


//changing font color 

let color1 = document.querySelectorAll(".stat, .stat-value");


for(let i = 0; i < color1.length; i++) {
   color1[i].style.color="white";
 }

