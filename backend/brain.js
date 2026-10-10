function addFile(){
 let name = document.getElementById('fileName').value;
 if(!name) return;
 let list = document.getElementById('files');
 if(list.innerHTML.includes('مفيش')) list.innerHTML = '';
 list.innerHTML += `<div style="background:#222;padding:8px;border-radius:8px;margin:5px 0">📄 ${name}</div>`;
 document.getElementById('fileName').value = '';
 localStorage.setItem('zorix_files', list.innerHTML);
}
// يرجع الملفات لما تفتح التطبيق
window.onload = ()=>{
 let saved = localStorage.getItem('zorix_files');
 if(saved) document.getElementById('files').innerHTML = saved;
}
