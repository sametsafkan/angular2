import {Component} from 'angular2/core';

@Component({
    //html ler burda
    selector: 'my-app',
    template: '<h1>Angular 2 Example</h1><br><button>Tıkla</button>{{value}}'
})

export class AppComponent {
//kodlar fonksiyonlar burda 
    value = 1234;
    click(){
        alert('Hello World');    
    }
}
