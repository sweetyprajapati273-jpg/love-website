// Floating Hearts ❤️

function createHeart(){

    const heart = document.createElement("div");

    const hearts = ["❤️","💖","💜","🖤"];
heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";

    heart.style.fontSize = 
    Math.random() * 20 + 15 + "px";

    heart.style.animation =
    "float 5s linear";

    heart.style.zIndex = "1";

    document.body.appendChild(heart);


    setTimeout(()=>{
        heart.remove();
    },5000);
}


setInterval(createHeart,300);


// Yes Button Effect

const yesBtn = document.getElementById("yes");

yesBtn.addEventListener("click",()=>{

    document.body.innerHTML = `
    <div class="container">
        <h1>❤️ Yayyy ❤️</h1>
        <p class="message">
        You unlocked my heart 🔓<br>
        Forever starts today ✨
        </p>
    </div>
    `;

});


// No Button Escape

const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover",()=>{

    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"%";
    noBtn.style.top=Math.random()*80+"%";

});

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
