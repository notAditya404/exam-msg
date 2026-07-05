const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const countdownSection = document.getElementById("countdownSection");
const memorySection = document.getElementById("memorySection");
const finalSection = document.getElementById("finalSection");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const memoryBtn = document.getElementById("memoryBtn");
const finalBtn = document.getElementById("finalBtn");
const confettiBtn = document.getElementById("confettiBtn");

const typewriter = document.getElementById("typewriter");

const letterText = `Good Morning Baby ☀️

Aaj ka din bahut special hai.

Mujhe pata hai tum thodi nervous hogi...

Lekin mujhe tum par poora bharosa hai. ❤️

Pichhle 2.5 saal mein maine tumhe bahut closely dekha hai.

Tum kitni sincere ho.

Kitni pyaari ho.

Aur sabse zyada...

Tumhari smile meri favourite hai. 😊

Aaj sirf ek exam nahi hai.

Ye tumhare dream ki taraf ek aur kadam hai.

Ek amazing UI/UX Designer banne ka.

Agar kabhi paper ke beech nervous feel ho...

Bas meri ek baat yaad rakhna...

❤️ "Aap kr loge." ❤️

Deep breath lena...

Smile karna...

Aur apna best dena.

Main hamesha tumhare saath hoon.

I love you. ❤️

— Aditya (Ado)`;

let i = 0;

function typeEffect() {
    if (i < letterText.length) {
        typewriter.innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeEffect, 35);
    }
}

startBtn.onclick = () => {
    welcome.classList.add("hidden");
    letter.classList.remove("hidden");
    typeEffect();
};

nextBtn.onclick = () => {
    letter.classList.add("hidden");
    countdownSection.classList.remove("hidden");
};

memoryBtn.onclick = () => {
    countdownSection.classList.add("hidden");
    memorySection.classList.remove("hidden");
};

finalBtn.onclick = () => {
    memorySection.classList.add("hidden");
    finalSection.classList.remove("hidden");
};

function updateCountdown(){

const target = new Date();

target.setHours(12);
target.setMinutes(30);
target.setSeconds(0);

const now = new Date();

let diff = target - now;

if(diff<0){
diff=0;
}

const hours=Math.floor(diff/(1000*60*60));

const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

const seconds=Math.floor((diff%(1000*60))/1000);

document.getElementById("hours").textContent=String(hours).padStart(2,"0");
document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);
updateCountdown();

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,350);

confettiBtn.onclick=()=>{

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

setTimeout(()=>{
alert("❤️ Best of Luck Pinki ❤️\n\nGo make your dream come true.\n\nI know you can do it.\n\nLove,\nAditya (Ado)");
},600);

};
