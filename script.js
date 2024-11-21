function calculateProbability() {
    // Get input values
    const yourScore = parseFloat(document.getElementById('yourScore').value);
    const opponentScore = parseFloat(document.getElementById('opponentScore').value);
    const minutes = parseFloat(document.getElementById('minutes').value);
    const seconds = parseFloat(document.getElementById('seconds').value);

    // Validate inputs
    if (isNaN(yourScore) || isNaN(opponentScore) || isNaN(minutes) || isNaN(seconds)) {
        alert('Please fill in all fields with valid numbers');
        return;
    }

    if (minutes < 0 || minutes > 60 || seconds < 0 || seconds > 59) {
        alert('Please enter valid time values (0-60 minutes, 0-59 seconds)');
        return;
    }

    // Calculate according to the formula
    const lead = yourScore - opponentScore;
    const timeRemaining = minutes + (seconds / 60);
    
    // Handle edge cases
    if (timeRemaining === 0) {
        const probability = lead > 0 ? 100 : (lead < 0 ? 0 : 50);
        displayResult(probability);
        return;
    }

    const timeFactor = Math.pow(timeRemaining, 0.4);
    const exponentNumerator = 0.5 * lead;
    const exponent = exponentNumerator / timeFactor;
    const probability = 1 / (1 + Math.exp(-exponent));

    // Convert to percentage and display
    displayResult(probability * 100);
}

function displayResult(probability) {
    // Round to 1 decimal place
    const roundedProbability = Math.round(probability * 10) / 10;
    
    // Update the result display
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Win Probability: ${roundedProbability}%`;

    // Add color coding based on probability
    if (roundedProbability >= 75) {
        resultElement.style.color = '#2e7d32'; // Dark green
    } else if (roundedProbability >= 50) {
        resultElement.style.color = '#1976d2'; // Blue
    } else if (roundedProbability >= 25) {
        resultElement.style.color = '#f57c00'; // Orange
    } else {
        resultElement.style.color = '#c62828'; // Red
    }
}
