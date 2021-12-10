import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { handleResize } from 'src/app/core/utils/window-size';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './navbar.component.sass',
    '../../../assets/font-icons.css',
    '../../../assets/animations.sass',
  ],
})
export class NavBarComponent implements OnInit, DoCheck {
  @Input() expand: boolean = false;
  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }
}
