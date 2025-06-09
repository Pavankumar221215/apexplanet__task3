// Carousel
const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3"
];
let currentImage = 0;

function showImage(index) {
  document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

// Quiz
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Custom Style System"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2005", "2015", "1985"],
    answer: "1995"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const result = document.getElementById("quizResult");
  if (selected === quizData[currentQuestion].answer) {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Wrong! 😢";
  }

  setTimeout(() => {
    result.textContent = "";
    currentQuestion = (currentQuestion + 1) % quizData.length;
    loadQuestion();
  }, 1500);
}

// Joke API
async function fetchJoke() {
  const jokeP = document.getElementById("joke");
  jokeP.textContent = "Loading...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeP.textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeP.textContent = "Failed to fetch joke.";
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImage);
  loadQuestion();
  fetchJoke();
});
