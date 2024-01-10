// app.js
import { fetchStateData } from './api.js';
import { displayStateFact } from './utils.js';

async function initStateGame() {
    try {
        const stateData = await fetchStateData();
        const randomState = stateData[Math.floor(Math.random() * stateData.length)];
        displayStateFact(randomState.fact);

        
        console.error('Error initializing game:', error);
    }
}

// Event listeners for user interactions (e.g., guess submission) go here

// Initialize the game
initStateGame();
