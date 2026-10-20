// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  links.classList.toggle('open', !open);
});
links.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox: gambar dalam satu kelompok (.case atau .certs) bisa digeser
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const lbCap = lb.querySelector('figcaption');
let group = [];
let index = 0;
let lastFocus = null;

function show(i) {
  index = (i + group.length) % group.length;
  const item = group[index];
  lbImg.src = item.dataset.src;
  lbImg.alt = item.querySelector('img')?.alt || '';
  lbCap.textContent = item.dataset.caption || '';
  const multi = group.length > 1;
  lb.querySelectorAll('.lb-nav').forEach((b) => { b.hidden = !multi; });
}

function open(btn) {
  group = [...btn.closest('.case, .certs').querySelectorAll('[data-src]')];
  lastFocus = btn;
  show(group.indexOf(btn));
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lb-close').focus();
}

function close() {
  lb.hidden = true;
  document.body.style.overflow = '';
  lastFocus?.focus();
}

document.querySelectorAll('[data-src]').forEach((btn) => btn.addEventListener('click', () => open(btn)));
lb.querySelector('.lb-close').addEventListener('click', close);
lb.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(index - 1);
  if (e.key === 'ArrowRight') show(index + 1);
});
