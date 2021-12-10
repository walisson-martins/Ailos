import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  title: string = 'NOVA ADMISSÃO COOPERADO';
  path: string =
    'Cadastro / Admissão do Cooperado / Nova Admissão do Cooperado';
}
