// Select elements for Sun and Moon points
const sunButton = document.getElementById('sun-btn');
const moonButton = document.getElementById('moon-btn');
const sunScoreDisplay = document.getElementById('sun-score');
const moonScoreDisplay = document.getElementById('moon-score');
const sunGlobalScoreDisplay = document.getElementById('sun-global-score');
const moonGlobalScoreDisplay = document.getElementById('moon-global-score');
const sunPPSDisplay = document.getElementById('sun-pps');
const moonPPSDisplay = document.getElementById('moon-pps');

// Initialize points for Sun and Moon
let sunPoints = 0;
let moonPoints = 0;

// Global score simulation
let globalSunPoints = 276178781; // Starting from some random large number
let globalMoonPoints = 323009667;

// Points per second (PPS) values
let sunPPS = 108;  // Global points added for Sun per second
let moonPPS = 143; // Global points added for Moon per second

// Update the global scores and PPS every second
setInterval(() => {
    globalSunPoints += sunPPS;
    globalMoonPoints += moonPPS;

    // Update the global score display
    sunGlobalScoreDisplay.textContent = `Global Sun Points: ${globalSunPoints}`;
    moonGlobalScoreDisplay.textContent = `Global Moon Points: ${globalMoonPoints}`;

    // Update the points per second display
    sunPPSDisplay.textContent = `Sun Points per second: ${sunPPS}`;
    moonPPSDisplay.textContent = `Moon Points per second: ${moonPPS}`;
}, 1000); // Runs every 1 second

// Add event listener for the Sun button
sunButton.addEventListener('click', () => {
    sunPoints++;
    globalSunPoints++; // Increment global points too

    // Update the score display
    sunScoreDisplay.textContent = `You've scored ${sunPoints} points for Sun`;
    sunGlobalScoreDisplay.textContent = `Global Sun Points: ${globalSunPoints}`;
    
    // Increment PPS as user clicks
    sunPPS++;
    sunPPSDisplay.textContent = `Sun Points per second: ${sunPPS}`;
});

// Add event listener for the Moon button
moonButton.addEventListener('click', () => {
    moonPoints++;
    globalMoonPoints++; // Increment global points too

    // Update the score display
    moonScoreDisplay.textContent = `You've scored ${moonPoints} points for Moon`;
    moonGlobalScoreDisplay.textContent = `Global Moon Points: ${globalMoonPoints}`;

    // Increment PPS as user clicks
    moonPPS++;
    moonPPSDisplay.textContent = `Moon Points per second: ${moonPPS}`;
});

