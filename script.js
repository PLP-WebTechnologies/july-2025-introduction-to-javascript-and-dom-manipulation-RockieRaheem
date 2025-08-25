// Mastering JavaScript Fundamentals

// Variables + Conditionals
document.getElementById("ageCheckBtn").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = Number(age); // convert to number

  if (isNaN(age)) {
    document.getElementById("ageResult").textContent =
      "❌ Please enter a valid number!";
  } else if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "👶 You are under 18.";
  }
});

// Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatMessage(msg) {
  return `✨ ${msg} ✨`;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const total = calculateTotal(50, 3); // price=50, qty=3
  const formatted = formatMessage(`Your total is $${total}`);
  document.getElementById("calcResult").textContent = formatted;
});

// Loops
document.getElementById("loopBtn").addEventListener("click", () => {
  const countdown = document.getElementById("countdownList");
  countdown.innerHTML = ""; // clear old items

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    countdown.appendChild(li);
  }

  let li = document.createElement("li");
  li.textContent = "🚀 Blast off!";
  countdown.appendChild(li);
});

// DOM Manipulation
// (1) Toggle class on element
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// (2) Add dynamic list items
document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  const li = document.createElement("li");
  li.textContent = `New Item ${list.children.length + 1}`;
  list.appendChild(li);
});

// (3) Change text content on page load
document.getElementById("toggleText").textContent =
  "🌟 Ready to interact with JS!";
