# Dev Notes – Farm Symphony

## Project Overview

- **Farm Symphony** is an interactive music mixer where users can drag and drop farm animals onto a farm scene to create sound compositions.  
- The project integrates **JavaScript** for interactivity, **CSS** for styling, and **audio playback** for an engaging user experience.  
- The goal is to create an immersive and fun interaction where users can explore how different animal sounds combine to form unique music.

---

## Completed Work

- Set up a **GitHub repository** with organized branches and proper commit history  
- Built and styled the **HTML/CSS layout**, including semantic structure and responsive container  
- Designed and implemented key **UI elements** like the farm background, wooden toolbar, animal slots, and control panel  
- Added **drag and drop functionality** using JavaScript with `dragstart`, `dragover`, and `drop` events  
- Connected **SVG animal images** to corresponding embedded `<audio>` tags for sound playback  
- Created reusable **JavaScript functions** to handle Play, Stop, Replay, and Reset actions  
- Prevented duplicate animals from being dropped using conditional logic and **feedback animation (shake)**  
- Applied **CSS hover effects** and **animations** for interactivity and visual polish  
- Structured the project with clear folder separation for HTML, CSS, JS, images, audio, and documentation  


---

## Research and Implementation

### Drag and Drop Implementation

- Allows users to move animals dynamically onto the farm scene  
- Uses JavaScript events such as `dragstart`, `dragover`, and `drop` via `addEventListener()`  
- Ensures that animals can only be dropped into empty target zones using `!this.hasChildNodes()`  
- Prevents duplicate animals by comparing `id` values across all drop zones  
- Includes shake animation as feedback for invalid drops  
- References: MDN Web Docs and W3Schools Drag and Drop Guide

### JavaScript Audio Playback

- Uses embedded `<audio>` tags in each animal element to trigger playback  
- Each animal plays a unique sound when dropped onto the farm scene  
- Prevents overlapping sounds by calling `stopSounds()` before `playSounds()`  
- Playback remains clean and consistent to ensure a smooth user experience  

### Control Button Functionality

- Provides Play, Stop, Replay, and Reset buttons to manage user interaction with the audio  
- Each button is connected to a specific JavaScript function via `addEventListener('click', ...)`  
- Replay function is implemented by calling both `stopSounds()` and `playSounds()` in sequence  
- Reset button clears all drop zones and resets audio states

### Rules Popup Implementation

- Displays an instructional popup on page load and when the Rules button is clicked  
- Toggle logic is handled via simple `style.display` manipulation (`"flex"` and `"none"`)  
- Enhances usability by helping users understand how to interact with the application

### User Feedback and Animations

- Hover effects added to animals and buttons for better interactivity  
- Shake animation applied when invalid drops are detected (duplicate animal)  
- All animations are handled using CSS `@keyframes` and toggled with JavaScript via `classList.add()` and `setTimeout()`

---

## UI and Design Considerations

- Designed a **farm-themed UI** using wooden textures and natural backgrounds  
- Implemented **hover effects** where animals and buttons scale up slightly on interaction  
- Applied **basic transform effects** to buttons for visual feedback on hover (no advanced animation)  
- Maintained clear **color contrast and spacing** to support readability and accessibility  
- Used a palette of **earth tones** (browns, greens, yellows) to reflect a cohesive farm aesthetic  

---

## Explanation of Materials

### Audio Files

- Six unique animal sounds, each assigned to a specific animal element  
- Stored in the `/audio/` folder for organized access and clean structure  
- Embedded directly in the HTML using `<audio>` tags for playback control via JavaScript  

### SVG Images

- SVG files used for farm animals, toolbar icons, and UI components  
- Stored in the `/images/` folder  
- Embedded using `<img>` tags for compatibility and ease of styling  
- Chosen for their scalability and small file size, ideal for responsive design  

### CSS and JavaScript Files

- **CSS** handles page layout, basic hover effects, transitions, and responsive alignment  
- **JavaScript** manages drag-and-drop interactivity, sound control, button functionality, and visual feedback logic  

### Documentation and Research Files

- `dev-notes.md`: Technical explanation, sprint plan, and reflection  
- `research.md`: External references and documentation on APIs used  
- `visuals.md`: Visual inspiration, sketches, or layout references  


---

## Sprint Plan and Timeline

### Sprint 1 (Week 3–4)

- Set up GitHub repository and establish basic branch workflow  
- Create initial HTML structure with semantic elements  
- Build base CSS layout including farm background, toolbar, and placeholders  
- Research JavaScript Drag and Drop using MDN and W3Schools  

### Sprint 2 (Week 5–6)

- Implement Drag and Drop functionality using JavaScript event listeners  
- Embed audio elements directly into animal components  
- Link each animal to a specific sound file using `<audio>` tags  
- Add basic hover effects and feedback logic for invalid drops  

### Sprint 3 (Week 7–8)

- Finalize button functionality (Play, Stop, Replay, Reset)  
- Polish visual design: hover states, spacing, and color consistency  
- Test drag-and-drop behavior and audio playback on different browsers  
- Complete Dev Notes, folder organization, and prepare for submission  

---

## Challenges and Solutions

### Learning Drag and Drop

- Initially found it confusing to manage multiple drag-related events (`dragstart`, `dragover`, `drop`)  
- Broke the feature into smaller steps: first enabling drag, then allowing drops, then adding the logic for placement  
- Used `console.log()` frequently to trace the dragged element and debug drop behavior  

### Managing Multiple Sound Effects

- Without control, multiple audio clips overlapped and caused noise  
- Solved the issue by writing a `stopSounds()` function that pauses and resets all playing audio before `playSounds()` is triggered  
- Maintained a `currentAudios[]` array to track and stop active sound clips programmatically  

### Ensuring Responsive UI

- Initially layout elements were not aligned properly across screen sizes  
- Used CSS `flexbox` and relative units (%, rem) to ensure better scaling  
- Manually tested on different devices and screen sizes using browser DevTools  

### Preventing Duplicate Animal Placement

- Users could accidentally place the same animal in multiple slots  
- Wrote logic to check all existing drop zones using a `forEach()` loop before allowing a new drop  
- Added shake animation for visual feedback when duplicates are blocked  


---

## What I Learned

- Improved understanding of JavaScript event handling, especially `dragstart`, `drop`, and `click`  
- Learned how to structure JavaScript functions to avoid repetition (e.g., `stopSounds()` used across multiple controls)  
- Practiced using `querySelector`, `createElement`, `cloneNode`, and DOM manipulation effectively  
- Strengthened ability to debug using `console.log()` and Chrome DevTools  
- Learned how to organize code and assets across folders in a professional project structure  
