import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { handleResize } from 'src/app/core/utils/window-size';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit, DoCheck {
  @Input() expanded!: boolean;

  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
