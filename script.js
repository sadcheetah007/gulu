const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const funny = document.getElementById("funny");

const msgs = [
  "Nice try",
  "Wrong button",
  "Nope",
  "System error",
  "Access denied",
  "Try again budu",
  "Not allowed",
  "Bug in the system",
  "controlled by gulu"
];

noBtn.addEventListener("mouseover", move);
noBtn.addEventListener("click", move);

function move(){
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  funny.innerText = msgs[Math.floor(Math.random()*msgs.length)];
}

yesBtn.addEventListener("click", ()=>{
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background:#ff9a9e;
      color:white;
      text-align:center;
    ">
      <h1>YAYYYY</h1>
      <h2>HE SAID YESSSS🙈</h2>
      <p>you're my offciial valentine, for life💋</p>
    </div>
  `;
});

for(let i = 0; i < 10; i++){
  const heart = document.createElement("div");
  heart.classList.add("heart-floating");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.width = heart.style.height = (20 + Math.random()*20) + "px";
  heart.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(heart);
}
