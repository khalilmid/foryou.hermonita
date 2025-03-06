const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const container = document.querySelector(".container");
const loveImage = document.getElementById("loveImage");

yesButton.addEventListener("click", () => {
  // Update the text
  container.innerHTML = `
    <h1>I love you too, sweetheart! 🤗</h1>
    <p style="font-size: 3rem; margin-top: 20px;">🤗</p>
  `;

  loveImage.src = "hug.jpg";
  loveImage.style.display = "block";

  // Log to the console to confirm the image is being set
  console.log("Image source set to:", loveImage.src);
});

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

noButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the button from being clicked
});