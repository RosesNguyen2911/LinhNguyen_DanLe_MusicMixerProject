// STEP 1 - VARIABLES

// Select all draggable animal elements
let animalList = document.querySelectorAll('.animal');

// Select the drop zones on the stage
let dropSlots = document.querySelectorAll('.drop-slot');

// Select control buttons
let playBtn = document.querySelector('#play-btn');
let stopBtn = document.querySelector('#stop-btn');
let replayBtn = document.querySelector('#replay-btn');
let resetBtn = document.querySelector('#reset-btn');

// Select rules popup and buttons
let rulesBtn = document.querySelector('#rules-btn');
let rulesPopup = document.querySelector('#rules-popup');
let closePopup = document.querySelector('#close-popup');

// Store the currently dragged animal
let draggedAnimal;

// Store the audios that are currently playing
let currentAudios = [];


// STEP 2 - FUNCTIONALITY

// When user starts dragging an animal
function startDrag(event) {
  draggedAnimal = this;

  // Optional: show a drag preview image
  let dragImg = this.querySelector('img');
  let dragIcon = dragImg.cloneNode(); // clone the image
  dragIcon.width = 80;
  event.dataTransfer.setDragImage(dragIcon, 40, 40);

  console.log("Dragging:", draggedAnimal.id);
}

// Allow the animal to be dropped
function allowDrop(event) {
  event.preventDefault(); // necessary to allow drop
}

// When an animal is dropped
function dropAnimal(event) {
  event.preventDefault();

  // Only drop if the slot is empty
  if (!this.hasChildNodes()) {
    let draggedId = draggedAnimal.id;
    let isDuplicate = false;

    // Check if this animal has already been placed
    dropSlots.forEach(slot => {
      let existing = slot.querySelector('.animal');
      if (existing && existing.id == draggedId) {
        isDuplicate = true;
      }
    });

    if (isDuplicate) {
      console.log("This animal is already on stage:", draggedId);
      return;
    }

    // Create a new animal element (clone of original)
    let newAnimal = document.createElement('div');
    newAnimal.classList.add('animal');
    newAnimal.id = draggedId;
    newAnimal.draggable = false;

    // Clone the image and audio
    let clonedImg = draggedAnimal.querySelector('img').cloneNode();
    let clonedAudio = draggedAnimal.querySelector('audio').cloneNode();

    // Add to new animal box
    newAnimal.appendChild(clonedImg);
    newAnimal.appendChild(clonedAudio);
    this.appendChild(newAnimal);

    console.log("Animal dropped:", newAnimal.id);
  }
}

// Play all sounds when Play button is clicked
function playSounds() {
  stopSounds(); // Stop all first
  currentAudios = [];

  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let audio = animal.querySelector('audio');
      audio.play(); // play the animal's sound
      currentAudios.push(audio); // save it so we can stop it later
      console.log("Playing:", animal.id);

      // Add animation class based on animal type
      let animClass = "";
      if (animal.id == "chicken") animClass = "animate-chicken";
      else if (animal.id == "cow") animClass = "animate-cow";
      else if (animal.id == "pig") animClass = "animate-pig";
      else if (animal.id == "sheep") animClass = "animate-sheep";
      else if (animal.id == "horse") animClass = "animate-horse";
      else if (animal.id == "duck") animClass = "animate-duck";

      animal.classList.add(animClass);
      animal.setAttribute("data-anim-class", animClass);
    }
  });
}

// Stop all sounds when Stop button is clicked
function stopSounds() {
  // Stop each audio and reset time
  currentAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  currentAudios = [];

  // Remove animations
  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let anim = animal.getAttribute("data-anim-class");
      if (anim) animal.classList.remove(anim);
    }
  });

  console.log("All sounds stopped.");
}

// Replay current arrangement of animals
function replaySounds() {
  console.log("Replaying current animal sounds...");
  stopSounds();
  playSounds();
}

// Reset everything on the stage
function resetStage() {
  dropSlots.forEach(slot => {
    slot.innerHTML = ""; // remove all animals
  });
  stopSounds();
  console.log("Stage has been reset.");
}


// STEP 3 - EVENT LISTENERS

// Allow dragging animals
animalList.forEach(animal => {
  animal.addEventListener('dragstart', startDrag);
});

// Allow drop on each slot
dropSlots.forEach(slot => {
  slot.addEventListener('dragover', allowDrop);
  slot.addEventListener('drop', dropAnimal);
});

// Control button events
playBtn.addEventListener('click', playSounds);
stopBtn.addEventListener('click', stopSounds);
replayBtn.addEventListener('click', replaySounds);
resetBtn.addEventListener('click', resetStage);

// Rules popup
rulesBtn.onclick = function () {
  rulesPopup.style.display = "flex";
};

closePopup.onclick = function () {
  rulesPopup.style.display = "none";
};

// Show rules when page loads
rulesPopup.style.display = "flex";
