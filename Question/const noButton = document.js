const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const questionContainer = document.getElementById("question-container");
const celebrationContainer = document.getElementById("celebration-container");

// Move "No" button randomly when hovered
noButton.addEventListener("mouseover", () => {
    const offsetX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const offsetY = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = offsetX + "px";
    noButton.style.top = offsetY + "px";
});

// Handle "Yes" button click
yesButton.addEventListener("click", () => {
    // Hide the question container
    questionContainer.classList.add("hidden");

    // Show the celebration container
    celebrationContainer.classList.remove("hidden");

    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
});

// Create a single confetti piece
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");

    // Randomize position and color
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();

    document.getElementById("confetti").appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Generate random color for confetti
function getRandomColor() {
    const colors = ["#f39c12", "#e74c3c", "#9b59b6", "#3498db", "#2ecc71"];
    return colors[Math.floor(Math.random() * colors.length)];
}
