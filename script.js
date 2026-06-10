// === Portofoliu Luca Moldovan — Ivory Estate × Spray ===

const PROJECTS = [
  { slug:'roworlds', title:'RO Worlds Tracker', cat:'Live data',
    desc:'Live tracker pentru echipele românești la FIRST World Championship 2026 Houston (FTC + FRC), cu Web Push.',
    tech:['Node.js','FIRST API','Web Push'], img:'images/projects/roworlds.png',
    live:'https://worlds.perpetuummobile.tech/', repo:null, since:'2026-05-01' },

  { slug:'crocoai', title:'CrocoAI', cat:'Produs / AI',
    desc:'Platformă internă cu asistent AI, chat, taskuri și calendar pentru echipa Perpetuum Mobile.',
    tech:['Node.js','Socket.IO','HTML'], img:'images/projects/crocoai.png',
    live:null, repo:null, since:'2026-05-03', priv:true },

  { slug:'arbori', featured:true, title:'Arbori — Parcurgere', cat:'Educațional',
    desc:'Vizualizare interactivă a algoritmilor de parcurgere a arborilor binari — 100 de arbori, cu dificultate.',
    tech:['JavaScript','HTML','SVG'], img:'images/projects/arbori.png',
    live:'https://moldluca.github.io/arbori-parcurgere/',
    repo:'https://github.com/moldluca/arbori-parcurgere', since:'2026-06-09' },

  { slug:'codrea', title:'CODREA BATI', cat:'Comercial',
    desc:'Site de prezentare pentru o firmă de construcții din Franța (Travaux Bâtiment). Multipage, design curat.',
    tech:['HTML','CSS','JS'], img:'images/projects/codrea.png',
    live:'https://moldluca.github.io/codrea-bati-website/',
    repo:'https://github.com/moldluca/codrea-bati-website', since:'2026-05-07' },

  { slug:'criptare', featured:true, title:'Laboratorul de Criptare', cat:'Educațional',
    desc:'Site educațional interactiv care învață copiii bazele criptografiei prin exerciții și jocuri.',
    tech:['JavaScript','HTML','CSS'], img:'images/projects/criptare.png',
    live:'http://criptare.perpetuummobile.tech/',
    repo:'https://github.com/moldluca/laborator-criptare', since:'2026-05-08' },

  { slug:'romania-identity', title:'România — Identitate Vizuală', cat:'Branding',
    desc:'Website + brand book pentru o identitate vizuală națională a României (logo, paletă, mockup turism).',
    tech:['HTML','CSS','JS'], img:'images/projects/romania-identity.png',
    live:'https://romania.perpetuummobile.tech/',
    repo:'https://github.com/moldluca/romania-visual-identity', since:'2026-05-07' },

  { slug:'arvusmart', featured:true, title:'ArvuSmart', cat:'Produs / Agri',
    desc:'Platformă agricolă: frontend, GeoSelect 3D pentru parcele și asistent AI agronomic.',
    tech:['HTML','Leaflet','JS'], img:'images/projects/arvusmart.png',
    live:'https://arvusmart.perpetuummobile.tech/', repo:null, since:'2026-04-27' },

  { slug:'eco', title:'Eco Website', cat:'Educațional',
    desc:'Site pe teme de ecologie și sustenabilitate.',
    tech:['HTML','CSS','JS'], img:'images/projects/eco.png',
    live:'https://moldluca.github.io/eco-website/',
    repo:'https://github.com/moldluca/eco-website', since:'2026-03-26' },

  { slug:'monede', title:'Prezentare Monede', cat:'Educațional',
    desc:'Prezentare web interactivă despre monede.',
    tech:['JavaScript','HTML','CSS'], img:'images/projects/monede.png',
    live:'https://moldluca.github.io/prezentare-monede/',
    repo:'https://github.com/moldluca/prezentare-monede', since:'2026-01-11' },

  { slug:'trainbot', featured:true, title:'TrainBot', cat:'Produs / AI',
    desc:'Asistent AI pentru antrenamente — aplicație cu backend Node și model LLM (Groq / OpenAI).',
    tech:['Node.js','LLM','iOS'], img:null,
    live:'https://trainbot.perpetuummobile.tech/', repo:null, since:'2026-05-02' },

  { slug:'perpetuum', featured:true, title:'Perpetuum Mobile', cat:'Organizație',
    desc:'Site-ul echipei de robotică Perpetuum Mobile — prezentare, sponsori, activități.',
    tech:['Node.js','Express','HTML'], img:'images/projects/perpetuum.png',
    live:'https://perpetuummobile.tech/', repo:null, since:'2026-01-24' },

  { slug:'timisoara', title:'Timișoara MUN', cat:'Eveniment',
    desc:'Site pentru conferința Timișoara Model United Nations — înscrieri, program, comitete.',
    tech:['Flask','Python','HTML'], img:null,
    live:null, repo:null, since:'2025-10-06', priv:true },

  { slug:'portofoliu', title:'Portofoliu', cat:'Personal',
    desc:'Acest portofoliu — temă „ivory estate × spray", cu animații, grafice și status live.',
    tech:['HTML','CSS','JS'], img:null,
    live:'https://moldluca.github.io/', repo:'https://github.com/moldluca/moldluca.github.io', since:'2026-06-09' },
];

