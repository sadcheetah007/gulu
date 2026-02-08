// floating hearts generator
const bg = document.querySelector('.background-hearts');
for(let i=0;i<30;i++){
  const span = document.createElement('span');
  span.style.left = Math.random()*100 + "vw";
  span.style.animationDuration = (10 + Math.random()*10) + "s";
  span.style.opacity = Math.random();
  span.style.transform = `scale(${Math.random()+0.3})`;
  bg.appendChild(span);
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msgBox = document.getElementById("noMessages");

const messages = [
  "Nice try baby.",
  "Wrong choice.",
  "Try again smarty.",
  "Not allowed.",
  "Incorrect answer.",
  "System error.",
  "Access denied."
];

let i = 0;

noBtn.addEventListener("mouseenter", ()=>{
  msgBox.innerText = messages[i % messages.length];
  i++;
});

yesBtn.addEventListener("click", ()=>{
  document.body.innerHTML = `
    <div style="
      height:100vh;
      background:#5a0a14;
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      text-align:center;
      font-family:Georgia;
      flex-direction:column;
      ">
      <h1>He said yes</h1>
      <p>Mr Parva G is officially gulu's valentine</p>
    </div>
  `;
});
