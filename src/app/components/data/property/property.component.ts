import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  //data

  public title:string="kitchen-webapp!";
  public username:string="Robin";
  public age:number=32;
  public isMarried:boolean=false;

  public  items:any={
    fid:1100101,
    name:"noodles",
    price:120,
    status:true
  };
  public orders:any=["Pizza Order", "KFC Order", "Dominos"];

  constructor() { }

  ngOnInit(): void {
  }

}