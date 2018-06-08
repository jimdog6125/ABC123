var a = 0;

function A(number){
    a = a + number;
    document.getElementById("a").innerHTML = a;
};

var b = 0;

function buyB(){
    var bCost = Math.floor(10 * Math.pow(1.1,b));     //works out the cost of this cursor
    if(a >= bCost){                                   //checks that the player can afford the cursor
        b = b + 1;                                   //increases number of cursors
    	a = a - bCost;                          //removes the cookies spent
        document.getElementById('b').innerHTML = b;  //updates the number of cursors for the user
        document.getElementById('a').innerHTML = a;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,b));       //works out the cost of the next cursor
    document.getElementById('bCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

