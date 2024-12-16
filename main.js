// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function submitData(name, email)
// Define the empty and full heart symbols
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Add an event listener for each heart
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph'); // Select all hearts

  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      // Check if the heart is empty or full
      if (heart.textContent === EMPTY_HEART) {
        // Simulate server call for empty heart
        mimicServerCall()
          .then(() => {
            // Success: Change to full heart and add the activated class
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          })
          .catch((error) => {
            // Failure: Show the error modal with the error message
            const modal = document.getElementById('modal');
            const modalMessage = document.getElementById('modal-message');
            modalMessage.textContent = error; // Set error message
            modal.classList.remove('hidden'); // Show modal

            // Hide modal after 3 seconds
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 3000);
          });
      } else {
        // If heart is full, toggle it back to empty
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    });
  });
});



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
