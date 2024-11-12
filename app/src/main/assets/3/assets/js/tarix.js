function displayHistory() {
  const chatHistory = document.getElementById('chat-history');
  chatHistory.innerHTML = '';
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.forEach(entry => {
     chatHistory.innerHTML += `<p><strong>Siz:</strong> ${entry.message}</p>`;
     chatHistory.innerHTML += `<p><strong>AI:</strong> ${entry.response}</p>`;
  });
}

function goBack() {
  window.location.href = 'interface.html';
}
window.onload = () => {
  displayHistory();
};