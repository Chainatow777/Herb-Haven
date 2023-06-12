// JavaScript Code

// Function to toggle the card icon
function toggleCardIcon(icon) {
    icon.classList.toggle('active');
  }
  
  // Event listener for the icons button
  document.querySelector('.icons-button').addEventListener('click', function () {
    document.querySelector('.icons').classList.toggle('expanded');
  });
  
  // Event listener for the search icon
  document.querySelector('.fa-search').addEventListener('click', function () {
    document.querySelector('.search-input').classList.toggle('hidden');
  });
  
  // Event listeners for the card elements
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });  