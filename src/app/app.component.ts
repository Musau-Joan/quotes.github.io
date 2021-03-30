import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
      Write your Quote: <input type="text" [formControl]="writeYourQuoteControl">
      `
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All-things-quotes';
  writeYourQuoteControl = new FormControl('');


}
