const images=[
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];


a=Math.floor(Math.random()*6);
b=Math.floor(Math.random()*6);


var player1=document.getElementById("p1");
var player2=document.getElementById("p2");
player1.src=images[a];
player2.src=images[b];

heading=document.getElementById("heading");
if(a>b){
    heading.innerHTML="Player 1 wins";
}
else if(a<b){
    heading.innerHTML="Player 2 wins";
}
else{
    heading.innerHTML="Draw";
}