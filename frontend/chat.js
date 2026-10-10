// ZORIX - شكل ابيض كامل
let whiteStyle = document.createElement('style');
whiteStyle.innerHTML = `
  body {
    background: #ffffff !important;
    color: #000000 !important;
  }
  
  header {
    background: #ffffff !important;
    color: #000000 !important;
    border-bottom: 2px solid #000 !important;
    box-shadow: none !important;
  }
  
  #chat {
    background: #ffffff !important;
  }
  
  .msg.user {
    background: #000000 !important;
    color: #ffffff !important;
  }
  
  .msg.bot {
    background: #f0f0f0 !important;
    color: #000000 !important;
    border: 1px solid #ddd !important;
  }
  
  .input-area {
    background: #ffffff !important;
    border-top: 1px solid #ddd !important;
  }
  
  input {
    background: #ffffff !important;
    color: #000000 !important;
    border: 2px solid #000 !important;
  }
  
  button {
    background: #000000 !important;
    color: #ffffff !important;
  }
`;
document.head.appendChild(whiteStyle);

console.log("✅ الشكل الأبيض اشتغل من frontend/chat.js");
