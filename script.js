const screens=[1,2,3].reduce((o,n)=>(o[n]=document.getElementById("screen"+n),o),{});
function show(n){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[n].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(n===3){typeMessage(); burst(); }
}

const yes=document.getElementById("yesBtn"), no=document.getElementById("noBtn"), hint=document.getElementById("noMessage");
yes.onclick=()=>{burst();show(2)};

function escapeNo(){
  no.style.position="fixed";
  const x=Math.max(8,Math.random()*(innerWidth-no.offsetWidth-16));
  const y=Math.max(8,Math.random()*(innerHeight-no.offsetHeight-16));
  no.style.left=x+"px"; no.style.top=y+"px";
  hint.textContent=["Hmm… NO is unavailable today. 😂","Nice try! The NO button has left the chat. 😌","Wrong answer, Bhagini. 😏💕","The universe says YES. ✨"][Math.floor(Math.random()*4)];
}
no.addEventListener("mouseenter",escapeNo);
no.addEventListener("touchstart",e=>{e.preventDefault();escapeNo()});
no.addEventListener("click",e=>{e.preventDefault();escapeNo()});

document.getElementById("revealBtn").onclick=()=>show(3);
document.getElementById("restartBtn").onclick=()=>show(1);

const text="I love you, my respected, आदरणीय, पूजनीय, respected भगिनी. ❤️";
let timer;
function typeMessage(){
  clearInterval(timer);
  const el=document.getElementById("message");el.textContent="";
  let i=0;
  timer=setInterval(()=>{el.textContent=text.slice(0,++i);if(i>=text.length)clearInterval(timer)},45);
}

function burst(){
  const c=document.getElementById("confetti"),ctx=c.getContext("2d");
  c.width=innerWidth;c.height=innerHeight;
  const pieces=Array.from({length:100},()=>({x:innerWidth/2,y:innerHeight*.3,vx:(Math.random()-.5)*11,vy:-Math.random()*10-3,g:0.25,s:4+Math.random()*6,a:1}));
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p=>{p.x+=p.vx;p.vy+=p.g;p.y+=p.vy;p.a-=.008;ctx.globalAlpha=Math.max(0,p.a);ctx.font=p.s*3+"px serif";ctx.fillText(["💕","✨","🎀","🌸","💖"][Math.floor(Math.random()*5)],p.x,p.y)});
    frame++; if(frame<150)requestAnimationFrame(draw); else ctx.clearRect(0,0,c.width,c.height);
  } draw();
}
addEventListener("resize",()=>{const c=document.getElementById("confetti");c.width=innerWidth;c.height=innerHeight});
