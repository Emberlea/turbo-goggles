canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");

var back_img="CarvsJet.gif";

var can_img="https://clipground.com/images/racetrack-number-1-clipart-20.png";

var racecar1_img="yellow-car.svg";
var car1_height=100;
var car1_width=120;
var car1_x=10;
var car1_y=10;

var racecar2_img="free-race-car-clipart-27.png";
var car2_height=100;
var car2_width=120;
var car2_x=10;
var car2_y=200;

function done(){
    back_img = new Image();
    back_img.onload = first;
    back_img.src = back_img;

    carone= new Image();
    carone.onload = second;
    carone.src = racecar1_img;

    cartwo= new Image();
    cartwo.onload = third;
    cartwo.src = racecar2_img;
}

function first(){
    ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function second(){
    ctx.drawImage(carone,car1_x,car1_y,car1_width,car1_height);
}
function third(){
    ctx.drawImage(cartwo,car2_x,car2_y,car2_width,car2_height);
}
 window.addEventListener("keydown",keydown);
 function keydown(e){
     if(car1_x>700){
         console.log("car 1 won!");
         document.getElementById("dang").innerHTML="Orange Car!";
     }
     if(car2_x>700){
         console.log("car 2 won!");
         document.getElementById("dang").innerHTML="Yellow Car!"
     }
     if(keydown=="38"){
         Up();
         console.log("uparrowkey");
     }
     if(keydown=="40"){
         Down();
         console.log("downarrowkey");
     }
     if(keydown=="37"){
         left()
         console.log("leftarrowkey");
     }
     if(keydown=="39"){
         Right()
         console.log("rightarrowkey");
     }
     if(keydown=="87"){
         W();
         console.log("w")
     }
     if(keydown=="65"){
         A();
         console.log("a");
     }
     if(keydown=="83"){
         S();
         console.log("s");
     }
     if(keydown=="68"){
         D();
         console.log("d");
     }
 }
function Up(){
    if(car1_y>=0){
        car1_y=car1_y-5;
        console.log("up arrow key was pressed: x="+car1_x+"y="+car1_y);
        first();
        second();
        third();
    }
}
function Down(){
    if(car1_y<=500){
        car1_y=car1_y+5;
        console.log("down arrow key was pressed: x="+car1_x+"y="+car1_y);
        first();
        second();
        third();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-5;
        console.log("left arrow key was pressed: x="+car1_x+"y="+car1_y);
        first();
        second();
        third();
    }
}
function Right(){
    if(car1_x<=700){
        car1_x=car1_x+5;
        console.log("right arrow key was pressed: x="+car1_x+"y="+car1_y);
        first();
        second();
        third();
    }
}
function W(){
    if(car2_y>=0){
        car2_y=car2_y-5;
        console.log("W key was pressed: x="+car2_x+"y="+car2_y);
        first();
        second();
        third();
    }
}
function S(){
    if(car2_y<=500){
        car2_y=car2_y+5;
        console.log("S key was pressed: x="+car2_x+"y="+car2_y);
        first();
        second();
        third();
    }
}
function A(){
    if(car2_x>=0){
        car2_x=car2_x-5;
        console.log("A key was pressed: x="+car2_x+"y="+car2_y);
        first();
        second();
        third();
    }
}
function D(){
    if(car2_x<=700){
        car2_x+car2_x+5;
        console.log("D key was pressed: x="+car2_x+"y="+car2_y);
        first();
        second();
        third();
    }
}
