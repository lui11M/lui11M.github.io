// Variables to customize.
let currentWordIndex = 0;
let highWords = ["Lu", "Malundo", "a designer", "a tech enthusiast (?)"];
let switchTime = 1000;

// Changes the highlighted word.
function changeHighlight() {
  // Set the new highlighted word.
  let elem = document.getElementById("word-highlight");
  elem.innerText = highWords[currentWordIndex];

  // Prepare for the next one.
  currentWordIndex++;
  if (currentWordIndex >= highWords.length) {
    currentWordIndex = 0;
  }
}

// Does stuff when the page loads up.
window.onload = function () {
  setInterval(changeHighlight, switchTime);
};

particlesJS("particle-background", {
  particles: {
    number: { value: 100 },
    size: { value: 3 },
    move: { speed: 2 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
});
