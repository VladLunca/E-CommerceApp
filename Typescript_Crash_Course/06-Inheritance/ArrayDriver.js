"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
//let myShape = new Shape(10,15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var rect = new Rectangle_1.Rectangle(5, 5, 10, 20);
var shapes = [];
//shapes.push(myShape);
shapes.push(myCircle);
shapes.push(rect);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var temp = shapes_1[_i];
    console.log(temp.getInfo());
    console.log("Area=".concat(temp.calculateArea()));
}
