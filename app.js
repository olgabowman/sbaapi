// app.js
import { fetchStateData } from './api.js';
import { displayStateFact } from './utils.js';

async function initStateGame() {
    try {
        const stateData = await fetchStateData();
      
        const randomState = stateData[Math.floor(Math.random() * stateData.length)];
        displayStateFact(randomState.fact);

       
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}



initStateGame();
