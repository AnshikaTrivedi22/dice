var selectingDice=Math.floor((Math.random()*6)+1);
var imageofDice="dice"+selectingDice+".png";
var image2=document.querySelectorAll("img")[0];
if(selectingDice==1)
{
    image2.setAttribute("src","dice1.jpg");
}
else
image2.setAttribute("src",imageofDice);

var randomNumeber1=Math.floor((Math.random()*6)+1);
var imageSelected ="dice"+randomNumeber1+".png";
var image1= document.querySelectorAll("img")[1];
if(randomNumeber1==1)
{
   
    image1.setAttribute("src","dice1.jpg");
}
else
  image1.setAttribute("src",imageSelected);

  if(selectingDice>randomNumeber1)
  document.querySelector("h1").innerHTML="Player1 wins!";
  else
  if(selectingDice<randomNumeber1)
  document.querySelector("h1").innerHTML="Player2 wins!";
  else
  document.querySelector("h1").innerHTML="Draw!";