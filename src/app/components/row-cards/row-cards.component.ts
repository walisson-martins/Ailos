import { Component, Input, OnChanges } from '@angular/core';
import { ICooperadoData } from 'src/app/pages/forms/ICooperado';
import { ICard } from './card/card.model';

@Component({
  selector: 'app-row-cards',
  templateUrl: 'row-cards.component.html',
  styleUrls: ['./row-cards.component.sass', '../../../assets/animations.sass'],
})
export class InfoCardsComponent implements OnChanges {
  @Input() cardData?: ICooperadoData | void;

  list!: Array<ICard>;

  constructor() {}

  ngOnChanges(): void {
    this.list = [
      {
        titulo: 'Situação cadastral do CPF',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Nome',
        content1: this.cardData!.pessoa!.nome,
        categoria2: 'Situação do CPF',
        content2: this.cardData!.pessoa!.situacao,
        type: 'person',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa!.conta_aplicacao,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
      {
        titulo: 'Conta Aplicação',
        subtitulo: 'Cooperativa Alios',
        categoria1: 'Número da conta',
        content1: this.cardData!.pessoa!.conta_corrente,
        command: 'Duplicar Conta',
        type: 'credit_card',
      },
    ];
  }
}
