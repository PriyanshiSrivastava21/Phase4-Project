import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  //data
  public title:string="kitchen-webapp!";
  public username:string="Robin";
  public age:number=32;
  public isMarried:boolean=true;
  public colors:any ={
    red:'#FF0000',
    green:'#00FF00',
    blue:'#0000FF'
  }
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
