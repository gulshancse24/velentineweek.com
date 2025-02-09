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
// Flip Page Forward
function flipPage(pageNumber) {
    document.getElementById(`page${pageNumber}`).style.transform = "rotateY(-180deg)";
    document.getElementById(`page${pageNumber + 1}`).style.transform = "rotateY(0deg)";
}

// Flip Page Backward
function flipBack(pageNumber) {
    document.getElementById(`page${pageNumber}`).style.transform = "rotateY(0deg)";
    document.getElementById(`page${pageNumber + 1}`).style.transform = "rotateY(180deg)";
}

// Create Falling Hearts
function createHearts() {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        const randomX = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 10 + 5;
        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}
setInterval(createHearts, 3000);

// Create Falling Sparkles
function createSparkles() {
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        document.body.appendChild(sparkle);

        const randomX = Math.random() * window.innerWidth;
        sparkle.style.left = `${randomX}px`;

        setTimeout(() => {
            sparkle.remove();
        }, 5000);
    }
}
setInterval(createSparkles, 2000);

// Floating "I Love You Forever" Animation
let position = 0;
let direction = 1;
function floatText() {
    position += direction * 1.5;
    document.getElementById("floating-text").style.transform = `translateY(${position}px)`;

    if (position >= 20 || position <= -20) {
        direction *= -1;
    }
    requestAnimationFrame(floatText);
}
floatText();

