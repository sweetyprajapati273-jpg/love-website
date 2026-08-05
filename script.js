// ❤️ Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    const hearts = ["❤️","💖","💜","🖤"];
    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "25px";
    heart.style.zIndex = "5";
    heart.style.animation = "float 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,500);


// 💖 YES BUTTON

const yesBtn = document.getElementById("yes");

yesBtn.onclick = function(){

    document.querySelector(".container").innerHTML = `
    <h1>❤️ Yayyy ❤️</h1>
    <p class="message">
    You unlocked my heart 🔓<br>
    Forever starts today ✨
    </p>
    `;
};


// 😂 NO BUTTON

const noBtn = document.getElementById("no");

function moveNo(){
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"vw";
    noBtn.style.top=Math.random()*80+"vh";
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);
@keyframes float{
    from{
        transform:translateY(0);
        opacity:1;
    }
    to{
        transform:translateY(-110vh);
        opacity:0;
    }
}
