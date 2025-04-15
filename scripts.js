// all the exercise data is cleanly organized into exercises.js
import exercises from "./exercises.js";

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < exercises.length; i++) {
    let exercise = exercises[i];
    let imageURL = exercise.image;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, exercise.name, imageURL, exercise.cues); // Edit title and image
    nextCard.addEventListener("click", function () {
      addToWorkout(exercise.name);
      removeCardWithAnimation(nextCard);
    });
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, cues) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Image";

  const ul = card.querySelector("ul");
  ul.innerHTML = ""; // clear existing bullet points

  for (let i = 0; i < cues.length; i++) {
    const li = document.createElement("li");
    li.textContent = cues[i];
    ul.appendChild(li);
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  exercises.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

function addToWorkout(exerciseName) {
  const list = document.getElementById("selected-list");
  const items = list.querySelectorAll("li");

  for (let item of items) {
    if (item.textContent === exerciseName) return; // Prevent duplicates
  }

  const li = document.createElement("li");
  li.textContent = exerciseName;

  list.appendChild(li);
}

function removeCardWithAnimation(card) {
  card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  card.style.opacity = "0";
  card.style.transform = "scale(0.95)";

  setTimeout(() => {
    card.remove();
  }, 400); // matches the transition time
}

