/* GAMECOCK STADIUM CLICKER */
/* JavaScript - Game Functions */


// Game Variables

let gamecockPoints = 0;


// Manual Upgrade #1: Megaphone

let cheerPower = 1;
let megaphoneCost = 50;


// Manual Upgrade #2: Fight Song

let fightSongPower = 0;
let fightSongCost = 250;


// Automatic Upgrade #1: Student Fans

let studentFans = 0;
let fanCost = 100;


// Automatic Upgrade #2: Cocky

let cockyLevel = 0;
let cockyCost = 250;


// Automatic Upgrade #3: Marching Band

let bandMembers = 0;
let bandCost = 500;



// Main Button
// Adds Gamecock Points whenever the player clicks

function cheerForCarolina()
{
    gamecockPoints = gamecockPoints + cheerPower + (fightSongPower * 5);

    updateScreen();
}



// Buy Megaphone
// Increases the amount of points earned per click by 1

function buyMegaphone()
{
    if(gamecockPoints >= megaphoneCost)
    {
        gamecockPoints = gamecockPoints - megaphoneCost;

        cheerPower = cheerPower + 1;

        megaphoneCost = Math.ceil(megaphoneCost * 1.5);

        updateScreen();
    }
}



// Buy Fight Song
// Increases the amount of points earned per click by 5

function buyFightSong()
{
    if(gamecockPoints >= fightSongCost)
    {
        gamecockPoints = gamecockPoints - fightSongCost;

        fightSongPower = fightSongPower + 1;

        fightSongCost = Math.ceil(fightSongCost * 1.5);

        updateScreen();
    }
}



// Recruit Student Fan
// Student fans automatically generate 1 point every second

function recruitFan()
{
    if(gamecockPoints >= fanCost)
    {
        gamecockPoints = gamecockPoints - fanCost;

        studentFans = studentFans + 1;

        fanCost = Math.ceil(fanCost * 1.5);

        updateScreen();
    }
}



// Bring Cocky
// Each Cocky level generates 5 points every second

function bringCocky()
{
    if(gamecockPoints >= cockyCost)
    {
        gamecockPoints = gamecockPoints - cockyCost;

        cockyLevel = cockyLevel + 1;

        cockyCost = Math.ceil(cockyCost * 1.5);

        updateScreen();
    }
}



// Recruit Marching Band
// Each band member generates 15 points every second

function recruitBand()
{
    if(gamecockPoints >= bandCost)
    {
        gamecockPoints = gamecockPoints - bandCost;

        bandMembers = bandMembers + 1;

        bandCost = Math.ceil(bandCost * 1.5);

        updateScreen();
    }
}



// Update Everything On The Screen

function updateScreen()
{
    document.getElementById("score-display").innerText =
        gamecockPoints + " Gamecock Points";


    document.getElementById("power-display").innerText =
        cheerPower;


    document.getElementById("cost-display").innerText =
        megaphoneCost;


    document.getElementById("fight-song-display").innerText =
        fightSongPower;


    document.getElementById("fight-song-cost-display").innerText =
        fightSongCost;


    document.getElementById("fan-display").innerText =
        studentFans;


    document.getElementById("fan-cost-display").innerText =
        fanCost;


    document.getElementById("cocky-display").innerText =
        cockyLevel;


    document.getElementById("cocky-cost-display").innerText =
        cockyCost;


    document.getElementById("band-display").innerText =
        bandMembers;


    document.getElementById("band-cost-display").innerText =
        bandCost;
}



// Automatic Point Generation
// Runs every 1 second

setInterval(function()
{

    // Student Fans generate 1 point each

    gamecockPoints =
        gamecockPoints + studentFans;


    // Cocky generates 5 points each

    gamecockPoints =
        gamecockPoints + (cockyLevel * 5);


    // Marching Band generates 15 points each

    gamecockPoints =
        gamecockPoints + (bandMembers * 15);


    updateScreen();

},
1000);



// Reset Game

function resetGame()
{
    gamecockPoints = 0;

    cheerPower = 1;
    megaphoneCost = 50;

    fightSongPower = 0;
    fightSongCost = 250;

    studentFans = 0;
    fanCost = 100;

    cockyLevel = 0;
    cockyCost = 250;

    bandMembers = 0;
    bandCost = 500;

    updateScreen();
}



// Run once when the page first loads

updateScreen();