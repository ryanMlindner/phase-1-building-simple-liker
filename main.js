// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName('like-glyph');
for(const elem in hearts){
  elem.addEventListener('click', heartClick(elem));
}

serverResponse = mimicServerCall()
  .then(success())
function heartClick(targetHeart) {  
  if (serverResponse === "Pretend remote server notified of action!") {
    if ("activated-heart" in targetHeart.classList) {
      targetHeart.classList.remove("activated-heart");
    }
    else targetHeart.classList.add("activated-heart");
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
