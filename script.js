// === Luca Moldovan Portfolio — Ivory Estate × Spray ===

const PROJECTS = [
  { slug:'roworlds', title:'RO Worlds Tracker', cat:'Live data',
    desc:'Live tracker for the Romanian teams at the FIRST World Championship 2026 Houston (FTC + FRC), with Web Push.',
    tech:['Node.js','FIRST API','Web Push'], img:'images/projects/roworlds.jpg',
    live:'https://worlds.perpetuummobile.tech/', repo:null, since:'2026-05-01' },

  { slug:'crocoai', title:'CrocoAI', cat:'Product / AI',
    desc:'Internal platform with an AI assistant, chat, tasks and a calendar for the Perpetuum Mobile team.',
    tech:['Node.js','Socket.IO','HTML'], img:'images/projects/crocoai.jpg',
    live:null, repo:null, since:'2026-05-03', priv:true },

  { slug:'arbori', featured:true, title:'Arbori — Traversal', cat:'Educational',
    desc:'Interactive visualization of binary tree traversal algorithms — 100 trees, with difficulty levels.',
    tech:['JavaScript','HTML','SVG'], img:'images/projects/arbori.jpg',
    live:'https://moldluca.github.io/arbori-parcurgere/',
    repo:'https://github.com/moldluca/arbori-parcurgere', since:'2026-06-09' },

  { slug:'codrea', title:'CODREA BATI', cat:'Commercial',
    desc:'Showcase website for a construction company in France (Travaux Bâtiment). Multipage, clean design.',
    tech:['HTML','CSS','JS'], img:'images/projects/codrea.jpg',
    live:'https://moldluca.github.io/codrea-bati-website/',
    repo:'https://github.com/moldluca/codrea-bati-website', since:'2026-05-07' },

  { slug:'criptare', title:'Cryptography Lab', cat:'Educational',
    desc:'Interactive educational site that teaches kids the basics of cryptography through exercises and games.',
    tech:['JavaScript','HTML','CSS'], img:'images/projects/criptare.jpg',
    live:'http://criptare.perpetuummobile.tech/',
    repo:'https://github.com/moldluca/laborator-criptare', since:'2026-05-08' },

  { slug:'arvusolutions', featured:true, title:'ArvuSolutions', cat:'AgriTech Ecosystem',
    desc:'ArvuFarm AgriTech ecosystem: autonomous robots (ArvuScan, ArvuPlant, ArvuSpider, ArvuFly) + a web platform with a 3D GeoSelect map and an agronomic AI assistant.',
    tech:['Robotics','Node.js','Leaflet','AI'], img:'images/projects/arvusolutions.jpg',
    live:'https://arvusmart.perpetuummobile.tech/', repo:null, since:'2026-04-27' },

  { slug:'trainbot', featured:true, title:'TrainBot', cat:'EdTech / AI',
    desc:'EdTech ecosystem that teaches kids (ages 7–14) AI & machine learning hands-on — iOS app (train CoreML models on-device + LLM), teacher dashboard, Node backend. Safe, GDPR-compliant.',
    tech:['iOS','CoreML','LLM','Node'], img:'images/projects/trainbot.jpg',
    live:'https://trainbot.moldluca.tech', repo:'https://github.com/moldluca/trainbot-site', since:'2026-05-02' },

  { slug:'perpetuum', featured:true, title:'Perpetuum Mobile', cat:'Robotics · FTC',
    desc:'FIRST Tech Challenge robotics team — we design, build and program a competition robot every season.',
    tech:['FTC','Robotics','CAD','Java'], img:'images/projects/perpetuum.jpg',
    live:'https://perpetuummobile.tech/', repo:'https://github.com/moldluca/PerpetuumWebsite', since:'2026-01-24' },

  { slug:'crocorobo', featured:true, title:'Crocorobo', cat:'Robotics · FLL',
    desc:'FIRST Lego League robotics team — kids build and program LEGO robots and present an innovation project.',
    tech:['FLL','LEGO','Robotics','Scratch'], img:'images/projects/crocorobo.jpg',
    live:'https://crocorobo.perpetuummobile.tech', repo:'https://github.com/moldluca/site-crocorobo', since:'2026-04-26' },

  { slug:'timisoara', featured:true, title:'Timișoara MUN', cat:'Event',
    desc:'Website for the Timișoara Model United Nations conference — registration, schedule, committees.',
    tech:['Flask','Python','HTML'], img:'images/projects/timisoara.jpg',
    live:'https://tm-mun.arpd.ro', repo:'https://github.com/moldluca/timisoara-mun', since:'2025-10-06' },
];

// long description (popup) — falls back to .desc if missing
const LONG = {
  roworlds:'Live tracker for the Romanian teams at the FIRST World Championship 2026 (Houston). Shows scores, standings and matches in real time for FTC and FRC, with Web Push notifications when a Romanian team takes the field. Data is pulled directly from the FIRST API.',
  crocoai:'Internal platform for the Perpetuum Mobile team: a conversational AI assistant, real-time team chat (Socket.IO), task management and a shared calendar. Runs on its own server (DigitalOcean).',
  arbori:'Educational app that interactively visualizes binary tree traversals — in-order, pre-order and post-order. 100 generated trees, with difficulty levels, step-by-step animation and answer checking.',
  codrea:'Showcase website for CODREA BATI, a construction company in France (Travaux Bâtiment). Multipage structure, clean responsive design, services sections, gallery and contact. A commercial project for the client.',
  criptare:'Interactive lab that teaches kids the basics of cryptography: classic ciphers (Caesar, Vigenère), hands-on exercises and games. Built for educational workshops.',
  arvusolutions:'A complete AgriTech ecosystem — ArvuFarm. Autonomous robots covering the whole agricultural cycle: ArvuScan (a tracked robot that scans the soil — NPK, pH, moisture, temperature, conductivity), ArvuPlant (a CNC planting robot with a pneumatic vacuum head), ArvuSpider (a quadruped for monitoring) and ArvuFly (a treatment drone). All orchestrated by a web platform with a 3D GeoSelect map of the plots and an agronomic AI assistant. Flow: soil data → planting → monitoring → treatment.',
  trainbot:'An EdTech ecosystem that teaches kids (ages 7–14) artificial intelligence and machine learning hands-on. An iOS app where kids train CoreML models directly on the device and interact with an LLM, a teacher dashboard and a Node.js backend. Safe and GDPR-compliant.',
  perpetuum:'The Perpetuum Mobile robotics team competes in the FIRST Tech Challenge (FTC). Every season we design, build and program a competition robot from scratch: CAD design and mechanical fabrication, electronics, and autonomous + teleoperated code in Java. We compete at regional and national level and do STEM outreach in the community.',
  crocorobo:'The Crocorobo robotics team competes in the FIRST Lego League (FLL). Kids build and program LEGO (SPIKE) robots that solve autonomous missions on the field and present a season-themed innovation project. Focused on teamwork, computational thinking and the FIRST values.',
  timisoara:'Website for the Timișoara Model United Nations conference: delegate registration, schedule, committees and information for participants. Flask/Python backend.',
};
function projImg(p){ return p.img || `images/ads/${p.slug}.jpg`; }

// ---------- helpers ----------
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function fmtUptime(sinceISO){
  const since = new Date(sinceISO + 'T00:00:00Z').getTime();
  const ms = Date.now() - since; if (ms < 0) return '0d';
  const s = Math.floor(ms/1000), d = Math.floor(s/86400), h = Math.floor((s%86400)/3600), m = Math.floor((s%3600)/60), sec = s%60;
  const p = n => String(n).padStart(2,'0');
  return `${d}d ${p(h)}:${p(m)}:${p(sec)}`;
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
  // status (live/offline) only for projects that have a site
  const statusBlock = p.live
    ? `<div class="status offline" data-slug="${p.slug}"><span class="led"></span><span class="status-label">checking…</span><span class="uptime"></span></div>`
    : '';
  const liveLink = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ live</a>` : '';
  const repoLink = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ code</a>` : '';
  card.innerHTML = `
    ${thumb}
    <div class="card-body">
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-desc">${esc(p.desc)}</p>
      <div class="tags">${tags}</div>
      ${statusBlock}
      <div class="links">${liveLink}${repoLink}</div>
    </div>`;
  grid.appendChild(card);
  p._statusEl = card.querySelector('.status');
  card.dataset.slug = p.slug;
  card.classList.add('clickable');
  card.addEventListener('click', e => { if(e.target.closest('a')) return; openProjModal(p.slug); });
  bindCursor(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
const ageEl = document.getElementById('age'); if(ageEl) ageEl.textContent = new Date().getFullYear() - 2008;  // age from birth year

// ---------- radar chart ----------
(function buildRadar(){
  const svg = document.getElementById('radar'); if(!svg) return;
  const skills = [
    {l:'JavaScript',v:90},{l:'Python',v:85},{l:'React',v:84},
    {l:'Node.js',v:88},{l:'AI / ML',v:80},{l:'CAD / 3D',v:82},
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

// ---------- projects map (city map) ----------
const moreBtn = document.getElementById('moreBtn');
const gview = document.getElementById('gview');
const gback = document.getElementById('gback');
const cityvp = document.getElementById('cityvp');
const citymap = document.getElementById('citymap');
const cityLeg = document.getElementById('cityLeg');

const LINES = [
  {key:'R', code:'M1', c:'#f7a600', label:'Robotics & live', pts:'420,340 680,560 900,660'},
  {key:'A', code:'M2', c:'#1f3f93', label:'Product / AI',    pts:'1340,800 1340,1060 1340,1320'},
  {key:'E', code:'M3', c:'#e2231a', label:'Educational',     pts:'560,800 900,800 1340,800'},
  {key:'W', code:'M4', c:'#2e8b57', label:'Web & client',    pts:'900,800 900,1120'},
  {key:'D', code:'M5', c:'#f08000', label:'Various',         pts:'900,800 1180,520'},
];
const STATIONS = [
  {slug:'roworlds',  name:'RO Worlds',     x:420,  y:340,  c:'#f7a600', lab:'t'},
  {slug:'perpetuum', name:'Perpetuum',     x:680,  y:560,  c:'#f7a600', lab:'l'},
  {slug:'crocorobo', name:'Crocorobo',     x:900,  y:660,  c:'#f7a600', lab:'r'},
  {slug:'criptare',  name:'Cryptography',  x:560,  y:800,  c:'#e2231a', lab:'l'},
  {slug:'arbori',    name:'Arbori',        x:900,  y:800,  c:'#e2231a', intc:true, lab:'t'},
  {slug:'trainbot',  name:'TrainBot',      x:1340, y:800,  c:'#1f3f93', intc:true, lab:'t'},
  {slug:'crocoai',   name:'CrocoAI',       x:1340, y:1060, c:'#1f3f93', lab:'r'},
  {slug:'arvusolutions', name:'ArvuSolutions', x:1340, y:1320, c:'#1f3f93', lab:'r'},
  {slug:'codrea',    name:'CODREA BATI',   x:900,  y:1120, c:'#2e8b57', lab:'r'},
  {slug:'timisoara', name:'Timișoara MUN', x:1180, y:520,  c:'#f08000', lab:'r'},
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
    const live = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ live</a>` : (p.priv ? '<span>internal</span>' : '');
    const repo = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ code</a>` : '';
    pins += `<div class="pin${s.intc?' intc':''} lab-${s.lab||'r'}" data-slug="${s.slug}" style="left:${s.x}px;top:${s.y}px;--c:${s.c}">`
      + `<span class="dot"></span><span class="plabel">${esc(s.name)}</span>`
      + `<div class="pcard"><h3>${esc(p.title)}</h3><div class="pc-cat">${esc(p.cat)}</div><div class="pc-tags">${p.tech.map(esc).join(' · ')}</div><div class="pc-links">${live}${repo}</div></div>`
      + `</div>`;
  });
  citymap.innerHTML = svg + pins;
  citymap.style.width = W + 'px'; citymap.style.height = H + 'px';
  if(cityLeg) cityLeg.innerHTML = LINES.map(l => `<span><i class="mpill" style="background:${l.c}">${l.code}</i> ${l.label}</span>`).join('');
}

// ---------- metro station: mini-map + ads ----------
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
  const promoSlugs = ['trainbot','arbori','timisoara'];   // first = big ad (tall)
  const phc = {trainbot:'#5b56e0', arbori:'#1f8a3b', timisoara:'#7d5ba6'};
  const promo = promoSlugs.map(s => PROJECTS.find(p => p.slug === s)).filter(Boolean);
  const adHTML = (p, cls) => {
    const ini = p.title.replace(/[^A-Za-zĂÂÎȘȚ]/g,'').slice(0,2).toUpperCase() || '#';
    const tag = p.live ? '· live' : (p.priv ? '· internal' : '');
    return `<a class="st-ad ${cls}" href="${esc(p.live||p.repo||'#')}" target="_blank" rel="noopener">`
      + `<div class="st-ad-ph" style="--phc:${phc[p.slug]||'#2a3550'}">${ini}</div>`
      + `<img class="st-ad-img" src="images/ads/${p.slug}.jpg" alt="ad ${esc(p.title)}" loading="lazy" onerror="this.remove()">`
      + `<span class="st-ad-tag">${esc(p.title)} <em>${tag}</em></span></a>`;
  };
  const big = promo[0], smalls = promo.slice(1, 3);
  stAds.innerHTML = (big ? adHTML(big, 'st-ad-tall') : '')
    + `<div class="st-ad-col">` + smalls.map(p => adHTML(p, 'st-ad-small')).join('') + `</div>`;
}

// ---------- train transition ----------
let trainBusy = false;
function trainSweep(midCb){
  if(trainBusy) return;
  if(!trainfx){ midCb(); return; }
  trainBusy = true;
  trainfx.classList.add('go');
  setTimeout(midCb, 760);
  setTimeout(() => { trainfx.classList.remove('go'); trainBusy = false; }, 1720);
}

// ---------- flow: page ⇄ station ⇄ map ----------
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
  if(projModal?.classList.contains('open')) return;
  if(gview.classList.contains('open')) closeMap();
  else if(station.classList.contains('open')) trainSweep(closeStation); });
