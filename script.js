const screens=[1,2,3].reduce((o,n)=>(o[n]=document.getElementById("screen"+n),o),{});
function show(n){
  Object.values(screens).forEach(s=>s.classList.remove("active"));
  screens[n].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(n===3){typeMessage();setTimeout(()=>{const a=document.getElementById("song"); a.play().catch(()=>{});},350);}
}
const yes=document.getElementById("yesBtn"),no=document.getElementById("noBtn"),hint=document.getElementById("noMessage");
yes.onclick=()=>show(2);
function escapeNo(){
  no.style.position="fixed";
  const x=Math.max(8,Math.random()*(innerWidth-no.offsetWidth-16));
  const y=Math.max(8,Math.random()*(innerHeight-no.offsetHeight-16));
  no.style.left=x+"px";no.style.top=y+"px";
  hint.textContent=["Hmm… NO is unavailable today. 😂","Nice try! The NO button has left the chat. 😌","Wrong answer, Bhagini. 😏💕","The universe says YES. ✨"][Math.floor(Math.random()*4)];
}
no.addEventListener("mouseenter",escapeNo);
no.addEventListener("touchstart",e=>{e.preventDefault();escapeNo()});
no.addEventListener("click",e=>{e.preventDefault();escapeNo()});
document.getElementById("revealBtn").onclick=()=>show(3);
document.getElementById("restartBtn").onclick=()=>{document.getElementById("song").pause();show(1)};

const text="I love you, my Adarniya, Pujniya, Respected Bhagini. ❤️";
let timer;
function typeMessage(){
  clearInterval(timer);const el=document.getElementById("message");el.textContent="";let i=0;
  timer=setInterval(()=>{el.textContent=text.slice(0,++i);if(i>=text.length)clearInterval(timer)},38);
}


