var sportsTwo = ["football", "golf", "bascket"];
sportsTwo.push("Sah");
sportsTwo.push("Table");
sportsTwo.push("Volley");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var sport = sportsTwo_1[_i];
    if (sport == "football") {
        console.log("My favorite sport is ".concat(sport));
    }
    else {
        console.log("My favorite sport is not ".concat(sport));
    }
}
