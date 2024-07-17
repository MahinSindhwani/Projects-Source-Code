function turnOn(){
    var bulb=document.getElementById("bulb")
    if(bulb.src.includes("off.jpg")){
    bulb.src="./assets/on.jpg";
    }
    else{
        bulb.src="./assets/off.jpg";
    }
}



//includes