// ---------- helpers ----------
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function fmtUptime(sinceISO){
  const since = new Date(sinceISO + 'T00:00:00Z').getTime();
  const ms = Date.now() - since; if (ms < 0) return '0z';
  const s = Math.floor(ms/1000), d = Math.floor(s/86400), h = Math.floor((s%86400)/3600), m = Math.floor((s%3600)/60), sec = s%60;
  const p = n => String(n).padStart(2,'0');
  return `${d}z ${p(h)}:${p(m)}:${p(sec)}`;
}

// ---------- custom cursor ----------
const cursor = document.getElementById('cursor');
if (cursor && matchMedia('(hover:hover)').matches) {
  addEventListener('mousemove', e => { cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`; });
}
function bindCursor(el){ el.addEventListener('mouseenter',()=>cursor?.classList.add('big')); el.addEventListener('mouseleave',()=>cursor?.classList.remove('big')); }
document.querySelectorAll('a,.btn').forEach(bindCursor);

// ---------- render project cards ----------
const grid = document.getElementById('grid');
const ordered = [...PROJECTS].sort((a,b) => (b.featured?1:0) - (a.featured?1:0));
ordered.forEach(p => {
  const card = document.createElement('article');
  card.className = 'card reveal' + (p.featured ? '' : ' extra');
  const initials = p.title.replace(/[^A-Za-zĂÂÎȘȚ]/g,'').slice(0,2).toUpperCase() || '#';
  const thumb = p.img
    ? `<div class="thumb"><span class="cat-tag">${esc(p.cat)}</span><img src="${esc(p.img)}" alt="Screenshot ${esc(p.title)}" loading="lazy"></div>`
    : `<div class="thumb noimg"><span class="cat-tag">${esc(p.cat)}</span>${initials}</div>`;
  const tags = p.tech.map(t => `<span class="tag">${esc(t)}</span>`).join('');
  const statusInit = p.priv ? 'private' : 'offline';
  const statusLabel = p.priv ? 'Intern' : 'verific…';
  const liveLink = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ live</a>` : `<span class="disabled">→ indisponibil</span>`;
  const repoLink = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ cod</a>` : '';
  card.innerHTML = `
    ${thumb}
    <div class="card-body">
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="tags">${tags}</div>
      <div class="status ${statusInit}" data-slug="${p.slug}"><span class="led"></span><span class="status-label">${statusLabel}</span><span class="uptime"></span></div>
      <div class="links">${liveLink}${repoLink}</div>
    </div>`;
  grid.appendChild(card);
  p._statusEl = card.querySelector('.status');
  bindCursor(card);
});

document.getElementById('year').textContent = new Date().getFullYear();

// ---------- radar chart ----------
(function buildRadar(){
  const svg = document.getElementById('radar'); if(!svg) return;
  const skills = [
    {l:'Frontend',v:90},{l:'Backend',v:85},{l:'CAD / 3D',v:82},
    {l:'Robotică',v:85},{l:'Design',v:80},{l:'Leadership',v:88},
  ];
  const cx=160, cy=160, R=118, n=skills.length;
  const ang = i => (-90 + i*360/n) * Math.PI/180;
  const pt = (i,r) => [cx + Math.cos(ang(i))*r, cy + Math.sin(ang(i))*r];
  let s='';
  for(let g=1; g<=4; g++){
    const r=R*g/4; let d='';
    for(let i=0;i<n;i++){ const [x,y]=pt(i,r); d += (i?'L':'M')+x.toFixed(1)+','+y.toFixed(1)+' '; }
    s += `<path class="ring" d="${d}Z"/>`;
  }
  for(let i=0;i<n;i++){
    const [x,y]=pt(i,R); s += `<line class="axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`;
    const [lx,ly]=pt(i,R+18);
    const anchor = Math.abs(lx-cx)<5 ? 'middle' : (lx>cx ? 'start' : 'end');
    s += `<text class="lab" x="${lx.toFixed(1)}" y="${(ly+4).toFixed(1)}" text-anchor="${anchor}">${skills[i].l}</text>`;
  }
  let d='';
  skills.forEach((sk,i)=>{ const [x,y]=pt(i,R*sk.v/100); d += (i?'L':'M')+x.toFixed(1)+','+y.toFixed(1)+' '; });
  s += `<path class="area" d="${d}Z"/>`;
  skills.forEach((sk,i)=>{ const [x,y]=pt(i,R*sk.v/100); s += `<circle class="pt" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5"/>`; });
  svg.innerHTML = s;
})();

