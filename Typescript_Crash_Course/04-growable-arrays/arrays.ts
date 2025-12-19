
let sportsTwo: string[]=["football","golf","bascket"];
sportsTwo.push("Sah");
sportsTwo.push("Table");
sportsTwo.push("Volley");
for(let sport of sportsTwo)
{
    if(sport == "football")
    {
        console.log(`My favorite sport is ${sport}`);
    }
    else{
        console.log(`My favorite sport is not ${sport}`);
    }
}