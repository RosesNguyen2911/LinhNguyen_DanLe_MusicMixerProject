# Dev Notes – Farm Symphony

## Project Overview

- **Farm Symphony** is an interactive music mixer where users can drag and drop farm animals onto a farm scene to create sound compositions.  
- The project integrates **JavaScript** for interactivity, **CSS** for styling, and **audio playback** for an engaging user experience.  
- The goal is to create an immersive and fun interaction where users can explore how different animal sounds combine to form unique music.

---

## Completed Work

- Set up **GitHub repository** with structured branches  
- Created and committed **initial HTML and CSS layout**  
- Implemented **UI elements** including farm background, wooden toolbar, and control panel  
- Researched **JavaScript Drag and Drop API** for handling interactive movements  
- Researched **JavaScript Audio API** for integrating sound effects  
- Organized **project folder structure** with separate directories for CSS, JavaScript, images, audio, and documentation  
- Added **initial animations** for buttons and hover effects for interactive elements  

---

## Research and Implementation

### Drag and Drop Implementation

- Allows users to move animals dynamically onto the farm scene  
- Uses JavaScript events such as `ondragstart`, `ondragover`, and `ondrop`  
- Ensures that dragged elements only drop in designated areas  
- Explored performance optimizations to avoid lag  
- References: MDN Docs and W3Schools Drag and Drop Guide

### JavaScript Audio Playback

- Uses the `Audio()` API to play, pause, and stop animal sounds  
- Assigns specific audio clips to each animal when placed on the farm scene  
- Prevents overlapping sounds to avoid unwanted noise  
- Explored fade-in effects and volume control for smoother playback  

---

## UI and Design Considerations

- Designed a **farm-themed UI** with wooden textures  
- Implemented **hover effects** where animals scale up slightly when hovered  
- Developed **button animations** for Play, Stop, and Replay actions  
- Ensured **color contrast and spacing** for an accessible interface  
- Used **earth tones** like brown, green, and yellow to maintain a cohesive farm aesthetic  

---

## Explanation of Materials

### Audio Files

- Six unique sound effects assigned to each animal  
- Stored in the `/audio/` folder for easy reference  

### SVG Images

- Custom-made icons for farm animals, toolbar, and UI elements  
- Optimized for scalability and performance  

### CSS and JavaScript Files

- **CSS** handles layout, animations, hover effects, and UI responsiveness  
- **JavaScript** controls drag and drop events, sound playback, and button interactions  

### Documentation and Research Files

- Includes `dev-notes.md`, `research.md`, and `visuals.md` to track progress and inspirations  

---

## Sprint Plan and Timeline

### Sprint 1 (Week 3–4)

- Set up GitHub repository and branch workflow  
- Create initial HTML structure with semantic tags  
- Develop base CSS styles for layout and UI components  
- Research JavaScript Drag and Drop API  

### Sprint 2 (Week 5–6)

- Implement Drag and Drop functionality  
- Integrate JavaScript Audio API  
- Refine animations and hover effects  
- Fix usability issues  

### Sprint 3 (Week 7–8)

- Finalize UI animations and responsiveness  
- Implement logic for controlling multiple sound effects  
- Test and debug across different devices  
- Complete project documentation and prepare for submission  

---

## Next Steps

- Refine Drag and Drop mechanics  
- Optimize sound playback  
- Improve UI transitions and animations  
- Conduct usability testing  
- Complete final documentation and submit to FOL  

---

## Challenges and Solutions

### Learning Drag and Drop

- Broke the feature into smaller parts and tested incrementally  

### Managing Multiple Sound Effects

- Prevented audio overlap using simple playback logic  

### Ensuring Responsive UI

- Adjusted layout and tested on different screen sizes  

---
