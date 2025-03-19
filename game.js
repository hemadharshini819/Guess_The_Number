var noOfLives=document.getElementById("livesNo");
var msg=document.getElementById("message");
 //  Value use when we use input tage 
var submit=document.getElementById("submit");
 
var randomnumber = Math.round(Math.random()*100);
var lives=5;
var message;
submit.onclick = () => {
    console.log(randomnumber);
    var userinput=document.getElementById("num").value;
    lives--;
    if(lives==0){
        location.href="./loss.html";
    }
    else if(userinput==randomnumber){
        location.href="./win.html";
    }
    else if(userinput>randomnumber){
         message="oops! Your guess is too high";
    }
    else if(userinput<randomnumber){
        message="oops! your guess is too low";
    }
    msg.style.display = "inherit";
    msg.innerHTML= message;
    noOfLives.innerHTML= lives;
    
};
