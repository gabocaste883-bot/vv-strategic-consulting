const btn = document.querySelector('[data-lang-toggle]');
let current = 'en';

function setLang(lang) {
  current = lang === 'es' ? 'es' : 'en';
  document.documentElement.lang = current;
  document.documentElement.classList.add('notranslate');
  document.documentElement.setAttribute('translate', 'no');
  document.body?.classList.add('notranslate');
  document.body?.setAttribute('translate', 'no');

  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.textContent = current === 'en' ? el.dataset.en : el.dataset.es;
  });

  if (btn) {
    btn.textContent = current === 'en' ? 'Español' : 'English';
    btn.setAttribute('aria-label', current === 'en' ? 'Switch to Spanish' : 'Switch to English');
  }

  document.title = current === 'en'
    ? 'V&V Strategic Consulting | Security & Risk Advisory'
    : 'V&V Strategic Consulting | Seguridad e Inteligencia de Riesgos';

  localStorage.setItem('vv-lang', current);
}

btn?.addEventListener('click', () => setLang(current === 'en' ? 'es' : 'en'));
setLang(localStorage.getItem('vv-lang') || 'en');

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const obs = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.16 }
);
document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
