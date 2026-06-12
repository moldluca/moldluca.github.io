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

  { slug:'arvusmart', featured:true, title:'ArvuSmart', cat:'Produs / Agri',
    desc:'Platformă agricolă: frontend, GeoSelect 3D pentru parcele și asistent AI agronomic.',
    tech:['HTML','Leaflet','JS'], img:'images/projects/arvusmart.png',
    live:'https://arvusmart.perpetuummobile.tech/', repo:null, since:'2026-04-27' },

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
    live:'https://tm-mun.arpd.ro', repo:null, since:'2025-10-06' },
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

// ---------- harta proiectelor (city map) ----------
const moreBtn = document.getElementById('moreBtn');
const gview = document.getElementById('gview');
const gback = document.getElementById('gback');
const cityvp = document.getElementById('cityvp');
const citymap = document.getElementById('citymap');
const cityLeg = document.getElementById('cityLeg');

const LINES = [
  {key:'R', code:'M1', c:'#f7a600', label:'Robotică & live', pts:'620,420 840,640 1060,860'},
  {key:'A', code:'M2', c:'#1f3f93', label:'Produs / AI',     pts:'1520,460 1520,860 1520,1200'},
  {key:'E', code:'M3', c:'#e2231a', label:'Educațional',     pts:'700,860 1060,860'},
  {key:'W', code:'M4', c:'#2e8b57', label:'Web & client',    pts:'1060,860 1060,1200'},
  {key:'D', code:'M5', c:'#f08000', label:'Diverse',         pts:'1060,860 1360,560'},
];
const STATIONS = [
  {slug:'roworlds',  name:'RO Worlds',     x:620,  y:420,  c:'#f7a600', lab:'t'},
  {slug:'perpetuum', name:'Perpetuum',     x:840,  y:640,  c:'#f7a600', lab:'l'},
  {slug:'arbori',    name:'Arbori',        x:1060, y:860,  c:'#e2231a', intc:true, lab:'b'},
  {slug:'criptare',  name:'Criptare',      x:700,  y:860,  c:'#e2231a', lab:'l'},
  {slug:'trainbot',  name:'TrainBot',      x:1520, y:460,  c:'#1f3f93', lab:'r'},
  {slug:'crocoai',   name:'CrocoAI',       x:1520, y:860,  c:'#1f3f93', lab:'r'},
  {slug:'arvusmart', name:'ArvuSmart',     x:1520, y:1200, c:'#1f3f93', lab:'r'},
  {slug:'codrea',    name:'CODREA BATI',   x:1060, y:1200, c:'#2e8b57', lab:'r'},
  {slug:'timisoara', name:'Timișoara MUN', x:1360, y:560,  c:'#f08000', lab:'r'},
];

if(citymap){
  const BY = Object.fromEntries(PROJECTS.map(p => [p.slug, p]));
  const W=2000, H=1560;
  let svg = `<svg class="layer" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">`;
  LINES.forEach(l => { svg += `<polyline points="${l.pts}" fill="none" stroke="${l.c}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`; });
  svg += `</svg>`;
  let pins = '';
  STATIONS.forEach(s => {
    const p = BY[s.slug]; if(!p) return;
    const live = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ live</a>` : (p.priv ? '<span>intern</span>' : '');
    const repo = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ cod</a>` : '';
    pins += `<div class="pin${s.intc?' intc':''} lab-${s.lab||'r'}" style="left:${s.x}px;top:${s.y}px;--c:${s.c}">`
      + `<span class="dot"></span><span class="plabel">${esc(s.name)}</span>`
      + `<div class="pcard"><h3>${esc(p.title)}</h3><div class="pc-cat">${esc(p.cat)}</div><div class="pc-tags">${p.tech.map(esc).join(' · ')}</div><div class="pc-links">${live}${repo}</div></div>`
      + `</div>`;
  });
  citymap.innerHTML = svg + pins;
  citymap.style.width = W + 'px'; citymap.style.height = H + 'px';
  if(cityLeg) cityLeg.innerHTML = LINES.map(l => `<span><i class="mpill" style="background:${l.c}">${l.code}</i> ${l.label}</span>`).join('');
}

// ---------- stație de metrou: mini-hartă + reclame ----------
const station = document.getElementById('station');
const stMap = document.getElementById('stMap');
const stExit = document.getElementById('stExit');
const stMapSvg = document.getElementById('stMapSvg');
const stAds = document.getElementById('stAds');
const trainfx = document.getElementById('trainfx');

