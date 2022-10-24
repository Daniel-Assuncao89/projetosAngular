import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {
/**
 * -> Pegar um array qualquer e retornar a quantidade de elementos dentro dele
 * value: parametro responsavel por pegar o valor que será transformado
 *  args: 
 */
  transform(value: any[]): number {
    return value.length;
  }

}
