// frontend/chat.js - ده اللي بياخد كلامك ويعرضه
function sendMessage() {
  const input = document.getElementById('input');
  const chatBox = document.getElementById('chatBox');
  
  if(input.value === "") return;
  
  chatBox.innerHTML += "<div class='user-msg'>" + input.value + "</div>";
  
  // بينده على المخ
  askBrain(input.value);
  
  input.value = "";
}

function showAIResponse(text) {
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML += "<div class='ai-msg'>" + text + "</div>";
}
