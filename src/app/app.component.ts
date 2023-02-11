import { Component, OnInit, isDevMode } from '@angular/core';
import {enableProdMode} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'angular-example';


  ngOnInit(): void {

    if (isDevMode()) {
      console.log('Development!');
    } else {
      enableProdMode();
      console.log('Production!');
    }

  }

}
