const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// Yes button
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:linear-gradient(135deg,#ff5f9e,#ff9a9e);
            color:white;
            font-family:Arial;
            text-align:center;
        ">
            <h1 style="font-size:40px;">Yayyy!! ❤️🥹</h1>
            <h2>You've made me the happiest person! 💖</h2>
            <p>I promise to always make you smile. 🌹</p>
        </div>
    `;
});

// No button runs away
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
