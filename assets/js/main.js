const btn=document.querySelector('[data-lang-toggle]');
let current='en';
function setLang(lang){
  current=lang; document.documentElement.lang=lang;
  document.querySelectorAll('[data-en]').forEach(el=>{ el.textContent=el.dataset[lang]; });
  btn.textContent=lang==='en'?'ES':'EN';
  localStorage.setItem('vv-lang',lang);
}
btn?.addEventListener('click',()=>setLang(current==='en'?'es':'en'));
setLang(localStorage.getItem('vv-lang')||'en');
document.getElementById('year').textContent=new Date().getFullYear();
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
