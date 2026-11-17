// ==========================================
// 1. PERSONALIZE HER NAME HERE
// ==========================================
const DEFAULT_GF_NAME = "Myar";

function updateAllNameInstances(newName) {
  const cleanName = newName.trim() || "Myar";
  document.querySelectorAll(".gf-name").forEach((el) => {
    el.textContent = cleanName;
  });
}

// Initialize name and allow clicking the hero name to edit it live
updateAllNameInstances(DEFAULT_GF_NAME);

const heroNameEl = document.getElementById("heroName");
heroNameEl.addEventListener("click", () => {
  const entered = prompt("Myar:", heroNameEl.textContent);
  if (entered !== null) {
    updateAllNameInstances(entered);
  }
});

// ==========================================
// 2. FLOATING BACKGROUND HEARTS
// ==========================================
const heartsContainer = document.getElementById("heartsContainer");
const heartSymbols = ["❤️", "💖", "💕", "✨", "🌹"];

function spawnHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart-particle");
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 16 + 12 + "px";
  heart.style.animationDuration = Math.random() * 6 + 7 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

setInterval(spawnHeart, 550);

// ==========================================
// 3. BACKGROUND MUSIC CONTROLLER
// ==========================================
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

function startMusic() {
  if (isPlaying || !bgMusic) return;
  
  bgMusic.play().then(() => {
    isPlaying = true;
    document.getElementById("equalizer").classList.add("playing");
    document.getElementById("musicStatusText").textContent = "Music On";
  }).catch((err) => {
    console.log("Audio playback waiting for interaction:", err);
  });
}

function stopMusic() {
  if (!isPlaying || !bgMusic) return;
  
  bgMusic.pause();
  isPlaying = false;
  document.getElementById("equalizer").classList.remove("playing");
  document.getElementById("musicStatusText").textContent = "Music Off";
}

// Open Gift Overlay Button -> Starts Music & Reveals Page
document.getElementById("openGiftBtn").addEventListener("click", () => {
  document.getElementById("welcomeOverlay").classList.add("hidden");
  startMusic();
});

// Toggle Music Button
document.getElementById("musicToggleBtn").addEventListener("click", () => {
  if (isPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
});

// ==========================================
// 4. SMOOTH RIZZ LINES CYCLER
// ==========================================
const rizzLines = [
  "Are you a magician? Because whenever I look at you, everyone else disappears.",
  "I’m not a photographer, but I can definitely picture us together forever.",
  "Do you have a map? Because I just keep getting lost in your eyes.",
  "If beauty were time, you’d be an eternity.",
  "Are you made of copper and tellurium? Because you’re Cu-Te.",
  "I must be a snowflake, because I’ve fallen completely for you.",
  "Forget hydrogen—you’re my number one element."
];

let currentRizz = 0;
const rizzDisplay = document.getElementById("rizzDisplay");

document.getElementById("nextRizzBtn").addEventListener("click", () => {
  rizzDisplay.style.opacity = 0;
  setTimeout(() => {
    currentRizz = (currentRizz + 1) % rizzLines.length;
    rizzDisplay.textContent = `"${rizzLines[currentRizz]}"`;
    rizzDisplay.style.opacity = 1;
  }, 220);
});

// ==========================================
// 5. INTERACTIVE VALENTINE PROPOSAL
// ==========================================
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const proposalButtons = document.getElementById("proposalButtons");
const celebrationMsg = document.getElementById("celebrationMsg");

function dodgeButton() {
  const x = (Math.random() - 0.5) * 220;
  const y = (Math.random() - 0.5) * 140;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", dodgeButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  dodgeButton();
});

yesBtn.addEventListener("click", () => {
  proposalButtons.classList.add("hidden");
  celebrationMsg.classList.remove("hidden");

  // Burst of celebratory hearts
  for (let i = 0; i < 25; i++) {
    setTimeout(spawnHeart, i * 60);
  }
});