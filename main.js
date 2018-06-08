var a = 0;
var b = 0;
var save = {
    a: a,
    b: b,
}

function save(){
  localStorage.setItem("save",JSON.stringify(save));  
};

function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.a !== "undefined") cookies = savegame.a;
    document.getElementById("a").innerHTML = a;
if (typeof savegame.b !== "undefined") cookies = savegame.b;
    document.getElementById("b").innerHTML = b;
}
load;

function A(number){
    a = a + number;
    document.getElementById("a").innerHTML = a;
};


function buyB(){
    var bCost = Math.floor(10 * Math.pow(1.1,b));     
    if(a >= bCost){                                  
        b = b + 1;                                   
    	a = a - bCost;                         
        document.getElementById('b').innerHTML = b;  
        document.getElementById('a').innerHTML = a;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,b));       
    document.getElementById('bCost').innerHTML = nextCost;  
};


window.setInterval(function(){
	
	save;
	
}, 10000);
