function saveMessageHistory(message, response) {
  const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  history.push({ message, response, timestamp: new Date().toISOString() });
  localStorage.setItem("chatHistory", JSON.stringify(history));
}

function displayHistory() {
  const chatHistory = document.getElementById("chat-history");
  chatHistory.innerHTML = ""; // Eski yozishmalarni tozalash
  const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
  history.forEach((entry) => {
    chatHistory.innerHTML += `<p><strong>Siz:</strong> ${entry.message}</p>`;
    chatHistory.innerHTML += `<p><strong>AI:</strong> ${entry.response}</p>`;
  });
}

function sendMessage() {
  const userInput = document.getElementById("user-message");
  const message = userInput.value.trim();
  if (!message) return;

  let response = "";

  if (message.toLowerCase() === "salom") {
    response = "Assalamu aleykum, user!";
  } else if (message.toLowerCase() === "clear") {
    response = "Tarix tozalandi!";
    clearHistory();
  } else {
    response = `Bu sizning yozgan xabaringiz: "${message}"`;
  }

  if (message.toLowerCase() !== "clear") {
    saveMessageHistory(message, response);
  }

  displayHistory();

  userInput.value = "";
}

function clearHistory() {
  localStorage.removeItem("chatHistory");
  displayHistory();
}

function viewHistory() {
  window.location.href = "./history.html";
}
window.onload = () => {
  displayHistory();
};
document
  .getElementById("user-message")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });
