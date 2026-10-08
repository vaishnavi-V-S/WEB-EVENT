const CONFIG={registrationURL:'https://forms.gle/k9i8jBswSTLhjer68',eventDate:'2026-10-13T09:30:00+05:30',roundSchedule:[{start:'2026-10-13T10:00:00+05:30',end:'2026-10-13T11:30:00+05:30'},{start:'2026-10-13T11:45:00+05:30',end:'2026-10-13T13:30:00+05:30'},{start:'2026-10-13T14:00:00+05:30',end:'2026-10-13T15:30:00+05:30'}],collegeEmail:'klebbaank@gmail.com',collegePhone:'8550028808',coordinatorPhone:'7022894308',qrImageURL:'assets/images/registration-qr.png',canonicalURL:'https://example.com/promptpreneur/',socialURLs:{instagram:'',facebook:'',linkedin:''}};
// Replaceable editorial Unsplash images plus the supplied college photos.
const EVENT_IMAGES=[
{url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85',title:'Ideas are better together',category:'teamwork',tag:'TEAMWORK'},
{url:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1800&q=85',title:'A new intelligence',category:'ai',tag:'ARTIFICIAL INTELLIGENCE'},
{url:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85',title:'Build on each other’s thinking',category:'teamwork',tag:'TEAMWORK'},
{url:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85',title:'Make the idea real',category:'innovation',tag:'INNOVATION'},
{url:'assets/images/college-campus-front.png',title:'KLE Society’s BBA College Ankali — front entrance',category:'campus',tag:'BBA COLLEGE / ANKALI'},
{url:'https://images.unsplash.com/photo-1503428593586-e225b39bfd8a?auto=format&fit=crop&w=1800&q=85',title:'A moment worth celebrating',category:'winners',tag:'CELEBRATION'},
{url:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=85',title:'Create what comes next',category:'innovation',tag:'INNOVATION'},
{url:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85',title:'Think beyond the prompt',category:'ai',tag:'DIGITAL FUTURES'},
{url:'assets/images/college-host-campus.png',title:'KLE Society’s BBA College Ankali — elevated campus view',category:'campus',tag:'HOST CAMPUS'}];
const GALLERY_IMAGES=EVENT_IMAGES.concat([

{url:'assets/images/promptpreneur-poster-ideas.jpeg',title:'PROMPTPRENEUR — Think, Prompt, Build, Lead',category:'innovation',tag:'EVENT ART',poster:true},
{url:'assets/images/promptpreneur-poster-lightbulb.jpeg',title:'PROMPTPRENEUR — Your Ideas Can Build What’s Next',category:'ai',tag:'EVENT ART',poster:true},
{url:'assets/images/promptpreneur-event-flyer.jpeg',title:'PROMPTPRENEUR — Registration Flyer',category:'campus',tag:'EVENT FLYER',poster:true}

]);
const HERO_SLIDES=[{image:EVENT_IMAGES[0].url,title:'IDEAS ARE BETTER TOGETHER',label:'TEAMWORK / 01'},{image:EVENT_IMAGES[1].url,title:'A NEW INTELLIGENCE',label:'ARTIFICIAL INTELLIGENCE / 02'},{image:EVENT_IMAGES[3].url,title:'MAKE THE IDEA REAL',label:'INNOVATION / 03'},{image:EVENT_IMAGES[6].url,title:'CREATE WHAT COMES NEXT',label:'ENTREPRENEURSHIP / 04'}];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const header=$('.site-header'),nav=$('.nav'),toggle=$('.menu-toggle');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');document.body.classList.remove('menu-open')}
toggle.addEventListener('click',()=>{let open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open)});
$$('.nav a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));
let sections=$$('main section[id]'), pending=false;
function scrollState(){header.classList.toggle('scrolled',scrollY>30);let current=sections.slice().reverse().find(s=>s.getBoundingClientRect().top<=150);$$('.nav a[href^="#"]').forEach(a=>a.classList.toggle('active',!!current&&a.hash==='#'+current.id));pending=false}
addEventListener('scroll',()=>{if(!pending){requestAnimationFrame(scrollState);pending=true}},{passive:true});scrollState();
let revealItems=$$('.feature-card,.why-grid article,.round-card,.schedule-list article,.rules-list>div,.gallery-item,.contact-cards>a');revealItems.forEach(x=>x.classList.add('reveal'));
if('IntersectionObserver'in window){let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});revealItems.forEach(x=>io.observe(x))}else revealItems.forEach(x=>x.classList.add('visible'));
// Four-slide hero carousel: automatic, buttons, dots and captions.
let hero=$('.hero'),photo=$('.hero-photo'),ctrl=document.createElement('div');ctrl.className='hero-slider-controls';ctrl.setAttribute('aria-label','Hero image slider');ctrl.innerHTML='<button class="hero-prev" aria-label="Previous slide">←</button><div class="hero-dots"></div><button class="hero-next" aria-label="Next slide">→</button><span class="hero-caption"></span>';hero.append(ctrl);
let dots=$('.hero-dots'),caption=$('.hero-caption'),slideIndex=0;
HERO_SLIDES.forEach((s,i)=>{let b=document.createElement('button');b.className='hero-dot';b.setAttribute('aria-label','Show slide '+(i+1));b.addEventListener('click',()=>showSlide(i));dots.append(b)});
function showSlide(i){slideIndex=(i+HERO_SLIDES.length)%HERO_SLIDES.length;let s=HERO_SLIDES[slideIndex];photo.style.backgroundImage='linear-gradient(90deg,#080a14 0%,rgba(8,10,20,.97) 23%,rgba(8,10,20,.69) 55%,rgba(8,10,20,.28) 100%),linear-gradient(0deg,#080a14,transparent 45%),url("'+s.image.replace('w=1800','w=2200')+'")';caption.innerHTML='<b>'+s.label+'</b><span>'+s.title+'</span>';Array.from(dots.children).forEach((d,j)=>{d.classList.toggle('active',j===slideIndex);d.setAttribute('aria-current',String(j===slideIndex))})}
$('.hero-prev').addEventListener('click',()=>showSlide(slideIndex-1));$('.hero-next').addEventListener('click',()=>showSlide(slideIndex+1));showSlide(0);let slideTimer=reduced?null:setInterval(()=>showSlide(slideIndex+1),4500);hero.addEventListener('mouseenter',()=>{if(slideTimer)clearInterval(slideTimer)});hero.addEventListener('mouseleave',()=>{if(!reduced){if(slideTimer)clearInterval(slideTimer);slideTimer=setInterval(()=>showSlide(slideIndex+1),4500)}});
// Small canvas network effect, disabled when reduced motion is requested.
let canvas=$('#particles'),ctx=canvas.getContext('2d'),particles=[];
function resizeParticles(){let r=hero.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);canvas.width=r.width*d;canvas.height=r.height*d;ctx.setTransform(d,0,0,d,0,0);particles=Array.from({length:Math.min(48,Math.floor(r.width/24))},()=>({x:Math.random()*r.width,y:Math.random()*r.height,r:Math.random()*1.4+.4,v:Math.random()*.2+.05}))}
function draw(){let w=canvas.width/Math.min(devicePixelRatio||1,2),h=canvas.height/Math.min(devicePixelRatio||1,2);ctx.clearRect(0,0,w,h);particles.forEach((p,i)=>{p.y-=p.v;if(p.y<0){p.y=h;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle='rgba(133,225,255,.68)';ctx.fill();for(let j=i+1;j<particles.length;j++){let q=particles[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<105){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle='rgba(123,150,255,'+((1-d/105)*.12)+')';ctx.stroke()}}});if(!reduced)requestAnimationFrame(draw)}
resizeParticles();if(!reduced)draw();addEventListener('resize',resizeParticles,{passive:true});
// Rotating Unsplash photo backdrops, selected to match each section's event theme.
const sectionImageSets = {
  challenge: [EVENT_IMAGES[1].url, EVENT_IMAGES[6].url, EVENT_IMAGES[7].url],
  rounds: [EVENT_IMAGES[1].url, EVENT_IMAGES[3].url, EVENT_IMAGES[2].url],
  schedule: [EVENT_IMAGES[0].url, EVENT_IMAGES[4].url, EVENT_IMAGES[6].url]
};
const themedBackdrops = Object.entries(sectionImageSets).map(([id, images]) => {
  const section = document.getElementById(id);
  let layer = id === 'challenge' ? section.querySelector('.manifesto-image') : null;
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'section-backdrop';
    layer.setAttribute('aria-hidden', 'true');
    section.prepend(layer);
  }
  const shade = id === 'challenge' ? '' : 'linear-gradient(110deg, rgba(8,10,20,.70), rgba(8,10,20,.62)), ';
  layer.style.backgroundImage = shade + 'url("' + images[0] + '")';
  layer.style.transition = 'opacity 1.2s ease';
  return { layer, images, shade, index: 0 };
});
const generalSections = Array.from(document.querySelectorAll('.section, .countdown-section, .qr-section, .contact-section')).filter(section => !['rounds', 'schedule'].includes(section.id));
const sectionBackdrops = generalSections.map((section, index) => {
  const layer = document.createElement('div');
  layer.className = 'section-backdrop';
  layer.setAttribute('aria-hidden', 'true');
  section.prepend(layer);
  layer.style.backgroundImage = 'linear-gradient(110deg, rgba(8,10,20,.86), rgba(8,10,20,.76)), url("' + EVENT_IMAGES[index % EVENT_IMAGES.length].url + '")';
  return layer;
});
let backgroundStep = 0;
if (!reduced) window.setInterval(() => {
  backgroundStep = (backgroundStep + 1) % EVENT_IMAGES.length;
  sectionBackdrops.forEach((layer, index) => {
    layer.style.opacity = '0';
    window.setTimeout(() => {
      const image = EVENT_IMAGES[(index + backgroundStep) % EVENT_IMAGES.length].url;
      layer.style.backgroundImage = 'linear-gradient(110deg, rgba(8,10,20,.86), rgba(8,10,20,.76)), url("' + image + '")';
      layer.style.opacity = '1';
    }, 450);
  });
  themedBackdrops.forEach(item => {
    item.layer.style.opacity = '0';
    window.setTimeout(() => {
      item.index = (item.index + 1) % item.images.length;
      item.layer.style.backgroundImage = item.shade + 'url("' + item.images[item.index] + '")';
      item.layer.style.opacity = '1';
    }, 450);
  });
}, 5000);

function countdownParts(remaining){
  if(!Number.isFinite(remaining))return ['—','—','—','—'];
  const totalSeconds=Math.max(0,Math.ceil(remaining/1000));
  return [Math.floor(totalSeconds/86400),Math.floor(totalSeconds/3600)%24,Math.floor(totalSeconds/60)%60,totalSeconds%60].map(value=>String(value).padStart(2,'0'));
}
function updateTimer(element,remaining){
  const values=countdownParts(remaining);
  element.querySelectorAll('[data-unit]').forEach((unit,index)=>{unit.textContent=values[index]});
}
function updateStatus(element,message){
  if(element.textContent!==message)element.textContent=message;
}
function countdown(){
  const now=Date.now(),eventStart=new Date(CONFIG.eventDate).getTime();
  updateTimer($('.countdown'),eventStart-now);
  updateStatus($('#event-countdown-status'),!Number.isFinite(eventStart)?'Event date and time to be announced.':now>=eventStart?'THE CHALLENGE HAS BEGUN!':'COUNTING DOWN TO EVENT DAY');
  $$('.round-card').forEach((card,index)=>{
    const schedule=CONFIG.roundSchedule[index];
    const start=new Date(schedule?.start).getTime(),end=new Date(schedule?.end).getTime();
    const valid=Number.isFinite(start)&&Number.isFinite(end)&&end>start;
    const state=!valid?'unannounced':now<start?'upcoming':now<end?'live':'completed';
    const remaining=!valid?NaN:state==='upcoming'?start-now:state==='live'?end-now:0;
    card.dataset.state=state;
    updateTimer(card.querySelector('.round-countdown'),remaining);
    updateStatus(card.querySelector('.round-countdown-status'),{unannounced:'Schedule to be announced',upcoming:'Starts in',live:'Round in progress · ends in',completed:'Round completed'}[state]);
  });
}
countdown();setInterval(countdown,1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)countdown()});
// Gallery filtering and keyboard accessible lightbox.
// Gallery cards plus an autoplaying slideshow of the three supplied event posters.
let grid=$('#gallery-grid');
const posterSlides=GALLERY_IMAGES.filter(im=>im.poster);
const galleryPhotos=GALLERY_IMAGES.filter(im=>!im.poster);
galleryPhotos.forEach((im,i)=>{
  let b=document.createElement('button');b.type='button';
  b.className='gallery-item'+(im.category==='campus'?' gallery-campus':'');
  b.dataset.category=im.category;
  b.innerHTML='<img loading="lazy" src="'+im.url+'" alt="'+im.title+'"><span class="gallery-caption"><small>'+im.tag+'</small>'+im.title+'</span>';
  b.setAttribute('aria-label','Open gallery image: '+im.title);
  b.addEventListener('click',()=>openBox(GALLERY_IMAGES.indexOf(im)));
  grid.append(b)
});
let posterPosition=0;
let posterCard=document.createElement('button');posterCard.type='button';
posterCard.className='gallery-item gallery-poster';posterCard.dataset.category='posters';
posterCard.innerHTML='<img class="poster-slide-image" loading="eager" src="'+posterSlides[0].url+'" alt="'+posterSlides[0].title+'"><span class="gallery-caption"><small>'+posterSlides[0].tag+' · AUTO SLIDESHOW</small>'+posterSlides[0].title+'</span>';
posterCard.setAttribute('aria-label','Open current event poster');
posterCard.addEventListener('click',()=>openBox(GALLERY_IMAGES.indexOf(posterSlides[posterPosition])));
grid.prepend(posterCard);
function showPosterSlide(){
  posterPosition=(posterPosition+1)%posterSlides.length;
  const im=posterSlides[posterPosition], image=posterCard.querySelector('img'), caption=posterCard.querySelector('.gallery-caption');
  image.classList.add('changing');
  window.setTimeout(()=>{image.src=im.url;image.alt=im.title;caption.innerHTML='<small>'+im.tag+' · AUTO SLIDESHOW</small>'+im.title;image.classList.remove('changing')},180);
}
if(!reduced)window.setInterval(showPosterSlide,1000);
$$('.gallery-filters button').forEach(b=>b.addEventListener('click',()=>{
  $$('.gallery-filters button').forEach(x=>x.classList.toggle('active',x===b));
  $$('.gallery-item').forEach(x=>x.hidden=b.dataset.filter!=='all'&&x.dataset.category!==b.dataset.filter);
  posterCard.hidden=b.dataset.filter!=='all'&&!posterSlides.some(im=>im.category===b.dataset.filter);
}));
let box=$('#lightbox'),boxImg=box.querySelector('figure img'),boxCap=box.querySelector('figcaption'),shown=[],boxIndex=0,focusBefore=null;
function openBox(i){let f=$('.gallery-filters .active').dataset.filter;shown=GALLERY_IMAGES.filter(x=>f==='all'||x.category===f);boxIndex=shown.indexOf(GALLERY_IMAGES[i]);focusBefore=document.activeElement;updateBox();box.classList.add('open');box.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('.lightbox-close').focus()}
function updateBox(){let x=shown[boxIndex];if(x){boxImg.src=x.url;boxImg.alt=x.title;boxCap.textContent=x.title+' — '+x.tag}}
function closeBox(){box.classList.remove('open');box.setAttribute('aria-hidden','true');document.body.style.overflow='';if(focusBefore)focusBefore.focus()}
function moveBox(n){boxIndex=(boxIndex+n+shown.length)%shown.length;updateBox()}
$('.lightbox-close').addEventListener('click',closeBox);$('.lightbox-prev').addEventListener('click',()=>moveBox(-1));$('.lightbox-next').addEventListener('click',()=>moveBox(1));box.addEventListener('click',e=>{if(e.target===box)closeBox()});document.addEventListener('keydown',e=>{if(!box.classList.contains('open'))return;if(e.key==='Escape')closeBox();if(e.key==='ArrowLeft')moveBox(-1);if(e.key==='ArrowRight')moveBox(1)});
const qrImage=$('#qr-placeholder img'),qrLink=$('#qr-placeholder');
qrLink.href=CONFIG.registrationURL;
qrImage.addEventListener('error',()=>{
  qrImage.hidden=true;
  $('#qr-error').hidden=false;
});
qrImage.src=CONFIG.qrImageURL;
if(qrImage.complete&&!qrImage.naturalWidth)qrImage.dispatchEvent(new Event('error'));
let canonical=$('link[rel="canonical"]');if(canonical)canonical.href=CONFIG.canonicalURL;let ig=$('.social-links a[aria-label^="Instagram"]');if(CONFIG.socialURLs.instagram){ig.href=CONFIG.socialURLs.instagram;ig.target='_blank';ig.rel='noopener';ig.setAttribute('aria-label','Visit Instagram')}
