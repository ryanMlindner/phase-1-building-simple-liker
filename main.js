// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
console.log("start script");
const errorMessage = document.querySelector("#modal")
const hearts = document.querySelectorAll('span.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', heartClick);
  console.log("this happened");
})

function heartClick(event) {
  mimicServerCall()
  .then(() => {
    //TODO if checks and toggles for .activated-heart
    if (event.target.innerHTML === EMPTY_HEART) {
      event.target.innerHTML = FULL_HEART;
      event.target.classList.add("activated-heart");
    }
    else {
      event.target.innerHTML = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    }
  })
  .catch((response) => {
    errorMessage.classList.remove("hidden");
    errorMessage.querySelector("#modal-message").innerHTML = response;
    setTimeout(() => {
      errorMessage.classList.add("hidden");
    }, 3000);
  })
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
