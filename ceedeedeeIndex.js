var ceeDeeDeeAmount = 0

const imgDeeDee = document.getElementById("ceedeedeeImg");
const aDeeDee = document.getElementById("ceedeedee")

setTimeout(() => {
    aDeeDee.classList.add("move-up");
}, 7500);

imgDeeDee.addEventListener("click", () => {
    if(ceeDeeDeeAmount == 0){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk2.gif"
    }
    else if(ceeDeeDeeAmount == 1){
        imgDeeDee.src = "assets/ceedeedee/talk/InARow/talk3.png"
    }
    else if(ceeDeeDeeAmount == 2){
        aDeeDee.href = "ceedeedee.html"
    }
    ceeDeeDeeAmount = ceeDeeDeeAmount + 1
});

/* mmake an x that makes him move out again, ceedeedeeamount = 10 oder so */