// ده الملف اللي بيوصل كل الفولدرات ببعض من غير index.html
console.log("ZORIX: بوصل الفولدرات...");

async function connectAll(){
  try{
    const backend = await fetch('backend/brain.js').then(r=>r.text());
    const frontend = await fetch('frontend/chat.js').then(r=>r.text());
    const db = await fetch('database/memory.json').then(r=>r.json());
    const prompts = await fetch('prompts/system.txt').then(r=>r.text());
    
    console.log("✅ كل الفولدرات متصلة ببعضها:", {backend: !!backend, frontend: !!frontend, db, prompts});
    
    // شغل كود الباك والفرونت حتى لو اتمسح من index.html
    eval(backend);
    eval(frontend);
    
    document.body.innerHTML += `<div style="position:fixed;bottom:10px;left:10px;background:#00ff88;color:#000;padding:8px 12px;border-radius:10px;font-size:12px">4 فولدرات متصلين أوتوماتيك ✅</div>`;
  }catch(e){
    console.log("لسه في فولدر مش متوصل", e);
  }
}
connectAll();
