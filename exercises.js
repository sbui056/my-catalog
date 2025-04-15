// data is in the format
// {
//     name: "exerciseName",
//     bodyPart: "bodyPart" // Options: Arms, Back, Chest, Core, Full Body, Glutes, Hamstrings, Legs, Shoulders
//     type: "type" // Options: Compound, Isolation, Isometric
//     recommendedByMe: true/false,
//     cues: ["cue1", "cue2", "cue3"],
//     notes: "notes and tips for lift",
//     image: "images/exercises/exerciseName.png"
//   },

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
      recommendedByMe: false,
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
      recommendedByMe: false,
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
      recommendedByMe: true,
      cues: ["Control each rep", "Squeeze at contraction", "No bouncing"],
      notes: "Good accessory for hamstring hypertrophy.",
      image: "images/exercises/legCurlMachine.png"
    },
    {
        name: "Leg Extension Machine",
        bodyPart: "Legs",
        type: "Isolation",
        recommendedByMe: true,
        cues: ["Control each rep", "Squeeze at contraction", "No bouncing"],
        notes: "Good accessory for hamstring hypertrophy.",
        image: "images/exercises/legExtension.png"
      },
    {
      name: "Glute Ham Raise",
      bodyPart: "Hamstrings",
      type: "Compound",
      recommendedByMe: false,
      cues: ["Engage glutes", "Control descent", "Don't hyperextend"],
      notes: "Challenging but amazing for posterior chain strength.",
      image: "images/exercises/gluteHamRaise.png"
    },
    {
      name: "Stiff-Leg Deadlift",
      bodyPart: "Hamstrings",
      type: "Compound",
      recommendedByMe: false,
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
      recommendedByMe: false,
      cues: ["Squeeze shoulder blades", "Stay upright", "No jerking"],
      notes: "Great for controlled contractions and pump.",
      image: "images/exercises/seatedCableRow.png"
    },
    {
      name: "Deadlift",
      bodyPart: "Back",
      type: "Compound",
      recommendedByMe: true,
      cues: ["Lock in lats", "Push through floor", "Brace hard"],
      notes: "Full posterior chain builder — taxing but effective.",
      image: "images/exercises/deadlift.png"
    },
    {
      name: "Dumbbell Lateral Raise",
      bodyPart: "Shoulders",
      type: "Isolation",
      recommendedByMe: true,
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
      name: "Face Pulls",
      bodyPart: "Shoulders",
      type: "Isolation",
      recommendedByMe: false,
      cues: ["High elbow pull", "Pause at contraction", "Don’t shrug"],
      notes: "Essential for rear delt and shoulder health.",
      image: "images/exercises/facePulls.png"
    },
    {
      name: "Incline Dumbbell Press",
      bodyPart: "Chest",
      type: "Compound",
      recommendedByMe: false,
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
      image: "images/exercises/pauseBenchPress.jpg"
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
      image: "images/exercises/plank.jpg"
    },
    {
      name: "Sit-Ups",
      bodyPart: "Core",
      type: "Isolation",
      recommendedByMe: false,
      cues: ["Chin neutral", "Don’t yank neck", "Controlled reps"],
      notes: "Basic ab burner — I use it in circuits.",
      image: "images/exercises/situps.jpeg"
    },
    {
      name: "Sumo Deadlift",
      bodyPart: "Hamstrings",
      type: "Compound",
      recommendedByMe: true,
      cues: ["Wide stance", "Grip inside knees", "Push floor away"],
      notes: "Helps with hip strength — I alternate it with conventional.",
      image: "images/exercises/sumoDeadlift.png"
    },
    {
        name: "Hammer Curl",
        bodyPart: "Arms",
        type: "Isolation",
        recommendedByMe: false,
        cues: ["Keep elbows pinned", "Neutral grip", "Controlled curl"],
        notes: "Great for brachialis and thickness.",
        image: "images/exercises/hammerCurl.png"
      },
      {
        name: "Concentration Curl",
        bodyPart: "Arms",
        type: "Isolation",
        recommendedByMe: false,
        cues: ["Elbow against thigh", "Squeeze at top", "No swinging"],
        notes: "Perfect for building peak biceps.",
        image: "images/exercises/concentrationCurl.png"
      },
      {
        name: "EZ Bar Curl",
        bodyPart: "Arms",
        type: "Isolation",
        recommendedByMe: true,
        cues: ["Controlled up", "Squeeze peak", "Slow on the way down"],
        notes: "Joint-friendly and great for bicep mass.",
        image: "images/exercises/ezBarCurl.png"
      },
      {
        name: "Farmer's Carry",
        bodyPart: "Full Body",
        type: "Compound",
        recommendedByMe: false,
        cues: ["Tight grip", "Core braced", "Controlled steps"],
        notes: "Insane grip and trap builder.",
        image: "images/exercises/farmersCarry.jpg"
      },
      {
        name: "Zercher Squat",
        bodyPart: "Legs",
        type: "Compound",
        recommendedByMe: false,
        cues: ["Elbows under bar", "Core braced", "Keep chest up"],
        notes: "Unconventional squat — loads front and hits core hard.",
        image: "images/exercises/zercherSquat.jpg"
      },
      {
        name: "Donkey Kicks",
        bodyPart: "Glutes",
        type: "Isolation",
        recommendedByMe: false,
        cues: ["Squeeze at top", "Don't arch lower back", "Controlled reps"],
        notes: "Targeted glute finisher.",
        image: "images/exercises/donkeyKicks.jpg"
      },
      {
        name: "Hip Thrust",
        bodyPart: "Glutes",
        type: "Compound",
        recommendedByMe: false,
        cues: ["Chin tucked", "Lock out hips", "Glutes tight"],
        notes: "Top-tier glute builder.",
        image: "images/exercises/hipThrust.jpg"
      },
      {
        name: "Cable Lateral Raise",
        bodyPart: "Shoulders",
        type: "Isolation",
        recommendedByMe: true,
        cues: ["Single arm", "Constant tension", "Lead with elbow"],
        notes: "More consistent resistance than dumbbells.",
        image: "images/exercises/cableLateralRaise.png"
      },
      {
        name: "Incline Chest Press Machine",
        bodyPart: "Chest",
        type: "Compound",
        recommendedByMe: false,
        cues: ["Control tempo", "Press upward", "Full range"],
        notes: "Good for upper chest with minimal setup.",
        image: "images/exercises/inclineMachinePress.jpg"
      },
      {
        name: "Russian Twists",
        bodyPart: "Core",
        type: "Isolation",
        recommendedByMe: false,
        cues: ["Twist fully", "Engage obliques", "Stay balanced"],
        notes: "Great rotational core move.",
        image: "images/exercises/russianTwists.jpg"
      }      
];

export default exercises;