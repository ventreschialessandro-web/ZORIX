// ZORIX Chat - تصميم فخم جديد 2026
let newStyle = document.createElement('style');
newStyle.innerHTML = `
  /* خلفية الشات */
  body, .chat-container {
    background: #0f0f0f !important;
  }

  /* رسائل المستخدم */
  .user-message, .message-user {
    background: linear-gradient(135deg, #7c3aed, #4f46e5) !important;
    color: white !important;
    border-radius: 20px 20px 5px 20px !important;
    padding: 12px 18px !important;
    margin: 8px !important;
    box-shadow: 0 5px 15px rgba(124, 58, 237, 0.4) !important;
    animation: slideIn 0.3s ease;
  }

  /* رسائل البوت */
  .bot-message, .message-bot {
    background: #1f1f1f !important;
    color: #e5e5e5 !important;
    border-radius: 20px 20px 20px 5px !important;
    padding: 12px 18px !important;
    margin: 8px !important;
    border: 1px solid #333 !important;
  }

  /* زرار الإرسال */
  button, .btn, .send-btn {
    background: linear-gradient(135deg, #7c3aed, #ec4899) !important;
    border: none !important;
    border-radius: 50% !important;
    width: 50px !important;
    height: 50px !important;
    box-shadow: 0 5px 20px rgba(124, 58, 237, 0.5) !important;
    transition: 0.2s !important;
  }
  
  button:hover {
    transform: scale(1.1) rotate(10deg) !important;
  }

  @keyframes slideIn {
    from { transform: translateX(20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(newStyle);

console.log("🔥 تصميم ZORIX الجديد اشتغل!");
