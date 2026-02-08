const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const noMsg = document.getElementById("no-msg");

const messages = [
  "Nice try",
  "Wrong answer",
  "Not happening",
  "Try again",
  "Be serious",
  "No is disabled",
  "Decorative button",
  "System error",
  "Access denied",
  "Cute attempt"
];

/* No button behavior */
noBtn.addEventListener("mouseenter", () => {

  // move slightly, not across screen
  const x = Math.random()*60 - 30;
  const y = Math.random()*40 - 20;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // message near button
  noMsg.innerText = messages[Math.floor(Math.random()*messages.length)];
});

/* Yes click */
yesBtn.addEventListener("click", ()=>{
  document.body.innerHTML = `
    <div style="
      height:100vh;
      background:#5b0f1a;
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-family:'Playfair Display', serif;
      text-align:center;
      animation:fade 1.5s;">
      <div>
        <h1 style="font-size:42px;margin-bottom:12px;">He said yes</h1>
        <p style="font-size:18px;">Mr Parva G is officially gulu's valentine</p>
      </div>
    </div>
  `;
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes fade{
  from{opacity:0;}
  to{opacity:1;}
}`;
document.head.appendChild(style);
