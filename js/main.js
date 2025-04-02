// Get all animals that we can drag
let animalList = document.querySelectorAll('.animal');

// Get all drop zones on stage
let dropSlots = document.querySelectorAll('.drop-slot');

// Buttons for controls
let playBtn = document.querySelector('#play-btn');
let stopBtn = document.querySelector('#stop-btn');
let replayBtn = document.querySelector('#replay-btn');
let resetBtn = document.querySelector('#reset-btn');

// For showing and closing rules popup
let rulesBtn = document.querySelector('#rules-btn');
let rulesPopup = document.querySelector('#rules-popup');
let closePopup = document.querySelector('#close-popup');

// Temporary place to remember the one being dragged
let draggedAnimal;

// For storing the audios being played
let currentAudios = [];


function startDrag(event) {
  draggedAnimal = this;

  // Just to make it look nicer when dragging
  let dragImg = this.querySelector('img');
  let dragIcon = dragImg.cloneNode(); 
  dragIcon.width = 80;
  event.dataTransfer.setDragImage(dragIcon, 40, 40);

  console.log("Dragging animal:", draggedAnimal.id);
}

function allowDrop(event) {
  event.preventDefault(); // Required so we can drop
}

function dropAnimal(event) {
  event.preventDefault();

  // Only drop if the box is empty
  if (!this.hasChildNodes()) {
    let draggedId = draggedAnimal.id;
    let isDuplicate = false;

    // Check if that animal already got dropped somewhere
    dropSlots.forEach(slot => {
      let existing = slot.querySelector('.animal');
      if (existing && existing.id == draggedId) {
        isDuplicate = true;
      }
    });

    if (isDuplicate) {
      console.log("Already placed:", draggedId);
      return;
    }

    // Make a new animal with the same image and sound
    let newAnimal = document.createElement('div');
    newAnimal.classList.add('animal');
    newAnimal.id = draggedId;
    newAnimal.draggable = false;

    let clonedImg = draggedAnimal.querySelector('img').cloneNode();
    let clonedAudio = draggedAnimal.querySelector('audio').cloneNode();

    newAnimal.appendChild(clonedImg);
    newAnimal.appendChild(clonedAudio);
    this.appendChild(newAnimal);

    console.log("Dropped:", newAnimal.id);
  }
}

function playSounds() {
  stopSounds(); // Clear anything playing
  currentAudios = [];

  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let audio = animal.querySelector('audio');
      audio.play();
      currentAudios.push(audio); // Save to stop later

      console.log("Playing:", animal.id);

      // Add effect animation based on which animal
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

function stopSounds() {
  currentAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  currentAudios = [];

  // Remove the animation classes too
  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let anim = animal.getAttribute("data-anim-class");
      if (anim) animal.classList.remove(anim);
    }
  });

  console.log("Stopped everything.");
}

function replaySounds() {
  console.log("Replay clicked");
  stopSounds();
  playSounds();
}

function resetStage() {
  dropSlots.forEach(slot => {
    slot.innerHTML = ""; // Just clear everything
  });
  stopSounds();
  console.log("Stage reset.");
}


// Allow drag on animal
animalList.forEach(animal => {
  animal.addEventListener('dragstart', startDrag);
});

// Allow drop on each spot
dropSlots.forEach(slot => {
  slot.addEventListener('dragover', allowDrop);
  slot.addEventListener('drop', dropAnimal);
});

// Button clicks
playBtn.addEventListener('click', playSounds);
stopBtn.addEventListener('click', stopSounds);
replayBtn.addEventListener('click', replaySounds);
resetBtn.addEventListener('click', resetStage);

// Rules popup open / close
rulesBtn.onclick = function () {
  rulesPopup.style.display = "flex";
};

closePopup.onclick = function () {
  rulesPopup.style.display = "none";
};

// Show rules on page load (just so people know what to do)
rulesPopup.style.display = "flex";