if(moreBtn) bindCursor(moreBtn);

// ---------- drag-to-pan on the map ----------
let mapMoved = false;
if(cityvp){
  let down=false, sx=0, sy=0, sl=0, st=0;
  cityvp.addEventListener('mousedown', e => { if(e.target.closest('a,button')) return; down=true; mapMoved=false; sx=e.clientX; sy=e.clientY; sl=cityvp.scrollLeft; st=cityvp.scrollTop; cityvp.classList.add('grab'); });
  addEventListener('mouseup', () => { down=false; cityvp.classList.remove('grab'); });
  addEventListener('mousemove', e => { if(!down) return; if(Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>6) mapMoved=true; cityvp.scrollLeft = sl - (e.clientX - sx); cityvp.scrollTop = st - (e.clientY - sy); });
}

// ---------- project popup (modal) ----------
const projModal = document.getElementById('projModal');
const BYSLUG = Object.fromEntries(PROJECTS.map(p => [p.slug, p]));
function openProjModal(slug){
  const p = BYSLUG[slug]; if(!p || !projModal) return;
  const live = p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">→ view live</a>` : '';
  const repo = p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">↳ source code</a>` : '';
  const priv = (!p.live && p.priv) ? `<span class="pm-priv">internal / not deployed</span>` : '';
  const tags = p.tech.map(t => `<span class="pm-tag">${esc(t)}</span>`).join('');
  projModal.querySelector('.pm-dialog').innerHTML =
      `<button class="pm-x" data-close aria-label="Close">✕</button>`
    + `<div class="pm-media"><img src="${esc(projImg(p))}" alt="${esc(p.title)}" onerror="this.closest('.pm-media').classList.add('noimg')"><span class="pm-fallback">${esc(p.title)}</span></div>`
    + `<div class="pm-body"><span class="pm-cat">${esc(p.cat)}</span>`
    + `<h3 class="pm-title">${esc(p.title)}</h3>`
    + `<p class="pm-desc">${esc(LONG[p.slug] || p.desc)}</p>`
    + `<div class="pm-tags">${tags}</div>`
    + `<div class="pm-links">${live}${repo}${priv}</div></div>`;
  projModal.classList.add('open'); projModal.setAttribute('aria-hidden','false');
  document.body.classList.add('noscroll');
}
function closeProjModal(){ if(!projModal) return; projModal.classList.remove('open'); projModal.setAttribute('aria-hidden','true');
  if(!station.classList.contains('open') && !gview.classList.contains('open')) document.body.classList.remove('noscroll'); }
projModal?.addEventListener('click', e => { if(e.target.closest('[data-close]') || e.target.classList.contains('pm-backdrop')) closeProjModal(); });
citymap?.addEventListener('click', e => { const pin = e.target.closest('.pin'); if(!pin || e.target.closest('a') || mapMoved) return; if(pin.dataset.slug) openProjModal(pin.dataset.slug); });
addEventListener('keydown', e => { if(e.key === 'Escape' && projModal?.classList.contains('open')) closeProjModal(); });

// ---------- counters ----------
function count(el){
  const to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.round(to/40));
  const node = el.childNodes[0];
  const t = setInterval(()=>{ n += step; if(n>=to){ n=to; clearInterval(t); } node.nodeValue = n; }, 26);
}
document.getElementById('stat-proj')?.setAttribute('data-to', PROJECTS.length);  // project count = automatic
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
    if(!p.live || !el) return;   // no site → no status
    const up = await checkLive(p.live);
    if(up){ on++; el.className='status online'; el.querySelector('.status-label').textContent='Online'; p._online=true; }
    else { el.className='status offline'; el.querySelector('.status-label').textContent='Offline'; el.querySelector('.uptime').textContent='// currently unavailable'; }
  }));
  const meta = document.getElementById('proiecte-meta');
  if(meta) meta.textContent = `// ${PROJECTS.length} projects · ${on} online`;
  function tick(){ PROJECTS.forEach(p => { if(p._online) p._statusEl.querySelector('.uptime').textContent = '↑ ' + fmtUptime(p.since); }); }
  tick(); setInterval(tick, 1000);
}
runChecks();
