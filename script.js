// === Portofoliu Luca Moldovan — terminal theme ===

const PROJECTS = [
  { slug:'codrea', title:'CODREA BATI', cat:'Comercial',
    desc:'Site de prezentare pentru o firmă de construcții din Franța (Travaux Bâtiment). Multipage, design curat.',
    tech:['HTML','CSS','JS'], img:'images/projects/codrea.png',
    live:'https://moldluca.github.io/codrea-bati-website/',
    repo:'https://github.com/moldluca/codrea-bati-website', since:'2026-05-07' },

  { slug:'criptare', title:'Laboratorul de Criptare', cat:'Educațional',
    desc:'Site educațional interactiv care învață copiii bazele criptografiei prin exerciții și jocuri.',
    tech:['JavaScript','HTML','CSS'], img:'images/projects/criptare.png',
    live:'http://criptare.perpetuummobile.tech/',
    repo:'https://github.com/moldluca/laborator-criptare', since:'2026-05-08' },

  { slug:'romania-identity', title:'România — Identitate Vizuală', cat:'Branding',
    desc:'Website + brand book pentru o identitate vizuală națională a României (logo, paletă, mockup turism).',
    tech:['HTML','CSS','JS'], img:'images/projects/romania-identity.png',
    live:'https://romania.perpetuummobile.tech/',
    repo:'https://github.com/moldluca/romania-visual-identity', since:'2026-05-07' },

  { slug:'eco', title:'Eco Website', cat:'Educațional',
    desc:'Site pe teme de ecologie și sustenabilitate.',
    tech:['HTML','CSS','JS'], img:'images/projects/eco.png',
    live:'https://moldluca.github.io/eco-website/',
    repo:'https://github.com/moldluca/eco-website', since:'2026-03-26' },

  { slug:'arbori', title:'Arbori — Parcurgere', cat:'Educațional',
    desc:'Vizualizare interactivă a algoritmilor de parcurgere a arborilor.',
    tech:['JavaScript','HTML','Canvas'], img:'images/projects/arbori.png',
    live:'https://moldluca.github.io/arbori-parcurgere/',
    repo:'https://github.com/moldluca/arbori-parcurgere', since:'2026-06-09' },

  { slug:'monede', title:'Prezentare Monede', cat:'Educațional',
    desc:'Prezentare web interactivă despre monede.',
    tech:['JavaScript','HTML','CSS'], img:'images/projects/monede.png',
    live:'https://moldluca.github.io/prezentare-monede/',
    repo:'https://github.com/moldluca/prezentare-monede', since:'2026-01-11' },

  { slug:'perpetuum', title:'Perpetuum Mobile', cat:'Organizație',
    desc:'Site-ul echipei de robotică Perpetuum Mobile — prezentare, sponsori, activități.',
    tech:['Node.js','Express','HTML'], img:'images/projects/perpetuum.png',
    live:'https://perpetuummobile.tech/', repo:null, since:'2026-01-24' },

  { slug:'crocoai', title:'CrocoAI', cat:'Produs / AI',
    desc:'Platformă internă cu asistent AI, chat, taskuri și calendar pentru echipa Perpetuum Mobile.',
    tech:['Node.js','Socket.IO','HTML'], img:'images/projects/crocoai.png',
    live:null, repo:null, since:'2026-05-03', priv:true },

  { slug:'roworlds', title:'RO Worlds Tracker', cat:'Live data',
    desc:'Live tracker pentru echipele românești la FIRST World Championship 2026 Houston (FTC + FRC), cu Web Push.',
    tech:['Node.js','FIRST API','Web Push'], img:'images/projects/roworlds.png',
    live:'https://worlds.perpetuummobile.tech/', repo:null, since:'2026-05-01' },

  { slug:'arvusmart', title:'ArvuSmart', cat:'Produs / Agri',
    desc:'Platformă agricolă: frontend, GeoSelect 3D pentru parcele și asistent AI agronomic.',
    tech:['HTML','Leaflet','JS'], img:'images/projects/arvusmart.png',
    live:'https://arvusmart.perpetuummobile.tech/', repo:null, since:'2026-04-27' },

  { slug:'timisoara', title:'Timișoara MUN', cat:'Eveniment',
    desc:'Site pentru conferința Timișoara Model United Nations — înscrieri, program, comitete.',
    tech:['Flask','Python','HTML'], img:null,
    live:null, repo:null, since:'2025-10-06', priv:true },
];

