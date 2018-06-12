var a = 0;
var wA = " A";
var b = 0;
var wB = " B";
var c = 0;
var wC = " C";
var d = 0;
var wD = " D";
var e = 0;
var wE = " E";

var save = {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    
}

function save(){
  localStorage.setItem("save",JSON.stringify(save));  
};

function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.a !== "undefined") a = savegame.a;
    document.getElementById("a").innerHTML = a;
if (typeof savegame.b !== "undefined") b = savegame.b;
    document.getElementById("b").innerHTML = b;
if (typeof savegame.c !== "undefined") c = savegame.c;
    document.getElementById("c").innerHTML = c;
if (typeof savegame.d !== "undefined") d = savegame.d;
    document.getElementById("d").innerHTML = d;
if (typeof savegame.e !== "undefined") e = savegame.e;
    document.getElementById("e").innerHTML = e;
}


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
    var nextCost = Math.floor(10 * Math.pow(1.3,b));    
    document.getElementById('bCost').innerHTML = nextCost + wA;  
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
    document.getElementById('cCost').innerHTML = nextCost + wB;  
};

function buyD(){
    var dCost = Math.floor(10 * Math.pow(1.3,d));   
    if(c >= dCost){                                  
        d = d + 1;                                   
    	c = c - dCost;                         
        document.getElementById('d').innerHTML = d;  
        document.getElementById('c').innerHTML = c;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,d));      
    document.getElementById('dCost').innerHTML = nextCost + wD;  
};

function buy1(){
    var oneCost = Math.floor(10 * Math.pow(1.3,1));   
    if(c >= dCost){                                  
        d = d + 1;                                   
    	c = c - dCost;                         
        document.getElementById('d').innerHTML = d;  
        document.getElementById('c').innerHTML = c;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.3,d));      
    document.getElementById('dCost').innerHTML = nextCost + wD;  
};



window.setInterval(function(){
	
	save;
	
}, 10000);
