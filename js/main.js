// STEP 1 - VARIABLES
let animalList = document.querySelectorAll('.animal');
let dropSlots = document.querySelectorAll('.drop-slot');
let playBtn = document.querySelector('#play-btn');
let stopBtn = document.querySelector('#stop-btn');
let replayBtn = document.querySelector('#replay-btn');
let resetBtn = document.querySelector('#reset-btn');
let rulesBtn = document.querySelector('#rules-btn');
let rulesPopup = document.querySelector('#rules-popup');
let closePopup = document.querySelector('#close-popup');

let draggedAnimal; // The animal currently being dragged
let currentAudios = []; // Store currently playing audio clips

// STEP 2 - FUNCTIONALITY
function startDrag(event) {
  draggedAnimal = this;

  let dragImg = this.querySelector('img');
  let dragIcon = dragImg.cloneNode(true);
  dragIcon.width = 80;
  event.dataTransfer.setDragImage(dragIcon, 40, 40);
}

function allowDrop(event) {
  event.preventDefault();
}

function dropAnimal(event) {
  event.preventDefault();

  if (!this.hasChildNodes()) {
    let draggedId = draggedAnimal.id;
    let isDuplicate = false;

    // Check if animal already placed
    dropSlots.forEach(slot => {
      let existing = slot.querySelector('.animal');
      if (existing && existing.id == draggedId) {
        isDuplicate = true;
      }
    });

    if (isDuplicate) return;

    // Clone animal and audio
    let newAnimal = document.createElement('div');
    newAnimal.classList.add('animal');
    newAnimal.id = draggedId;
    newAnimal.draggable = false;

    let clonedImg = draggedAnimal.querySelector('img').cloneNode(true);
    let clonedAudio = draggedAnimal.querySelector('audio').cloneNode(true);

    newAnimal.appendChild(clonedImg);
    newAnimal.appendChild(clonedAudio);
    this.appendChild(newAnimal);
  }
}

function playSounds() {
  stopSounds(); // Stop before playing
  currentAudios = [];

  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let audio = animal.querySelector('audio');
      audio.play();
      currentAudios.push(audio);

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

  dropSlots.forEach(slot => {
    let animal = slot.querySelector('.animal');
    if (animal) {
      let anim = animal.getAttribute("data-anim-class");
      if (anim) animal.classList.remove(anim);
    }
  });
}

function replaySounds() {
  stopSounds();
  playSounds();
}

function resetStage() {
  dropSlots.forEach(slot => {
    slot.innerHTML = "";
  });
  stopSounds();
}

// STEP 3 - EVENT LISTENERS
animalList.forEach(animal => animal.addEventListener('dragstart', startDrag));
dropSlots.forEach(slot => {
  slot.addEventListener('dragover', allowDrop);
  slot.addEventListener('drop', dropAnimal);
});

playBtn.addEventListener('click', playSounds);
stopBtn.addEventListener('click', stopSounds);
replayBtn.addEventListener('click', replaySounds);
resetBtn.addEventListener('click', resetStage);

rulesBtn.onclick = function () {
  rulesPopup.style.display = "flex";
};
closePopup.onclick = function () {
  rulesPopup.style.display = "none";
};
rulesPopup.style.display = "flex"; // Show on page load
