import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: String): any {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
    // solucao renato. (/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4');
  }

}
