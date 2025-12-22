"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
//let myShape = new Shape(10,15);
//console.log(myShape.getInfo());
console.log(new Circle_1.Circle(5, 10, 20).getInfo());
console.log(new Rectangle_1.Rectangle(5, 5, 10, 20).getInfo());
