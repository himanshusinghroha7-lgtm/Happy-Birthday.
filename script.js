// Change the birthday person's name here
const personName = "Sushila❤️";

document.getElementById("birthdayName").textContent =
    personName;


// Surprise button
const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseMessage =
    document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.remove("hidden");

    surpriseButton.textContent = "🎉 Surprise Opened!";

    surpriseButton.disabled = true;

    createConfetti();

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

});


// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const heartTypes = ["❤️", "💖", "💕", "💗", "💞","😘","😍","🥰","😘,","☺️","🌹","❣️","💓","💝","💖"];

    heart.textContent =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);

}


// Create a heart every 500 milliseconds
setInterval(createHeart, 500);


// Confetti animation
function createConfetti() {

    const confettiColors = [
        "#ff4081",
        "#ffd700",
        "#00c9a7",
        "#7b61ff",
        "#ff7f50"
    ];

    for (let i = 0; i < 100; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            confettiColors[
                Math.floor(Math.random() * confettiColors.length)
            ];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 6000);

    }

}