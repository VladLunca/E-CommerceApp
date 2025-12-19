"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./../01-Classs-Defimition/class");
var myCustomer = new class_1.Customer("Vlad", "Lunca");
console.log("My customer name is ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
myCustomer.firstName = "Bianca";
myCustomer.lastName = "Luca";
console.log("My new customer name is ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
