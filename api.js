
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

async function fetchStateData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally

    const userGuess = document.getElementById('userGuess').value.trim();
   
});

document.getElementById('hintButton').addEventListener('click', function() {
 
});

document.getElementById('nextButton').addEventListener('click', function() {
    
});


initStateGame();
