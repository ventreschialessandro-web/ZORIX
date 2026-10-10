// ده كود تغيير شكل كل الزراير في التطبيق
let style = document.createElement('style');
style.innerHTML = `
  button, .btn {
    background: linear-gradient(45deg, #00ff88, #00ccff) !important;
    border-radius: 50px !important;
    padding: 15px 20px !important;
    font-size: 16px !important;
    font-weight: bold !important;
    border: 2px solid #fff !important;
    box-shadow: 0 0 20px #00ff88 !important;
    transform: scale(1.05);
    transition: 0.3s;
  }
  button:active {
    transform: scale(0.9);
  }
`;
document.head.appendChild(style);

console.log("✅ شكل الزراير اتغير من ملف frontend/chat.js");