// ---------- typing effect ----------
(function type() {
  const el = document.getElementById('typed');
  const text = 'Luca Moldovan';
  let i = 0;
  (function step() {
    if (i <= text.length) { el.textContent = text.slice(0, i++); setTimeout(step, 70); }
  })();
})();

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- helpers ----------
function esc(s) { return s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function fmtUptime(sinceISO) {
  const since = new Date(sinceISO + 'T00:00:00Z').getTime();
  const ms = Date.now() - since;
  if (ms < 0) return '0z';
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p = n => String(n).padStart(2, '0');
  return `${d}z ${p(h)}:${p(m)}:${p(sec)}`;
}

// ---------- render cards ----------
const grid = document.getElementById('grid');

PROJECTS.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card';

  const initials = p.title.replace(/[^A-Za-zĂÂÎȘȚ]/g, '').slice(0, 2).toUpperCase() || '#';
  const thumb = p.img
    ? `<div class="thumb"><span class="cat-tag">${esc(p.cat)}</span><img src="${p.img}" alt="Screenshot ${esc(p.title)}" loading="lazy"></div>`
    : `<div class="thumb noimg"><span class="cat-tag">${esc(p.cat)}</span>${initials}</div>`;

  const tags = p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join('');

  // status: private projects skip the live check
  const statusInit = p.priv ? 'private' : 'offline';
  const statusLabel = p.priv ? 'INTERN' : 'verific...';

  const liveLink = p.live
    ? `<a href="${p.live}" target="_blank" rel="noopener">→ live</a>`
    : `<span class="disabled">→ live indisponibil</span>`;
  const repoLink = p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">↳ cod</a>` : '';

  card.innerHTML = `
    ${thumb}
    <div class="card-body">
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="tags">${tags}</div>
      <div class="status ${statusInit}" data-slug="${p.slug}">
        <span class="led"></span>
        <span class="status-label">${statusLabel}</span>
        <span class="uptime"></span>
      </div>
      <div class="links">${liveLink}${repoLink}</div>
    </div>`;

  grid.appendChild(card);
  p._statusEl = card.querySelector('.status');
});

// ---------- reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.card').forEach((c, i) => { c.style.transitionDelay = (i % 3) * 60 + 'ms'; io.observe(c); });

// ---------- live status check (no-cors reachability) ----------
function checkLive(url, timeout = 7000) {
  return new Promise(resolve => {
    const ctrl = new AbortController();
    const t = setTimeout(() => { ctrl.abort(); resolve(false); }, timeout);
    fetch(url, { mode: 'no-cors', signal: ctrl.signal, cache: 'no-store' })
      .then(() => { clearTimeout(t); resolve(true); })
      .catch(() => { clearTimeout(t); resolve(false); });
  });
}

async function runChecks() {
  const online = [];
  await Promise.all(PROJECTS.map(async p => {
    const el = p._statusEl;
    if (p.priv || !p.live) {
      el.className = 'status private';
      el.querySelector('.status-label').textContent = 'INTERN';
      el.querySelector('.uptime').textContent = '// privat / nedeploiat';
      return;
    }
    const up = await checkLive(p.live);
    if (up) {
      online.push(p);
      el.className = 'status online';
      el.querySelector('.status-label').textContent = 'ONLINE';
      p._online = true;
    } else {
      el.className = 'status offline';
      el.querySelector('.status-label').textContent = 'OFFLINE';
      el.querySelector('.uptime').textContent = '// momentan indisponibil';
    }
  }));

  // summary
  const total = PROJECTS.length;
  const on = online.length;
  document.getElementById('summary').textContent =
    `// ${total} proiecte · ${on} online · ${total - on} offline/intern — status verificat live`;

  // ticking uptime for online ones
  function tick() {
    PROJECTS.forEach(p => {
      if (p._online) {
        p._statusEl.querySelector('.uptime').textContent = '↑ online de ' + fmtUptime(p.since);
      }
    });
  }
  tick();
  setInterval(tick, 1000);
}

runChecks();
