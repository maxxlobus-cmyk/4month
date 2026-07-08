const loading = document.querySelector(".loading");
const cover = document.getElementById("cover");
const story = document.getElementById("story");
const openBtn = document.getElementById("openBook");
const music = document.getElementById("music");

const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next");

let current = 0;

// Loading
setTimeout(() => {
    loading.style.display = "none";
}, 3000);

// Open Book
openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";
        story.style.display = "block";

    },600);

});

// Next Pages

nextBtns.forEach(btn => {

btn.addEventListener("click",()=>{

pages[current].classList.remove("active");

current++;

if(current<pages.length){

pages[current].classList.add("active");

}

});

});


// Relationship Timer

const startDate = new Date("2026-04-04");

function updateTimer(){

let now = new Date();

let diff = now - startDate;

let days = Math.floor(diff/(1000*60*60*24));

let hours = Math.floor(diff/(1000*60*60))%24;

let mins = Math.floor(diff/(1000*60))%60;

let secs = Math.floor(diff/1000)%60;

document.getElementById("timer").innerHTML =

`
❤️ ${days} Days <br>
${hours} Hours ${mins} Minutes ${secs} Seconds
`;

}

setInterval(updateTimer,1000);

updateTimer();


// Floating Hearts

function heart(){

const h=document.createElement("div");

h.innerHTML="❤";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-20px";

h.style.color="#ff5e95";

h.style.fontSize=(15+Math.random()*30)+"px";

h.style.opacity=.8;

h.style.pointerEvents="none";

h.style.transition="6s linear";

document.body.appendChild(h);

setTimeout(()=>{

h.style.transform="translateY(-110vh)";

h.style.opacity=0;

},100);

setTimeout(()=>{

h.remove();

},6500);

}

setInterval(heart,450);


// Music

document.body.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});


// Shooting Star

setInterval(()=>{

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="3px";

star.style.height="120px";

star.style.background="linear-gradient(white,transparent)";

star.style.right=Math.random()*500+"px";

star.style.top="-120px";

star.style.transform="rotate(35deg)";

star.style.opacity=.8;

star.style.pointerEvents="none";

document.body.appendChild(star);

star.animate([

{transform:"translate(0,0) rotate(35deg)"},

{transform:"translate(-450px,700px) rotate(35deg)"}

],{

duration:1200

});

setTimeout(()=>{

star.remove();

},1200);

},5000);
