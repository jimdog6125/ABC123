var A = 0;
var Life = 1;
var speed = 1000;

var a = function(number){
    A = A + number;
    document.getElementById("A").innerHTML = A;
};

var B = 0;

var buyB = function(){
    var BCost = Math.floor(10 * Math.pow(1.1,A));     
    if(A >= BCost){                                   
        B = B + 1;                                   
    	A = A - BCost;                          
        document.getElementById('A').innerHTML = A;  
        document.getElementById('B').innerHTML = B;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,A));      
    document.getElementById('BCost').innerHTML = nextCost ;  
};
var b = function(number){
 B = B + number;
 document.getElementById("B").innerHTML = B;
};

var C = 0;

var buyC = function(){
    var CCost = Math.floor(10 * Math.pow(1.1,B));     
    if(B >= CCost){                                   
        C = C + 1;                                  
    	C = C - CCost;                          
        document.getElementById('C').innerHTML = C;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,B));       
    document.getElementById('CCost').innerHTML = nextCost;  
var c = function(number){
 C = C + number;
 document.getElementById("C").innerHTML = C;
}

var D = 0;

var buyD = function(){
    var DCost = Math.floor(10 * Math.pow(1.1,));     
    if(C >= DCost){                                   
        D = D + 1;                                   
    	C = C - DCost;                          
        document.getElementById('D').innerHTML = D;  
        document.getElementById('C').innerHTML = C;  
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,C));       
    document.getElementById('DCost').innerHTML = nextCost;  

var d = function(number){
 D = D + number;
 document.getElementById("D").innerHTML = D;
}

var E = 0;

var buyE = function(){
    var ECost = Math.floor(5000 * Math.pow(1.1,D));     
    if(D >= ECost){                                   
        E = E + 1;                                  
    	D = D - ECost;                          
        document.getElementById('E').innerHTML = E;  
        document.getElementById('D').innerHTML = D;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,D));      
    document.getElementById('ECost').innerHTML = nextCost;
};


ones = 0;
var buyOne = function(){
    var oneCost = Math.floor(10 * Math.pow(1.1,B));     
    if(B >= oneCost){                                   
        ones = ones + 1;                                   
	    B = B - oneCost
        document.getElementById('ones').innerHTML = ones;  
	document.getElementById('B').innerHTML = B;      
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,B));       
    document.getElementById('oneCost').innerHTML = nextCost;  
};

twos = 0;
var buyTwo = function(){
    var twoCost = Math.floor(10 * Math.pow(1.1,C));     
    if(C >= twoCost){                                   
        twos = twos + 1;                                 
    	C = C - twoCost;                         
        document.getElementById('twos').innerHTML = twos;  
        document.getElementById('C').innerHTML = C;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,C));       
    document.getElementById('twoCost').innerHTML = nextCost;  

threes = 0;
var buyThree = function(){
    var threeCost = Math.floor(10 * Math.pow(1.1,D));     
    if(D >= threeCost){                                   
        threes = threes + 1;                                   
    	D = D - threeCost;                          
        document.getElementById('threes').innerHTML = threes;  
        document.getElementById('D').innerHTML = D;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,D));       
    document.getElementById('threeCost').innerHTML = nextCost;  

fours = 0;
var buyFour = function(){
    var fourCost = Math.floor(10 * Math.pow(1.1,E));     
    if(E >= fourCost){                                  
        fours = fours + 1;                                   
    	E = E - fourCost;                         
        document.getElementById('fours').innerHTML = fours;  
        document.getElementById('E').innerHTML = E;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,E));       
    document.getElementById('fourCost').innerHTML = nextCost;  
};

window.setInterval(function(){
	
	a(ones);
	
}, speed);

window.setInterval(function(){
	
	b(twos);

}, speed);

window.setInterval(function(){
	
	c(threes);

}, speed);

window.setInterval(function(){
	
	d(fours);

}, speed);


