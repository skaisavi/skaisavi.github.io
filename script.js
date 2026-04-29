'use strict';

/* ─── LOADER ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('gone');
    startTyped();
  }, 600);
});

/* ─── SCROLL PROGRESS BAR ─── */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrolled / total * 100) + '%';
}, { passive: true });

/* ─── CUSTOM CURSOR ─── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

function initCursorTargets() {
  document.querySelectorAll('a, button, .magnetic, .social-btn, .card-arrow, .timeline-card, .testimonial-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
  });
}
initCursorTargets();

/* ─── NAV SCROLL ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ─── MOBILE MENU ─── */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.mm-link, .mm-cv').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ─── TYPEWRITER ─── */
const phrases = [
  'beautiful interfaces.',
  'seamless experiences.',
  'modern web apps.',
  'things people love.',
];

function startTyped() {
  const el = document.getElementById('typed');
  if (!el) return;
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 55 + Math.random() * 40);
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 30 + Math.random() * 20);
    }
  }
  tick();
}

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
    setTimeout(() => el.classList.add('visible'), delay);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── COUNT-UP NUMBERS ─── */
function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    countUp(entry.target);
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.mini-num[data-count]').forEach(el => counterObserver.observe(el));

/* ─── MAGNETIC BUTTONS ─── */
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) * 0.25;
    const dy = (e.clientY - cy) * 0.25;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
    el.style.transform = 'translate(0,0)';
    setTimeout(() => el.style.transition = '', 500);
  });

  el.addEventListener('mouseenter', () => {
    el.style.transition = 'transform 0.15s ease';
  });
});

/* ─── PROJECT CARD TILT ─── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transition = 'transform 0.12s ease, box-shadow 0.4s ease';
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease';
    card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)';
  });
});

/* ─── ACTIVE NAV LINK HIGHLIGHT ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => {
      a.style.fontWeight = a.getAttribute('href') === '#' + entry.target.id ? '700' : '500';
      a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--accent-a)' : '';
    });
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ─── SKILL PILL STAGGER ─── */
document.querySelectorAll('.bento-cell').forEach((cell, ci) => {
  const pills = cell.querySelectorAll('.pills span');
  pills.forEach((pill, pi) => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(10px)';
    pill.style.transition = `opacity 0.4s ${(ci * 60 + pi * 40)}ms, transform 0.4s ${(ci * 60 + pi * 40)}ms`;
  });
});

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.pills span').forEach(pill => {
      pill.style.opacity = '1';
      pill.style.transform = 'translateY(0)';
    });
    skillsObserver.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.bento-cell').forEach(cell => skillsObserver.observe(cell));

/* ─── NOW CELL STAGGER ─── */
const nowItems = document.querySelectorAll('.now-item');
nowItems.forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-12px)';
  item.style.transition = `opacity 0.5s ${i * 100}ms, transform 0.5s ${i * 100}ms`;
});

const nowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    nowItems.forEach(item => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    });
    nowObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

const nowCell = document.querySelector('.now-cell');
if (nowCell) nowObserver.observe(nowCell);
