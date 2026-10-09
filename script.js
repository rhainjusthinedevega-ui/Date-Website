
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");

let noCount = 0;

const noMessages = [
  "Are you sure? 🥺",
  "Please reconsider! 💗",
  "Give me a chance? 🥹",
  "Pretty please? 💕",
  "One more try! 💖"
];

function moveNoButton() {
  const area = buttons.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, area.width - btn.width);
  const maxY = Math.max(0, area.height - btn.height);

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  noCount++;

  noBtn.textContent =
    noMessages[(noCount - 1) % noMessages.length];
}

noBtn.addEventListener("pointerenter", moveNoButton);

noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.querySelector("h1").textContent =
    "Yay! You said YES! 💖";

  document.querySelector(".bear").textContent = "🥰💐";

  document.querySelector(".subtitle").textContent =
    "You've made this day extra special!";

  message.textContent =
    "Happy Valentine's Day! 💗💕🌹";

  buttons.style.display = "none";
});