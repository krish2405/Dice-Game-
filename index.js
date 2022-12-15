let randomnumber1=(Math.floor(Math.random()*6)+1)
let randomnumber2=(Math.floor(Math.random()*6)+1)
// let randomnumber1=Math.parseInt(prompt("Enetr the number between 1 to 6"))

// console.log(randomnumber1)
switch(randomnumber1)
{
    case 1:
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
}


switch(randomnumber2)
{
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
}

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="Play 1 wins";
}
else if(randomnumber1===randomnumber2){
    document.querySelector("h1").textContent="Draws";
}
else{
    document.querySelector("h1").textContent="Play 2 wins";
}