// ---------- reveal + animate on scroll ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll?.('.bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
    const area = e.target.querySelector?.('.radar .area'); if(area) area.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold:.15 });
document.querySelectorAll('.reveal').forEach((el,i)=>{ el.style.transitionDelay = (i%4)*60 + 'ms'; io.observe(el); });

// ---------- spray draw on load ----------
addEventListener('load', () => setTimeout(() => {
  document.querySelector('.mold-graf')?.classList.add('spraying');
}, 850));

// ---------- galerie graffiti (vandalizare → toate proiectele) ----------
const moreBtn = document.getElementById('moreBtn');
const gview = document.getElementById('gview');
const gback = document.getElementById('gback');
const sfx = document.getElementById('sfx');
const GCOLORS = ['#E6357A','#7Bd14b','#2f6df0','#ff7a1a','#46e6d0','#ffd23f'];
const gGrid = document.getElementById('gviewGrid');

if(gGrid){
  PROJECTS.forEach((p,i) => {
    const c = GCOLORS[i % GCOLORS.length];
    const initials = p.title.replace(/[^A-Za-zĂÂÎȘȚ]/g,'').slice(0,2).toUpperCase() || '#';
    const thumb = p.img
      ? `<div class="gthumb"><span class="gcat">${esc(p.cat)}</span><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy"></div>`
      : `<div class="gthumb noimg"><span class="gcat">${esc(p.cat)}</span>${initials}</div>`;
    const live = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ live</a>` : (p.priv ? '<span style="color:#9a9483">intern</span>' : '');
    const repo = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ cod</a>` : '';
    const card = document.createElement('article');
    card.className = 'gcard'; card.style.setProperty('--gc', c);
    card.innerHTML = `${thumb}<div class="gbody"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="gtags">${p.tech.map(esc).join(' · ')}</div><div class="glinks">${live}${repo}</div></div>`;
    gGrid.appendChild(card);
    bindCursor(card);
  });
}

let vTransitioning = false;
function vandalize(open){
  if(vTransitioning || !sfx) return; vTransitioning = true;
  sfx.classList.add('go');                       // canistra intră + fumul se umflă
  setTimeout(() => {                              // la fum maxim, schimbă lumea sub el
    if(open){ gview.classList.add('open'); gview.setAttribute('aria-hidden','false'); document.body.classList.add('noscroll'); gview.scrollTop = 0; }
    else { gview.classList.remove('open'); gview.setAttribute('aria-hidden','true'); document.body.classList.remove('noscroll'); }
  }, 1400);
  setTimeout(() => { sfx.classList.remove('go'); vTransitioning = false; }, 2650);  // fumul s-a risipit
}
moreBtn?.addEventListener('click', () => vandalize(true));
gback?.addEventListener('click', () => vandalize(false));
if(moreBtn) bindCursor(moreBtn);
if(gback) bindCursor(gback);

// ---------- counters ----------
function count(el){
  const to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.round(to/40));
  const node = el.childNodes[0];
  const t = setInterval(()=>{ n += step; if(n>=to){ n=to; clearInterval(t); } node.nodeValue = n; }, 26);
}
const cio = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ count(e.target); cio.unobserve(e.target); } }), { threshold:.6 });
document.querySelectorAll('[data-to]').forEach(el => { el.insertBefore(document.createTextNode('0'), el.firstChild); cio.observe(el); });

// ---------- live status check (no-cors reachability) ----------
function checkLive(url, timeout=7000){
  return new Promise(resolve => {
    const ctrl = new AbortController();
    const t = setTimeout(()=>{ ctrl.abort(); resolve(false); }, timeout);
    fetch(url, { mode:'no-cors', signal:ctrl.signal, cache:'no-store' })
      .then(()=>{ clearTimeout(t); resolve(true); }).catch(()=>{ clearTimeout(t); resolve(false); });
  });
}
async function runChecks(){
  let on = 0;
  await Promise.all(PROJECTS.map(async p => {
    const el = p._statusEl;
    if(p.priv || !p.live){ el.className='status private'; el.querySelector('.status-label').textContent='Intern'; el.querySelector('.uptime').textContent='// privat / nedeploiat'; return; }
    const up = await checkLive(p.live);
    if(up){ on++; el.className='status online'; el.querySelector('.status-label').textContent='Online'; p._online=true; }
    else { el.className='status offline'; el.querySelector('.status-label').textContent='Offline'; el.querySelector('.uptime').textContent='// momentan indisponibil'; }
  }));
  const meta = document.getElementById('proiecte-meta');
  if(meta) meta.textContent = `// ${PROJECTS.length} proiecte · ${on} online`;
  function tick(){ PROJECTS.forEach(p => { if(p._online) p._statusEl.querySelector('.uptime').textContent = '↑ ' + fmtUptime(p.since); }); }
  tick(); setInterval(tick, 1000);
}
runChecks();
