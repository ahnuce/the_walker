// Get the walker image:
var walker = document.getElementById('walker');
// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 20;
var xPos = rightBorder;

function update() {
  if(walkingLeft){
    xPos -= speed;
  }
  else {
    xPos += speed;
  }
  // reposition the walker
  walker.style.left = xPos + "px";

  // Turn around when you've crossed a border:
  if (xPos < leftBorder){
    walker.classList.toggle("flip");
    walkingLeft = !walkingLeft;
  }
  else if (xPos > rightBorder) {
    walker.classList.toggle("!flip");
    walkingLeft = walkingLeft;
  }

}
// walker.addEventListener('click', function(){
//   walker.classList.toggle("flip"),
//   walkingLeft = !walkingLeft;
// });

//update interval
setInterval(update, 100);


walker.addEventListener('click', function(){
const url = 'http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe1';
$.ajax ({
	url: url,
	type: "GET",
	dataType: "json"
}).done(function(response){
	console.log(response);
  prompt(response.value.joke);
}).fail(function(response){
console.log("It failed");
});
});
