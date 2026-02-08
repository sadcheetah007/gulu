const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

/* messages for no */
const messages = [
  "Nice try",
  "Not happening",
  "Wrong answer",
  "Try again",
  "You thought",
  "Absolutely not",
  "Denied",
  "Error 404: No not found",
  "Be serious",
  "That button is decorative"
];

/* floating hearts */
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart-float";
  heart.innerHTML = "❤";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (12 + Math.random()*18) + "px";
  heart.style.animationDuration = (6 + Math.random()*6) + "s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),12000);
}
setInterval(createHeart,500);

/* no button runs away + message */
noBtn.onmouseover = () => {
  const x = Math.random()*(window.innerWidth-120);
  const y = Math.random()*(window.innerHeight-60);
  noBtn.style.position="absolute";
  noBtn.style.left = x+"px";
  noBtn.style.top = y+"px";

  // show message
  noBtn.innerText = messages[Math.floor(Math.random()*messages.length)];
};

/* yes click */
yesBtn.onclick = () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#5b0f1a;
      color:white;
      font-family:'Playfair Display', serif;
      text-align:center;
      animation:fade 2s;">
        <div>
          <h1 style="font-size:42px;margin-bottom:12px;">He said yes</h1>
          <p style="font-size:18px;">Mr Parva G is officially gulu's valentine</p>
        </div>
    </div>
  `;
};

/* fade animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fade{
  from{opacity:0;}
  to{opacity:1;}
}`;
document.head.appendChild(style);
