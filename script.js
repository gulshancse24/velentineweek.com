const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const question = document.getElementById('question');
const heartsContainer = document.createElement("div");
document.body.appendChild(heartsContainer);

// Create slow-floating hearts dynamically (Leaf-like movement)
function createHearts() {
    for (let i = 0; i < 5; i++) { // Reduced heart count for a smooth effect
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random position across the screen
        const randomX = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 8 + 5; // Between 5s to 13s (smooth fall)

        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        heartsContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}

// Generate hearts every 3 seconds instead of 1 second
setInterval(createHearts, 3000);

// Funny "No" Button Moves on Hover
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    noButton.style.top = `${y}px`;
    noButton.style.left = `${x}px`;
});

// Yes Button Click Event
yesButton.addEventListener('click', () => {
    alert("Yay! ❤️ You just made my life 100x better! 🥰");
    window.location.href = 'econd_page.html'; // Redirect to the second page
});

// Funny Text Changes on Hover
const questions = [
    "Do You Wanna Be My Personal Heater This Winter? 🥶🔥",
    "Can We Be That Annoying Cute Couple? 😜💑",
    "Will You Be The Reason I Waste All My Money On Dates? 🍔💸",
    "Do You Promise To Steal My Hoodies Forever? 🧥💖"
];

question.addEventListener('mouseover', () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    question.innerText = questions[randomIndex];
});