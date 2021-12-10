import { Component, OnInit } from '@angular/core';
import { handleResize } from 'src/app/core/utils/window-size';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener<'resize'>('resize', handleResize);
  }
}
