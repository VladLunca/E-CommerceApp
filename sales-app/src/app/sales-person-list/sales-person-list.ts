import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesPerson } from './sales-person';
@Component({
  selector: 'app-sales-person-list',
  imports: [CommonModule],
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css',
})
export class SalesPersonList implements OnInit{
  salesPersonList: SalesPerson[]=[ 
    new SalesPerson("Bie","Luca","bieluca@gmail.com",10),
    new SalesPerson("Bie","Luca","bieluca@gmail.com",10),
    new SalesPerson("Bie","Luca","bieluca@gmail.com",10),
    new SalesPerson("Bie","Luca","bieluca@gmail.com",10),
    new SalesPerson("Bie","Luca","bieluca@gmail.com",10)
  ];
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
