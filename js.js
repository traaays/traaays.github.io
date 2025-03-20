var ceeDeeDeeAmount = 0

const imgDeeDee = document.getElementById("ceedeedeeImg");
const aDeeDee = document.getElementById("ceedeedee")
const xDeeDee = document.getElementById("ceedeedeeX")

setTimeout(() => {
    aDeeDee.classList.add("move-in");
}, 700);

imgDeeDee.addEventListener("click", () => {
    if(ceeDeeDeeAmount == 0){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk2.gif"
    }
    else if(ceeDeeDeeAmount == 1){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk3.png"
        xDeeDee.classList.add("move-in");
    }
    else if(ceeDeeDeeAmount == 2){
        aDeeDee.href = "ceedeedee.html"
    }
    if (ceeDeeDeeAmount <= 1){
        ceeDeeDeeAmount = ceeDeeDeeAmount + 1
    }
});

xDeeDee.addEventListener("mouseenter", () => {
    if (ceeDeeDeeAmount == 2){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk3.5.png"
    }
})
xDeeDee.addEventListener("mouseleave", () => {
    if (ceeDeeDeeAmount == 2){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk3.png"
    }
})

let frame = 0;
const framewidth = 196;
const totalframes = 40;
let animationInterval;

function startAnimation() {
    animationInterval = setInterval(() => {
        frame = (frame + 1) % totalFrames;
        document.getElementById("ceedeedeeImg").style.objectPosition = `-${frame * frameWidth}px 0px`;
    }, 100);

}

xDeeDee.addEventListener("click", () =>{
    document.getElementById('shot').play();
    ceeDeeDeeAmount = 420
    imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk4.gif"
    xDeeDee.classList.remove("move-in");
    setTimeout(() => {
        aDeeDee.classList.remove("move-in");
    }, 2600);
})

/* mmake an x that makes him move out again, ceedeedeeamount = 10 oder so */