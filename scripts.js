// all the exercise data is cleanly organized into exercises.js
import exercises from "./exercises.js";

// This function adds cards the page to display the data in the array
function showCards(exerciseList = exercises) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < exercises.length; i++) {
    let exercise = exerciseList[i];
    let imageURL = exercise.image;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, exercise.name, imageURL, exercise.cues, exercise.bodyPart, exercise.type, exercise.recommendedByMe); // Edit title and image
    nextCard.addEventListener("click", function () {
      addToWorkout(exercise.name);
      removeCardWithAnimation(nextCard);
    });
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, cues, bodyPart, type, recommended) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  // Inject tag container (right below header)
  let tagContainer = card.querySelector(".tag-container");
  if (!tagContainer) {
    tagContainer = document.createElement("div");
    tagContainer.classList.add("tag-container");
    cardHeader.insertAdjacentElement("afterend", tagContainer);
  }

  tagContainer.innerHTML = `
  <div class="tag-row">
    ${recommended ? '<span class="tag star-tag">⭐ Recommended</span>' : ''}
    <span class="tag body-tag">${bodyPart}</span>
    <span class="tag type-tag ${type.toLowerCase()}">${type}</span>
  </div>
`;

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

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  // search fuhction
  document.getElementById("searchBar").addEventListener("input", searchExercises);

  // add exercise fuhction
  const form = document.getElementById("addExerciseForm");
  if (form) {
    form.addEventListener("submit", addExercise);
  }
});

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

function addExercise(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("newName").value.trim();
  const bodyPart = document.getElementById("newBody").value.trim();
  const type = document.getElementById("newType").value.trim().toLowerCase();
  const image = document.getElementById("newImage").value.trim();

  if (!name || !bodyPart || !type) {
    alert("Please fill in all required fields.");
    return;
  }

  const newExercise = {
    name: name,
    bodyPart: bodyPart,
    type: capitalize(type),
    recommendedByMe: false,
    cues: ["Engage core", "Control the movement", "Breathe steadily"],
    image: image || "images/exercises/default.png"
  };

  exercises.push(newExercise);
  showCards();
  event.target.reset();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function searchExercises() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const searchTerms = input.split(" ").filter(term => term.trim() !== "");

  const resultMessage = document.getElementById("search-result");

  const filteredExercises = exercises.filter(exercise =>
    searchTerms.every(term =>
      exercise.name.toLowerCase().includes(term)
    )
  );

  // Feedback message
  if (filteredExercises.length === 0) {
    resultMessage.textContent = "No exercises match your search.";
  } else {
    resultMessage.textContent = "";
  }

  showCards(filteredExercises);
}

document.getElementById("sortFilter").addEventListener("change", filterExercises);

function filterExercises() {
  const selected = document.getElementById("sortFilter").value;
  let filtered = [];

  switch (selected) {
    case "name":
      filtered = [...exercises].sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "compound":
    case "isolation":
    case "isometric":
      filtered = exercises.filter(ex => ex.type.toLowerCase() === selected);
      break;

    case "arms":
    case "back":
    case "chest":
    case "core":
    case "full body":
    case "glutes":
    case "hamstrings":
    case "legs":
    case "shoulders":
      filtered = exercises.filter(ex => ex.bodyPart.toLowerCase() === selected);
      break;

    case "recommended":
      filtered = exercises.filter(ex => ex.recommendedByMe === true);
      break;

    default:
      filtered = [...exercises];
  }

  showCards(filtered);
}