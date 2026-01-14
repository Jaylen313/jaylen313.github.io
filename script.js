// 1) Messages to type on the homepage
const lines = [
  "Initializing profile...",
  "Loading skills: Python, Java, C, C++",
  "Target roles: PenTest | Threat Hunting | Malware Analysis",
  "Status: building, learning, improving."
];

// 2) Grab elements from the page (if they exist)
const typingEl = document.getElementById("typing");
const clockEl = document.getElementById("clock");
const yearEl = document.getElementById("year");

// 3) Set the footer year everywhere
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 4) Simple digital clock
function tickClock() {
  if (!clockEl) return;
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
setInterval(tickClock, 250);
tickClock();

// 5) Typing animation (only runs on pages that have #typing)
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingEl) return;

  const current = lines[lineIndex];

  if (!deleting) {
    // Typing forward
    typingEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 900);
      return;
    }
  } else {
    // Deleting backward
    typingEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      charIndex = 0;
    }
  }

  setTimeout(typeLoop, deleting ? 30 : 45);
}
typeLoop();
