import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LocalStorageService, Flag } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent implements OnInit {
  title = 'side-collapse-menu';
  iconName1 = false;
  iconName2 = false;

  constructor(private storageService: LocalStorageService) { }

  ngOnInit() {
    let flags: Flag;
    flags = this.storageService.loadFlag();
    this.iconName1 = flags.flag1;
    if (this.iconName1) {
      $('.navbar-primary').toggleClass('collapsed');
    }
    this.iconName2 = flags.flag2;
    if (this.iconName2) {
      $('.navbar-secondary').toggleClass('collapsed');
    }

  }
  clickCollaps1() {
    $('.navbar-primary').toggleClass('collapsed');
    this.iconName1 = $('.navbar-primary').hasClass('collapsed');
    this.storageService.storeCurrentFlags(this.iconName1, this.iconName2);
  }
  clickCollaps2() {
    $('.navbar-secondary').toggleClass('collapsed');
    this.iconName2 = $('.navbar-secondary').hasClass('collapsed');
    this.storageService.storeCurrentFlags(this.iconName1, this.iconName2);
  }
}
