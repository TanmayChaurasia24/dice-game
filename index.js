var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "dice" + randomNumber1 + ".png";
var imagesource1 = "images/" + image1;
var i1 = document.querySelectorAll("img")[0];
i1.setAttribute("src" , imagesource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "dice" + randomNumber2 + ".png";
var imagesource2 = "images/" + image2;
var i2 = document.querySelectorAll("img")[1];
i2.setAttribute("src" , imagesource2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "player 1 wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent = "player 2 wins";
}
else if(randomNumber2 == randomNumber1)
{
    document.querySelector("h1").textContent = "draw";
}