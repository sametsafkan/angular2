import {Component} from 'angular2/core';

@Component({
	selector:"example",
	template:`<div><h1>M. Samet SAFKAN</h1></div><br><input type="text" [(ngModel)]="model" placeholder = "Metin Girin"/>{{model}}
    <br><button (click)="click()">TIKLA</button>`
})

export class deneme{
    click(){
        alert("Hello World!");    
    }
}