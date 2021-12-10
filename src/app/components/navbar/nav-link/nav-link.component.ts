import { Component, Input } from '@angular/core';
import { INavLink } from './InavLink';
@Component({
  selector: 'app-nav-link',
  templateUrl: 'nav-link.component.html',
  styleUrls: ['../navbar.component.sass', '../../../../assets/font-icons.css'],
})
export class NavLinkComponent {
  @Input() expanded!: boolean;

  @Input() links: Array<INavLink> = [
    {
      fontSet: 'material-icons-round',
      icon: 'search',
      text: 'Buscar',
      current: true,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'star_border',
      text: 'Favoritos',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'sms',
      text: 'Chat',
      current: false,
    },
    {
      fontSet: 'material-icons-round',
      icon: 'tune',
      text: 'Configurações',
      current: false,
    },
    {
      fontSet: 'material-icons-outlined',
      icon: 'account_balance',
      text: 'Banco',
      current: false,
    },
  ];

  constructor() {}
}
