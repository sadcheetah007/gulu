const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const funny = document.getElementById("funny");

const msgs = [
  "Nice try",
  "Wrong choice",
  "No is disabled",
  "System override",
  "Access denied",
  "Try again",
  "Not permitted",
  "Control belongs to gulu"
];

noBtn.addEventListener("mouseover", move);
noBtn.addEventListener("click", move);

function move(){
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  funny.innerText = msgs[Math.floor(Math.random()*msgs.length)];
}

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
