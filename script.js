const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener('click', ()=>{
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})

var screenWidth = faces.offsetWidth;
var faceLeft = document.getElementById("faceLeft");
var faceRight = document.getElementById("faceRight"); 
var faces = document.querySelector("faces");
let fourthWidth = (screenWidth/4)
faceLeft.style.width = fourthWidth;
faceRight.style.width = fourthWidth;

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove",changeFace,false);

var pervX = 0;
var maxWidth = screenWidth/2;
function changeFace(e){
    var xDirection  = getMouseDirection(e);
    var faceLeftWidth = faceLeft.offsetWidth;
    var faceRightWidth = faceRight.offsetWidth;
    if(xDirection == "left"){
        moveRight(faceLeftWidth,faceRightWidth); 
    }
    else{
        moveLeft(faceLeftWidth, faceRightWidth);
    }
}

function moveLeft(faceLeftWidth, faceRightWidth){
    if(faceRightWidth<maxWidth){
        faceRight.style.width = faceRightWidth+10+"px";
        faceLeft.style.width = faceLeftWidth-10+"px";

        var percentage = getPercentage(faceLeftWidth, fourthWidth)/100;
        document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;
        
        var percentage = getPercentage(faceRightWidth, fourthWidth/4)/100;
        document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

        var picPos = faces.offsetLeft;
        maxLeft = 150;
        if(picPos>maxLeft){
            faces.style.left = picPos-4+"px";
        }
    }
}

function moveRight(faceLeftWidth, faceRightWidth){
    if(faceLeftWidth<maxWidth){
        faceLeft.style.width = faceLeftWidth+10+"px";
        faceRight.style.width = faceRightWidth-10+"px";

        var percentage = getPercentage(faceLeftWidth, fourthWidth)/100;
        document.getElementById("text1").style.opacity = percentage>0.2?percentage:0;
        
        var percentage = getPercentage(faceRightWidth, fourthWidth)/100;
        document.getElementById("text2").style.opacity = percentage>0.2?percentage:0;

        var picPos = faces.offsetLeft;
        var maxRight = maxWidth-150;
        if(picPos<maxRight){
            faces.style.left = picPos+4+"px";
        }
    }
}

function getPercentage(width, total){
    return (width*100)/total;
}

function getMouseDirection(e){
    var dir;
    currentX = e.pageX;
    if(pervX<currentX){
        dir = "right";
    }
    else{
        dir = "left";
    }
    pervX = currentX;
    return dir;
}

