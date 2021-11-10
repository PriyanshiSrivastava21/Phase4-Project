import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public items:any=[
    {id:10001,name:'Pulses',price: 590,active:true},
    {id:10002,name:'Flour',price: 120,active:true},
    {id:10003,name:'Rice',price: 150,active:false},
    {id:10004,name:'Nuts',price: 200,active:true},
    {id:10005,name:'Ghee',price: 180,active:false},
    {id:10006,name:'Sauces',price: 180,active:true},
    {id:10007,name:'Biscuits',price: 180,active:true},
    {id:10008,name:'Coffee',price: 180,active:true},
    {id:10009,name:'Tea',price: 180,active:true},
    {id:10010,name:'Cold Drink',price: 180,active:true},
    {id:10011,name:'Snacks',price: 180,active:false},
    
  ]

  
  constructor() { }

  public showList():any{
    return this.items;

  }

  public showActive():any{

     return this.items.filter(function(items:any){
      return items.active; 

    })
  }

  public showInActive():any{

    return this.items.filter(function(items:any){
     return !items.active; 

   })
 }
}