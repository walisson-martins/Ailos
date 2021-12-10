import { Component, DoCheck, OnInit } from '@angular/core';
import { handleResize } from 'src/app/core/utils/window-size';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.sass'],
})
export class AccountComponent implements OnInit, DoCheck {
  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
