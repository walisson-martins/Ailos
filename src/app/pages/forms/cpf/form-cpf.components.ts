import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { mask } from '../../../core/utils/mask';
import dataJson from '../../../../mock-api/data-user.json';
import { ICooperadoData } from '../ICooperado';
import { FormatCpf } from 'src/app/core/utils/cpf-formatter';
import { handleValidationCPF } from 'src/app/core/validation-cpf';
import { handleCPFValidation } from 'src/app/core/utils/cpf-cooperado-validate';

// !Favor ler o README.md contido na pasta forms
@Component({
  selector: 'app-form-cpf',
  templateUrl: './form-cpf.component.html',
  styleUrls: ['./form-cpf.component.sass'],
})
export class FormCpfComponent {
  error: Boolean = false;
  errorMsg: string = '';
  validCpf: Boolean = false;
  cooperadoSelecionado?: ICooperadoData | void;
  cpfPesquisado!: String;
  cpfValidate!: [boolean, string];
  @Input() cpfInputValue: string = '';

  changeHandler() {
    this.cpfInputValue = mask['cpf'](this.cpfInputValue);
  }

  handleError() {
    this.error = false;
  }

  clickHandler() {
    const formatedCpf = FormatCpf(this.cpfInputValue);
    this.cooperadoSelecionado = handleValidationCPF(dataJson, formatedCpf);
    this.cpfValidate = handleCPFValidation(
      formatedCpf,
      this.cooperadoSelecionado
    );

    this.error = this.cpfValidate[0];
    this.errorMsg = this.cpfValidate[1];

    if (this.error) {
      return (this.validCpf = false);
    }

    return (this.validCpf = true);
  }
}
