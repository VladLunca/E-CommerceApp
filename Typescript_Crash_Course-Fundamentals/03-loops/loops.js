console.log("This is a loop");
var total = 0;
var reviews = [10, 1.8, 8, 7, 5, 5.02, 5.3];
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
    console.log("reviews[".concat(i, "]=").concat(reviews[i]));
}
console.log("average=".concat(total / reviews.length));
var sports = ["football", "golf", "bascket"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "football") {
        console.log("My favorite sport is ".concat(sport));
    }
    else {
        console.log("My favorite sport is not ".concat(sport));
    }
}
