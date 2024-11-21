# Win Probability Calculator

A web-based calculator that determines the probability of an NBA team winning based on the current score and time remaining in the game.

## Features

- Calculate win probability based on:
  - Your team's score
  - Opponent's score
  - Time remaining (minutes and seconds)
- Color-coded results for easy interpretation
- Responsive design that works on both desktop and mobile devices
- Input validation to ensure accurate calculations

## How to Use

1. Open `index.html` in a web browser
2. Enter your team's score
3. Enter the opponent's score
4. Enter the minutes remaining
5. Enter the seconds remaining
6. Click "Calculate Win Probability"

The calculator will display the probability of your team winning as a percentage, with color coding:
- Green: ≥75% chance of winning
- Blue: 50-74% chance of winning
- Orange: 25-49% chance of winning
- Red: <25% chance of winning

## Formula Used

The win probability is calculated using the following formula:
```
Lead = YourTeamScore - OpponentScore
TimeRemaining = MinutesRemaining + (SecondsRemaining / 60)
TimeFactor = TimeRemaining ^ 0.4
ExponentNumerator = 0.5 * Lead
Exponent = ExponentNumerator / TimeFactor
Probability = 1 / (1 + Exp(-Exponent))
Final Probability = Probability * 100 (to get percentage)
```
