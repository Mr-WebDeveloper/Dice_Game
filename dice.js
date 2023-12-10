var randomValue1 = Math.floor(Math.random()*6)+1;
var randomValue2 = Math.floor(Math.random()*6)+1;

document.querySelector("h1").style.fontSize = "6rem";

if(randomValue1 === randomValue2)
{
    document.querySelector("h1").textContent=" Draw !";
}
else if(randomValue1 > randomValue2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}
else {
    document.querySelector("h1").textContent="🚩 Player 2 Wins!";
}

var img1 = "/images/dice" + randomValue1 + ".png"
var img2 = "/images/dice" + randomValue2 + ".png"

document.querySelector(".dice .img1").setAttribute("src", img1);
document.querySelector(".dice .img2").setAttribute("src", img2);
