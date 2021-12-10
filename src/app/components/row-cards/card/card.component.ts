import { Component, Input } from '@angular/core';
import { ICard } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.sass', '../../../../assets/animations.sass'],
})
export class CardComponent {
  @Input() cardContent!: Array<ICard>;
  constructor() {}
}
