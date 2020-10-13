// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  addListenerToLikeButton();

})

const errorText = document.querySelector("div#modal")
errorText.hidden = true;

//add event listener to like buttons
const addListenerToLikeButton = () => {
  let heartButton = document.querySelectorAll("article footer li")
  heartButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      mimicServerCall()
      .then(() => {
        let currentButton = event.target.children[0]
        let buttonClassArr = currentButton.className.split(" ")
        if (buttonClassArr.includes("activated-heart")) {
          currentButton.classList.remove("activated-heart")
        } else {
          currentButton.classList.add("activated-heart")
          errorText.hidden = true
        }
      })
      .catch(error => {
        errorText.innerHTML = error
        errorText.hidden = false
        setTimeout(() => {
          errorText.hidden = true
        }, 3000)
      })
    })
  })

}



const heartClickHandler = () => {


}
heartClickHandler()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
