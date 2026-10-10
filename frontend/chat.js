function sendMessage() {
  let input = document.getElementById('input');
  let box = document.getElementById('chatBox');
  if(!input.value) return;
  box.innerHTML += `<div style="background:#0f0f0f;color:white;padding:8px;margin:5px;border-radius:8px">انت: ${input.value}</div>`;
  askBrain(input.value);
  input.value = "";
}
function showAIResponse(text) {
  let box = document.getElementById('chatBox');
  box.innerHTML += `<div style="background:#222;color:#00ff88;padding:8px;margin:5px;border-radius:8px">ZORIX: ${text}</div>`;
}
