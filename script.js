const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})



//--------------------------Des And Dev Interface-----------------------------------

// var screenWidth = screen.width - 100;
// var faceLeft = document.getElementById("faceLeft");
// var faceRight = document.getElementById("faceRight"); 
// var faces = document.getElementById("faces");
// let fourthWidth = (screenWidth/4)
// faceLeft.style.width = fourthWidth;
// faceRight.style.width = fourthWidth;

// var bodyElement = document.querySelector("body");
// bodyElement.addEventListener("mousemove",changeFace,false);

// var pervX = 0;
// var maxWidth = screenWidth/2;
// function changeFace(e){
//     var xDirection  = getMouseDirection(e);
//     var faceLeftWidth = faceLeft.offsetWidth;
//     var faceRightWidth = faceRight.offsetWidth;
//     if(xDirection == "left"){
//         moveRight(faceLeftWidth,faceRightWidth); 
//     }
//     else{
//         moveLeft(faceLeftWidth, faceRightWidth);
//     }
// }

// function moveLeft(faceLeftWidth, faceRightWidth){
//     if(faceRightWidth<maxWidth){
//         faceRight.style.width = faceRightWidth+10+"px";
//         faceLeft.style.width = faceLeftWidth-10+"px";

//         var percentage = getPercentage(faceLeftWidth, fourthWidth)/100;
//         document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;
        
//         var percentage = getPercentage(faceRightWidth, fourthWidth/4)/100;
//         document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

//         var picPos = faces.offsetLeft;
//         maxLeft = 150;
//         if(picPos>maxLeft){
//             faces.style.left = picPos-4+"px";
//         }
//     }
// }

// function moveRight(faceLeftWidth, faceRightWidth){
//     if(faceLeftWidth<maxWidth){
//         faceLeft.style.width = faceLeftWidth+10+"px";
//         faceRight.style.width = faceRightWidth-10+"px";

//         var percentage = getPercentage(faceLeftWidth, fourthWidth)/100;
//         document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;
        
//         var percentage = getPercentage(faceRightWidth, fourthWidth)/100;
//         document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

//         var picPos = faces.offsetLeft;
//         var maxRight = maxWidth-150;
//         if(picPos<maxRight){
//             faces.style.left = picPos+4+"px";
//         }
//     }
// }

// function getPercentage(width, total){
//     return (width*100)/total;
// }

// function getMouseDirection(e){
//     var dir;
//     currentX = e.pageX;
//     if(pervX<currentX){
//         dir = "right";
//     }
//     else{
//         dir = "left";
//     }
//     pervX = currentX;
//     return dir;
// }

const container = document.getElementById("container");
const faceLeft = document.getElementById("faceLeft");
const faceRight = document.getElementById("faceRight");
const faces = document.getElementById("faces");

let containerWidth = container.clientWidth - 20;
let fourthWidth = containerWidth / 4;
let maxWidth = containerWidth / 2;

faceLeft.style.width = fourthWidth + "px";
faceRight.style.width = fourthWidth + "px";

let prevX = 0;

container.addEventListener("mousemove", changeFace, false);

function changeFace(e) {
    const rect = container.getBoundingClientRect();
    const currentX = e.clientX - rect.left; 

    const direction = currentX > prevX ? "right" : "left";

    const faceLeftWidth = faceLeft.offsetWidth;
    const faceRightWidth = faceRight.offsetWidth;

    if (direction === "left") {
        moveRight(faceLeftWidth, faceRightWidth);
    } else {
        moveLeft(faceLeftWidth, faceRightWidth);
    }

    prevX = currentX;
}

function moveLeft(faceLeftWidth, faceRightWidth) {
    if (faceRightWidth < maxWidth && faceLeftWidth > 20) {
        faceRight.style.width = faceRightWidth + 10 + "px";
        faceLeft.style.width = faceLeftWidth - 10 + "px";

        updateTextOpacity(faceLeftWidth, faceRightWidth);

        moveFaces(-4);
    }
}

function moveRight(faceLeftWidth, faceRightWidth) {
    if (faceLeftWidth < maxWidth && faceRightWidth > 20) {
        faceLeft.style.width = faceLeftWidth + 10 + "px";
        faceRight.style.width = faceRightWidth - 10 + "px";

        updateTextOpacity(faceLeftWidth, faceRightWidth);

        moveFaces(4);
    }
}

function updateTextOpacity(leftWidth, rightWidth) {
    const p1 = getPercentage(leftWidth, fourthWidth) / 100;
    const p2 = getPercentage(rightWidth, fourthWidth) / 100;

    document.getElementById("text1").style.opacity = p1 > 0.2 ? p1 : 0;
    document.getElementById("text2").style.opacity = p2 > 0.2 ? p2 : 0;
}

function moveFaces(amount) {
    const currentLeft = faces.offsetLeft;
    const minLeft = 0;
    const maxLeft = maxWidth - 150;

    let newLeft = currentLeft + amount;
    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));

    faces.style.left = newLeft + "px";
}

function getPercentage(width, total) {
    return (width * 100) / total;
}
