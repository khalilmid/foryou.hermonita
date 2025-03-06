// Select elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const container = document.querySelector(".container");
const loveImage = document.getElementById("loveImage");
const backgroundMusic = document.getElementById("backgroundMusic");

// Function to handle "Yes" button click
yesButton.addEventListener("click", () => {
  console.log("Yes button clicked!");

  // Preserve existing elements while updating text
  const message = document.createElement("div");
  message.innerHTML = `
    <h1>I love you too, HoudHoud<3 ! </h1>
    <p style="font-size: 3rem; margin-top: 20px;">🤗</p>
  `;
  container.innerHTML = ""; // Clear previous content
  container.appendChild(message);
  container.appendChild(loveImage);
  container.appendChild(backgroundMusic);

  // Show the love image
  loveImage.src = "hug.jpg"; // Ensure the image file exists
  loveImage.style.display = "block";

  console.log("Image source set to:", loveImage.src);

  // Try to play the music (handle autoplay restrictions)
  if (backgroundMusic) {
    backgroundMusic.volume = 1.0; // Ensure volume is up
    backgroundMusic.muted = false; // Explicitly unmute
    backgroundMusic.play().then(() => {
      console.log("Music is playing!");
    }).catch(err => {
      console.warn("Autoplay blocked! User must click to play music.");
      showPlayButton();
    });
  }
});

// Function to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noButton.offsetWidth - 20;
  const maxY = window.innerHeight - noButton.offsetHeight - 20;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// Prevent the "No" button from being clicked
noButton.addEventListener("click", (event) => {
  event.preventDefault();
});

// Show a button to manually play music if autoplay is blocked
function showPlayButton() {
  const playButton = document.createElement("button");
  playButton.textContent = "Click to Play Music 🎵";
  playButton.style.display = "block";
  playButton.style.marginTop = "20px";
  playButton.style.padding = "10px";
  playButton.style.fontSize = "16px";
  playButton.style.cursor = "pointer";

  playButton.addEventListener("click", () => {
    backgroundMusic.play().then(() => {
      console.log("Music manually started.");
      playButton.remove(); // Remove the button after playing
    }).catch(err => console.error("Manual play failed:", err));
  });

  container.appendChild(playButton);
}
