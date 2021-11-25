import { Component } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
})
export class AppComponent {

  isValid = true;
  EmailValid(event: boolean){
    this.isValid = event
  }
  name = 'Angular';
}