if(stMapSvg){
  const SX = 680/2000, SY = 360/1560;
  let s = '';
  LINES.forEach(l => { const sc = l.pts.split(' ').map(pt => { const [a,b] = pt.split(','); return (a*SX).toFixed(1)+','+(b*SY).toFixed(1); }).join(' ');
    s += `<polyline points="${sc}" fill="none" stroke="${l.c}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`; });
  STATIONS.forEach(st => s += `<circle cx="${(st.x*SX).toFixed(1)}" cy="${(st.y*SY).toFixed(1)}" r="${st.intc?6:4.5}" fill="#fff" stroke="${st.intc?'#111':st.c}" stroke-width="3"/>`);
  stMapSvg.innerHTML = s;
}
if(stAds){
  const promoSlugs = ['arbori','trainbot','timisoara'];
  const phc = {arbori:'#1f8a3b', trainbot:'#2a6fb0', timisoara:'#7d5ba6'};
  const promo = promoSlugs.map(s => PROJECTS.find(p => p.slug === s)).filter(Boolean);
  stAds.innerHTML = promo.map(p => {
    const ini = p.title.replace(/[^A-Za-zĂÂÎȘȚ]/g,'').slice(0,2).toUpperCase() || '#';
    const inner = p.img
      ? `<img src="${esc(p.img)}" alt="${esc(p.title)}">`
      : `<div class="st-ad-ph" style="--phc:${phc[p.slug]||'#2a3550'}">${ini}</div>`;
    const tag = p.live ? '· live' : (p.priv ? '· intern' : '');
    return `<a class="st-ad" href="${esc(p.live||p.repo||'#')}" target="_blank" rel="noopener">${inner}<span class="st-ad-tag">${esc(p.title)} <em>${tag}</em></span></a>`;
  }).join('');
}

// ---------- tranziție cu tren ----------
let trainBusy = false;
function trainSweep(midCb){
  if(trainBusy) return;
  if(!trainfx){ midCb(); return; }
  trainBusy = true;
  trainfx.classList.add('go');
  setTimeout(midCb, 760);
  setTimeout(() => { trainfx.classList.remove('go'); trainBusy = false; }, 1720);
}

// ---------- flux: pagină ⇄ stație ⇄ hartă ----------
function openStation(){ station.classList.add('open'); station.setAttribute('aria-hidden','false'); document.body.classList.add('noscroll'); }
function closeStation(){ station.classList.remove('open'); station.setAttribute('aria-hidden','true'); document.body.classList.remove('noscroll'); }
let cityT = false;
function openMap(){ if(cityT) return; cityT = true; gview.classList.add('open'); gview.setAttribute('aria-hidden','false');
  if(cityvp){ cityvp.scrollLeft = Math.max(0,(2000 - cityvp.clientWidth)/2); cityvp.scrollTop = Math.max(0,(1560 - cityvp.clientHeight)/2 + 60); } setTimeout(()=>cityT=false, 450); }
function closeMap(){ if(cityT) return; cityT = true; gview.classList.remove('open'); gview.setAttribute('aria-hidden','true'); setTimeout(()=>cityT=false, 450); }

moreBtn?.addEventListener('click', () => trainSweep(openStation));
stExit?.addEventListener('click', () => trainSweep(closeStation));
stMap?.addEventListener('click', openMap);
gback?.addEventListener('click', closeMap);
addEventListener('keydown', e => { if(e.key !== 'Escape') return;
  if(gview.classList.contains('open')) closeMap();
  else if(station.classList.contains('open')) trainSweep(closeStation); });
if(moreBtn) bindCursor(moreBtn);

// ---------- drag-to-pan pe hartă ----------
if(cityvp){
  let down=false, sx=0, sy=0, sl=0, st=0;
  cityvp.addEventListener('mousedown', e => { if(e.target.closest('a,button')) return; down=true; sx=e.clientX; sy=e.clientY; sl=cityvp.scrollLeft; st=cityvp.scrollTop; cityvp.classList.add('grab'); });
  addEventListener('mouseup', () => { down=false; cityvp.classList.remove('grab'); });
  addEventListener('mousemove', e => { if(!down) return; cityvp.scrollLeft = sl - (e.clientX - sx); cityvp.scrollTop = st - (e.clientY - sy); });
}

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
