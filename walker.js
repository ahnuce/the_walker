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
walker.addEventListener('click', function(){
  walker.classList.toggle("flip"),
  walkingLeft = !walkingLeft;
});
//update interval
setInterval(update, 100);
//
// walker.addEventListener('click', function(){
// var url = 'http://quotesondesign.com/api/3.0/api-3.0.json';
// $.ajax ({
// 	url: url,
// 	type: "GET",
// 	dataType: "json"
// }).done(function(){
// 	console.log(json.quote);
//   alert(json.quote);
// }).fail(function(response){
// console.log("It failed");
// });
// });
