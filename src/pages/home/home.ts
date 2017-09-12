import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppPage } from '../app/app';
import { App2Page } from '../app2/app2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

	appOnePage = AppPage;
	appTwoPage = App2Page;

  constructor() {
  	
  }


}
