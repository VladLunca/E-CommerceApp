import { Customer } from "./../01-Classs-Defimition/class" 

let myCustomer = new Customer("Vlad","Lunca");


console.log(`My customer name is ${myCustomer.firstName} ${myCustomer.lastName}`)
myCustomer.firstName = "Bianca";
myCustomer.lastName = "Luca";
console.log(`My new customer name is ${myCustomer.firstName} ${myCustomer.lastName}`)
