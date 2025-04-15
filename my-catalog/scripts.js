const exercises = [
  {
    name: "Barbell Back Squat",
    bodyPart: "Legs",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Drive through heels", "Push knees out", "Brace core"],
    notes: "My staple leg day movement — focus on depth and bracing.",
    image: "images/exercises/squat.png"
  },
  {
    name: "Leg Press",
    bodyPart: "Legs",
    type: "Compound",
    recommendedByMe: false,
    cues: ["Push through midfoot", "Don't lock knees", "Full range"],
    notes: "Great machine for piling on volume.",
    image: "images/exercises/legPress.png"
  },
  {
    name: "Walking Lunges",
    bodyPart: "Legs",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Long stride", "Upright torso", "Knee over ankle"],
    notes: "Torches legs and core — real challenge for balance too.",
    image: "images/exercises/walkingLunges.png"
  },
  {
    name: "Front Squat",
    bodyPart: "Legs",
    type: "Compound",
    recommendedByMe: false,
    cues: ["Elbows high", "Stay upright", "Core tight"],
    notes: "Targets quads more directly, but harder to brace.",
    image: "images/exercises/frontSquat.png"
  },
  {
    name: "Bulgarian Split Squat",
    bodyPart: "Legs",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Foot placement matters", "Knee in line", "Explode up"],
    notes: "Killer for unilateral leg development.",
    image: "images/exercises/bulgarianSplitSquat.png"
  },
  {
    name: "Romanian Deadlift",
    bodyPart: "Hamstrings",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Hips back", "Keep bar close", "Squeeze glutes at top"],
    notes: "I use this to target hamstrings — great for mind-muscle connection.",
    image: "images/exercises/romanianDeadlift.png"
  },
  {
    name: "Leg Curl Machine",
    bodyPart: "Hamstrings",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Control each rep", "Squeeze at contraction", "No bouncing"],
    notes: "Good accessory for hamstring hypertrophy.",
    image: "images/exercises/legCurlMachine.png"
  },
  {
    name: "Glute Ham Raise",
    bodyPart: "Hamstrings",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Engage glutes", "Control descent", "Don't hyperextend"],
    notes: "Challenging but amazing for posterior chain strength.",
    image: "images/exercises/gluteHamRaise.png"
  },
  {
    name: "Stiff-Leg Deadlift",
    bodyPart: "Hamstrings",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Minimal knee bend", "Stretch the hamstrings", "Controlled tempo"],
    notes: "Deep stretch and solid hypertrophy movement.",
    image: "images/exercises/stiffLegDeadlift.png"
  },
  {
    name: "Cable Pull-Through",
    bodyPart: "Hamstrings",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Hips back", "Squeeze glutes", "Don't overextend"],
    notes: "More glute-dominant but still hits hammies well.",
    image: "images/exercises/cablePullThrough.png"
  },
  {
    name: "Lat Pulldown",
    bodyPart: "Back",
    type: "Isolation",
    recommendedByMe: true,
    cues: ["Elbows down", "Keep chest tall", "No momentum"],
    notes: "Awesome for lat activation and warm-up.",
    image: "images/exercises/latPulldown.png"
  },
  {
    name: "Barbell Row",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Flat back", "Pull to waist", "Elbows close"],
    notes: "Staple for upper and mid-back thickness.",
    image: "images/exercises/barbellRow.png"
  },
  {
    name: "Seated Cable Row",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Squeeze shoulder blades", "Stay upright", "No jerking"],
    notes: "Great for controlled contractions and pump.",
    image: "images/exercises/seatedCableRow.png"
  },
  {
    name: "Deadlift",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: false,
    cues: ["Lock in lats", "Push through floor", "Brace hard"],
    notes: "Full posterior chain builder — taxing but effective.",
    image: "images/exercises/deadlift.png"
  },
  {
    name: "Chest-Supported Row",
    bodyPart: "Back",
    type: "Isolation",
    recommendedByMe: true,
    cues: ["Elbows tight", "Pause at peak", "Keep chest down"],
    notes: "Reduces lower back stress — pure upper back work.",
    image: "images/exercises/chestSupportedRow.png"
  },
  {
    name: "Dumbbell Lateral Raise",
    bodyPart: "Shoulders",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Lead with elbows", "Don't swing", "Go light for control"],
    notes: "I sometimes use these for burnout sets.",
    image: "images/exercises/lateralRaise.png"
  },
  {
    name: "Overhead Press",
    bodyPart: "Shoulders",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Tight core", "Bar path straight", "Don't flare elbows"],
    notes: "Full shoulder engagement and core stability.",
    image: "images/exercises/overheadPress.png"
  },
  {
    name: "Arnold Press",
    bodyPart: "Shoulders",
    type: "Compound",
    recommendedByMe: false,
    cues: ["Rotate smoothly", "Keep constant tension", "Don't rush"],
    notes: "Adds a bit more front delt emphasis.",
    image: "images/exercises/arnoldPress.png"
  },
  {
    name: "Face Pulls",
    bodyPart: "Shoulders",
    type: "Isolation",
    recommendedByMe: true,
    cues: ["High elbow pull", "Pause at contraction", "Don’t shrug"],
    notes: "Essential for rear delt and shoulder health.",
    image: "images/exercises/facePulls.png"
  },
  {
    name: "Dumbbell Front Raise",
    bodyPart: "Shoulders",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Straight arms", "No momentum", "Raise to eye level"],
    notes: "Only if I need front delt focus.",
    image: "images/exercises/frontRaise.png"
  },
  {
    name: "Incline Dumbbell Press",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Elbows 45°", "Squeeze at the top", "Control the eccentric"],
    notes: "My go-to for upper chest days.",
    image: "images/exercises/inclineDumbbellPress.png"
  },
  {
    name: "Flat Barbell Bench Press",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Tuck elbows", "Brace hard", "Explode off chest"],
    notes: "Classic push day essential.",
    image: "images/exercises/benchPress.png"
  },
  {
    name: "Cable Chest Fly",
    bodyPart: "Chest",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Wide arc", "Slight bend in elbows", "Squeeze in middle"],
    notes: "Great for chest contractions.",
    image: "images/exercises/cableChestFly.png"
  },
  {
    name: "Push-Up",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Flat body", "Elbows 45°", "Full range"],
    notes: "Tried and true — convenient and effective.",
    image: "images/exercises/pushUp.png"
  },
  {
    name: "Machine Chest Press",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: false,
    cues: ["Adjust seat height", "Controlled reps", "Don’t lock out"],
    notes: "Good for isolating without stabilizer fatigue.",
    image: "images/exercises/machineChestPress.png"
  },
  {
    name: "Ring Dips",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Control the descent", "Elbows back", "Stay tight"],
    notes: "Tough progression — major chest and triceps engagement.",
    image: "images/exercises/ringDips.png"
  },
  {
    name: "Good Mornings",
    bodyPart: "Hamstrings",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Soft knees", "Hips back", "Keep spine neutral"],
    notes: "Perfect for hamstring and glute activation on lighter days.",
    image: "images/exercises/goodMornings.png"
  },
  {
    name: "Inverted Rows",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Core tight", "Elbows back", "Chest to bar"],
    notes: "Awesome bodyweight back movement — underrated.",
    image: "images/exercises/invertedRows.png"
  },
  {
    name: "T-Bar Row",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Drive through elbows", "Neutral spine", "Control the eccentric"],
    notes: "Great for loading up and hitting mid-back.",
    image: "images/exercises/tbarRow.png"
  },
  {
    name: "Pause Bench Press",
    bodyPart: "Chest",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Pause on chest", "Tight brace", "Explode up"],
    notes: "Strengthens sticking points — use for progression.",
    image: "images/exercises/pauseBenchPress.png"
  },
  {
    name: "Tricep Extensions",
    bodyPart: "Arms",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Lock elbows", "Stretch at bottom", "Squeeze at top"],
    notes: "Solid triceps finisher with cables or dumbbells.",
    image: "images/exercises/tricepExtensions.png"
  },
  {
    name: "Skull Crushers",
    bodyPart: "Arms",
    type: "Isolation",
    recommendedByMe: true,
    cues: ["Lower to forehead", "No flaring elbows", "Smooth tempo"],
    notes: "One of my favorite arm builders — go moderate weight.",
    image: "images/exercises/skullCrushers.png"
  },
  {
    name: "Weighted Pull-Ups",
    bodyPart: "Back",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Controlled motion", "Chin over bar", "Full hang at bottom"],
    notes: "Great strength progression over bodyweight pull-ups.",
    image: "images/exercises/weightedPullups.png"
  },
  {
    name: "Plank",
    bodyPart: "Core",
    type: "Isometric",
    recommendedByMe: true,
    cues: ["Flat back", "Engage glutes", "Don’t let hips sag"],
    notes: "Simple but effective core stabilizer.",
    image: "images/exercises/plank.png"
  },
  {
    name: "Sit-Ups",
    bodyPart: "Core",
    type: "Isolation",
    recommendedByMe: false,
    cues: ["Chin neutral", "Don’t yank neck", "Controlled reps"],
    notes: "Basic ab burner — I use it in circuits.",
    image: "images/exercises/situps.png"
  },
  {
    name: "Sumo Deadlift",
    bodyPart: "Hamstrings",
    type: "Compound",
    recommendedByMe: true,
    cues: ["Wide stance", "Grip inside knees", "Push floor away"],
    notes: "Helps with hip strength — I alternate it with conventional.",
    image: "images/exercises/sumoDeadlift.png"
  }

];

const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    bpm: 170,
    mood: "hype",
    genre: "pop",
    img: "images/blinding_lights.jpg",
    spotify: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
  },
  {
    title: "Weightless",
    artist: "Marconi Union",
    bpm: 60,
    mood: "chill",
    genre: "ambient",
    img: "images/weightless.jpg",
    spotify: "https://open.spotify.com/track/xyz456"
  },
  {
    title: "Dreamland",
    artist: "Glass Animals",
    bpm: 95,
    mood: "focus",
    genre: "indie",
    img: "images/dreamland.jpg",
    spotify: "https://open.spotify.com/track/abc789"
  },
  {
    title: "Losing It",
    artist: "FISHER",
    bpm: 125,
    mood: "hype",
    genre: "edm",
    img: "images/losing_it.jpg",
    spotify: "https://open.spotify.com/track/ghi123"
  },
  {
    title: "Coffee",
    artist: "Beabadoobee",
    bpm: 78,
    mood: "focus",
    genre: "lofi",
    img: "images/coffee.jpg",
    spotify: "https://open.spotify.com/track/jkl456"
  }
];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < exercises.length; i++) {
    let exercise = exercises[i];
    let imageURL = exercise.image;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, exercise.name, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
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
