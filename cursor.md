Here is a comprehensive Cursor prompt plan for developing the game **"Don’t Touch the Purple"** (DTTP), using the provided images and design document as a precise visual and functional reference. This plan is designed to be provided in structured, actionable stages for a code-generation AI like Cursor or an AI-assisted development environment.

### **Introduction & Core Concept for the AI**

> "You are building a Hyper-Casual, Reaction-based Arcade game titled 'Don't Touch the Purple'. The game is a fast-paced, high-pressure challenge where players must click colored buttons within a 30-second time limit, avoiding specific 'dangerous' colors and the default 'empty' state. The game must be a full-stack, responsive website supporting both desktop (mouse) and mobile (touch) play with automatic layout adjustments."

---

### **Prompt Plan Stages**

I have structured the plan into six stages to manage complexity and ensure high-quality output.

---

### **Stage 1: Foundation & Layout (CSS Grid and Responsiveness)**

> **Prompt A (Initial Project Setup):** "Create the initial project structure for a game titled 'Don't Touch the Purple' using HTML5 Canvas or React (with Tailwind CSS). Define the core game canvas dimensions. Implement a flexible grid layout for the 8 game buttons that is fully responsive based on screen orientation:
>
> 1.  **Landscape (Desktop/Tablet):** Arrange the 8 buttons in a 2 rows x 4 columns grid, following the specific desktop mockup reference.
> 2.  **Portrait (Mobile):** Arrange the 8 buttons in a 4 rows x 2 columns grid, optimizing the interaction area for two-thumb play, as shown in the mobile mockup reference.
>
> The base background for the game must be a very dark slate (#1A1A1A)."

> **Prompt B (Base HUD & Elements):** "Add the basic, non-interactive visual components to the game canvas. Reference the mockups for positioning and styling. Add a translucent Top HUD panel with placeholder displays for:
>
> 1.  **Score:** e.g., 'SCORE: 120'. Use large neon blue text.
> 2.  **Timer:** e.g., 'TIMER BAR'. Create a horizontal bar that can visually shrink.
>
> In the desktop (landscape) view, add placeholder panels to the left ('ACTIVE SKILLS') and right ('SCROLL BOARD/LEADERBOARD'). In mobile (portrait) view, add a single placeholder 'HIGH SCORES' ticker to the very bottom. All panels must have a translucent background and match the overall 'Neon Cyberpunk' aesthetic."

---

### **Stage 2: Styling and Assets (Neon Cyberpunk)**

> **Prompt A (Button Styling and States):** "Implement the specific styling for the 8 game buttons. They must have rounded corners and a bevelled effect, as seen in the references. Define the color states for a button using the specific neon hex codes:
>
> - **Default (Normal) State:** A clean medium gray slate (#4A4A4A).
> - **Active (Target) State:** The button must glow with a powerful aura when active, using one of these colors: Neon Orange (#FF6B00), Neon Green (#39FF14), Neon Yellow (#FFF01F), or Neon Sky Blue (#08F7FE).
> - **Danger (Purple) State:** The button must glow intensely in Neon Purple (#BF00FF).
> - **Pressed State:** Define a visual feedback for a pressed button (e.g., slight inward scale and dimmer light).
>
> Integrate the geometric sans-serif font (like Orbitron) globally for all text elements to maintain the futuristic look."

---

### **Stage 3: Core Game Logic and State Management (Gameplay)**

> **Prompt A (Game State & Time Limit):** "Define and implement the core game state management system. Create variables for game state (e.g., 'menu', 'playing', 'gameover'), player score (e.g., starting at 0), and the 30-second countdown timer. Implement the 30-second countdown logic. Make the visual 'Timer Bar' shrink from right to left in real-time, changing from green to yellow to red as the time runs out. When the timer hits zero, transition the game state to 'gameover'."

> **Prompt B (Randomized Spawning Logic):** "Implement the logic for cycling button colors. The system must randomly activate 1-3 buttons simultaneously out of the 8 grid positions for a short duration. Introduce a weighted probability for the target colors (Orange, Green, Yellow, Blue) and the danger color (Purple). Define a pattern logic to generate symmetric spawn patterns (e.g., a Red button spawns in a position and another Red button spawns symmetrically across the grid). The game must maintain a balance of target and danger colors, ensuring they don't block each other too frequently."

---

### **Stage 4: Interactive Gameplay & Scoring**

> **Prompt A (Click/Touch Interaction & Scoring Rules):** "Implement input handlers for the 8 game buttons (mouse click for desktop and touchstart for mobile). Link the visual state (color) of a button to the scoring logic when it is tapped/clicked:
>
> 1.  **Correct (Target Color):** Add `+1` Point to the player score.
> 2.  **Purple (Danger Color):** Subtract `-3` Points from the player score.
> 3.  **Default (Gray Color):** Do nothing — clicking a gray button has no effect on the score.
>
> Score pop-ups must appear near the clicked button: a green floating `+1` for correct, a red floating `-3` for purple. No pop-up for default (gray) button clicks."

> **Prompt B (Visual Feedback & Special Effects):** "Add satisfiesing visual feedback to gameplay events. On a successful (target color) click, add a subtle visual 'ding' or ripple. When a Purple button is tapped, trigger a brief full-screen flash of neon purple, accompanied by a quick screen shake effect to emphasize the damage."

---

### **Stage 5: Main Menu and Progressive Systems**

> **Prompt A (Main Menu Implementation):** "Build the Main Menu screen using the specific layout from the 'Main Menu Screen' mockup. Implement:
>
> 1.  **Stacked Logo:** The top line 'DON'T TOUCH' in glowing white text, and the bottom line 'THE PURPLE' in massive, pulsing neon purple with a strong aura.
> 2.  **High Score Display:** A sleek panel showing 'BEST: 1,250 PTS'. This data must be persistent.
> 3.  **Start Button:** A large, central neon green button with 'TAP TO START' text, pulsing gently.
> 4.  **Icons:** Small settings (gear) and skill (star) icons at the bottom corners.
>
> Create the state logic to transition from Main Menu to Active Gameplay."

> **Prompt B (Skill System & Lore integration):** "Create the data structure for the simple 'Skill System'. Define skills that can be unlocked with cumulative points (Lifetime Points). Create placeholder icons for the skills from the GDD:
>
> - **Time Warp (Passive):** Increments base timer by 5 seconds (to 35s).
> - **Purple Shield:** Blocks negative score for 2 purple hits.
>
> Update the 'ACTIVE SKILLS' panel in desktop view to dynamically show which skills are equipped. Include a lore snippet for the Game Over screen or a tooltip: 'Avoid the unstable Purple Isotopes!'."

---

### **Stage 6: Refinement, Polishing, and Game Over**

> **Prompt A (Leaderboard Implementation):** "Create the functional data model and UI for the leaderboards (Scroll Board/High Scores ticker). Reference the 'High Scores: ACE - 1250 | REX - 1100 | JAY - 950' structure and styling from the mobile mockup. Integrate the backend logic to submit and fetch the top 5 scores. Implement the ticker logic to make it scroll horizontally or vertically on mobile."

> **Prompt B (Game Over Screen Implementation):** "Build the Game Over screen using the 'Game Over / Results Screen' mockup as a precise layout guide. Include:
>
> 1.  **Headline:** 'TIME'S UP!' in glitched neon red text at the top.
> 2.  **Final Score:** Massive, glowing white numbers, e.g., '450'.
> 3.  **New High Score Banner:** A flashing neon gold banner 'NEW BEST!' that only appears if the score beats the previous high score.
> 4.  **Stats Breakdown:** A structured panel showing detailed stats: 'Correct Taps: 55 (+55 pts)', 'Purple Taps: 2 (-6 pts)', 'Default Taps: 5 (no penalty)'.
> 5.  **Action Buttons:** A large neon green 'PLAY AGAIN' button and a smaller gray outline 'MAIN MENU' button.
>
> Ensure all game systems (timer, spawning, interaction, scoring, skills) are cohesive and bug-free across both mobile and desktop views."
