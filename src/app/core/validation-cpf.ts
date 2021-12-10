import { ICooperadoData } from '../pages/forms/ICooperado';

export const handleValidationCPF = (arrayData: Array<object>, cpf: String) => {
  let recipe: ICooperadoData | undefined;

  arrayData.map((param: any) => {
    if (param.cpf === cpf) {
      recipe = {
        cpf: param.cpf,
        pessoa: {
          nome: param.nome,
          conta_corrente: param.conta_corrente,
          conta_aplicacao: param.conta_aplicacao,
          situacao: param.situacao,
        },
      };
    }
  });

  return recipe;
};
