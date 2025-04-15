// Import the exercise data
import exercises from "./exercises.js";

/* ========== CARD DISPLAY ========== */

function showCards(exerciseList = exercises) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < exerciseList.length; i++) {
    const exercise = exerciseList[i];
    const nextCard = templateCard.cloneNode(true);
    
    editCardContent(
      nextCard,
      exercise.name,
      exercise.image,
      exercise.cues,
      exercise.bodyPart,
      exercise.type,
      exercise.recommendedByMe
    );

    nextCard.addEventListener("click", () => {
      addToWorkout(exercise.name);
      removeCardWithAnimation(nextCard);
    });

    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, name, imageURL, cues, bodyPart, type, recommended) {
  card.style.display = "block";
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = name;

  // Tag section
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
  cardImage.src = imageURL;
  cardImage.alt = `${name} Image`;

  const ul = card.querySelector("ul");
  ul.innerHTML = "";
  cues.forEach(cue => {
    const li = document.createElement("li");
    li.textContent = cue;
    ul.appendChild(li);
  });
}

function removeCardWithAnimation(card) {
  card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  card.style.opacity = "0";
  card.style.transform = "scale(0.95)";
  setTimeout(() => card.remove(), 400);
}

/* ========== WORKOUT SELECTION ========== */

function addToWorkout(exerciseName) {
  const list = document.getElementById("selected-list");
  const items = list.querySelectorAll("li");

  // Prevent duplicates
  for (const item of items) {
    if (item.textContent === exerciseName) return;
  }

  // Find the full exercise object
  const exercise = exercises.find(ex => ex.name === exerciseName);
  if (!exercise) return;

  const li = document.createElement("li");
  li.dataset.name = exerciseName; // so we can track it for duplicates
  li.innerHTML = `<strong>${exercise.name}</strong> <span class="tag body-tag">${exercise.bodyPart}</span>`;
  list.appendChild(li);
}

function removeLastCard() {
  exercises.shift();
  showCards();
}

/* ========== FORM: ADD EXERCISE ========== */

function addExercise(event) {
  event.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const bodyPart = document.getElementById("newBody").value.trim();
  const type = document.getElementById("newType").value.trim().toLowerCase();
  const image = document.getElementById("newImage").value.trim();

  if (!name || !bodyPart || !type) {
    alert("Please fill in all required fields.");
    return;
  }

  const newExercise = {
    name,
    bodyPart,
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

/* ========== SEARCH BAR ========== */

function searchExercises() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const searchTerms = input.split(" ").filter(term => term.trim() !== "");

  const resultMessage = document.getElementById("search-result");
  const filtered = exercises.filter(ex =>
    searchTerms.every(term =>
      ex.name.toLowerCase().includes(term)
    )
  );

  resultMessage.textContent = filtered.length === 0
    ? "No exercises match your search."
    : "";

  showCards(filtered);
}

/* ========== FILTER / SORT DROPDOWN ========== */

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

/* ========== INITIAL SETUP ========== */

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  document.getElementById("removeExercise").addEventListener("click", removeLastCard);

  document.getElementById("searchBar").addEventListener("input", searchExercises);

  const form = document.getElementById("addExerciseForm");
  if (form) form.addEventListener("submit", addExercise);

  document.getElementById("sortFilter").addEventListener("change", filterExercises);
});
