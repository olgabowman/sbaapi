// app.js
import { fetchStateData } from './api.js';
import { displayStateFact } from './utils.js';

async function initStateGame() {
    try {
        const stateData = await fetchStateData();
        // Assuming stateData contains an array of states and facts
        // Update this part based on your API structure
        const randomState = stateData[Math.floor(Math.random() * stateData.length)];
        displayStateFact(randomState.fact);

        // Add more logic for handling user guesses, updating the UI, etc.
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}


// Initialize the game
initStateGame();
