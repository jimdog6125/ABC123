var kills = 0;

function kill(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(kills >= swordCost){                                   //checks that the player can afford the cursor
        swords = swords + 1;                                   //increases number of cursors
    	kills = kills - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(100 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(kills >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	kills = kills - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var cannons = 0;

function buyCannon(){
    var cannonCost = Math.floor(500 * Math.pow(1.1,cannons));     //works out the cost of this cursor
    if(kills >= cannonCost){                                   //checks that the player can afford the cursor
        cannons = cannons + 1;                                   //increases number of cursors
    	kills = kills - cannonCost;                          //removes the cookies spent
        document.getElementById('cannons').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,cannons));       //works out the cost of the next cursor
    document.getElementById('cannonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
	
	kill(swords);
	
}, 2000);
window.setInterval(function(){
	
	kill(magic);

}, 1000);
window.setInterval(function(){
	
	kill(cannons);

}, 500);

function save(){
var save = {
    kills: kills,
    swords: swords,
    magic: magic,
    cannons: cannons,
    swordCost: swordCost,
    magicCost:magicCost,
    cannonCost:cannonCost
    }
localStorage.setItem("save",JSON.stringify(save));
	
}
function load(){
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
var savegame = JSON.parse(localStorage.getItem("save"));

if (typeof savegame.kills !== "undefined") kills = savegame.kills;
document.getElementById('kills').innerHTML = prettify(kills);

if (typeof savegame.magic !== "undefined") magic = savegame.magic;
document.getElementById('magic').innerHTML = prettify(magic);

if (typeof savegame.cannons !== "undefined") cannons = savegame.cannons;
document.getElementById('cannons').innerHTML = prettify(cannons);
	
if (typeof savegame.swordCost !== "undefined") swordCost = savegame.swordCost;
document.getElementById('swordCost').innerHTML = prettify(swordCost);

if (typeof savegame.magicCost !== "undefined") magicCost = savegame.magicCost;
document.getElementById('magicCost').innerHTML = prettify(magicCost);

if (typeof savegame.cannonCost !== "undefined") cannonCost = savegame.cannonCost;
document.getElementById('cannonCost').innerHTML = prettify(cannonCost);

};
//Autosave
  var saveVar;

 function autoSaveFunc() {
 saveVar = setInterval(save, 10000); //Autosave every 10 second

  }
  autoSaveFunc();


 //AutoLoad
  var loadVar;

function autoLoadFunc() {
 loadVar = setTimeout(load, 1000); //autoload

}
autoLoadFunc();

