var a = 0;
var b = 0;
var c = 0;
var save = {
    a: a,
    b: b,
    c: c
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
if (typeof savegame.c !== "undefined") cookies = savegame.c;
    document.getElementById("c").innerHTML = c;
}
load;

function A(number){
    a = a + number;
    document.getElementById("a").innerHTML = a;
};


function buyB(){
    var bCost = Math.floor(10 * Math.pow(1.3,b));     
    if(a >= bCost){                                  
        b = b + 1;                                   
    	a = a - bCost;                         
        document.getElementById('b').innerHTML = b;  
        document.getElementById('a').innerHTML = a;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,c));       
    document.getElementById('bCost').innerHTML = nextCost;  
};

function buyC(){
    var cCost = Math.floor(10 * Math.pow(1.3,c));     
    if(b >= cCost){                                  
        c = c + 1;                                   
    	b = b - cCost;                         
        document.getElementById('c').innerHTML = c;  
        document.getElementById('b').innerHTML = b;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,c));       
    document.getElementById('cCost').innerHTML = nextCost;  
};



window.setInterval(function(){
	
	save;
	
}, 10000);
