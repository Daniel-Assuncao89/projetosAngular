import path from 'path'
import { filter, first, last, map, Observable, take } from 'rxjs'
import fs from 'fs'

const filePaths: string[] = [
  path.join(__dirname, 'files', 'app_1.txt'),
  path.join(__dirname, 'files', 'app_2.txt'),
  path.join(__dirname, 'files', 'app_3.txt'),
  path.join(__dirname, 'files', 'app_4.txt'),
  path.join(__dirname, 'files', 'estilo_1.css'),
  path.join(__dirname, 'files', 'estilo_2.css'),
  path.join(__dirname, 'files', 'estilo_3.css'),
  path.join(__dirname, 'files', 'estilo_4.css'),
  path.join(__dirname, 'files', 'estrutura_1.html'),
  path.join(__dirname, 'files', 'estrutura_2.html'),
  path.join(__dirname, 'files', 'estrutura_3.html'),
  path.join(__dirname, 'files', 'estrutura_4.html')
]

const isCSS = /^((.|#){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

function lerArquivos(arquivos: string[]){
  /**
   * Observables enviam dados/informações de forma contínua.
   * -> A classe observable recebe como parametro uma funcao responsavel pela geração dos dados que o observable enviará.
   * -> subscriber é uma referencia do dependente da informação
   */
  const leitor = new Observable <string>((subscriber) => {

    /**
     * o metodo foreach serve para fazer um laço de repeticao dentro de um array
     */
    arquivos.forEach((arquivo) => {
      /**
       * readFileSync fará a leitura de um arquivo a partir do caminho desse arquivo no seu computador
       */

      try {
        const conteudo = fs.readFileSync(arquivo, { encoding: 'utf-8'})
        /**
         * --> Envio de Dados do Observable <--
         * 3 estagios:
         *    - Sucesso: O observable conseguiu realizar seu trabalho sem nenhum problema e enviar os dados com sucesso
         *    - Erro: O Observable teve algum problema durante a sua execução e não conseguiu realizar sua tarefa de maneira satisfatoria e não conseguiu enviar os dados. Quando um observable passa pelo estagio de erro, sua execução para automaticamente.
         *    - Completo: O Observable realizou todas as suas tarefas com sucesso e não possui mais nenhum dado para poder enviar
         */
        subscriber.next(conteudo) // mandar a msg de sucesso
        //subscriber.error() // msg de erro
        //subscriber.complete() //msg de completo
      } catch (error) {
        subscriber.error(`Não foi possivel ler o arquivo que está no caminho ${arquivo}`)
      }
     
    })

    subscriber.complete()
  })

  return leitor
}

let obs = lerArquivos(filePaths)

/**
 * o metodo subscribe() permite acessar valores que o observable envia
 *  1: sucesso
 *  2: erro
 *  3: Completo
 * 
 *  Operadores -> funções que servem para manipular os dados que os observables enviam
 *      - Utilizando operador do RXJS, vamos extrair a primeira palavra de cada arquivo
 *      - Operador map() serve para pegar e manipular o dado enviado pelo Observable
 *      - Operador filter() filtra informações que o observable envia.
 *      - Operador take() serve para retornar uma quantidade X de dados que o observable envia.
 *      - Operador first() retorna o primeiro arquivo.
 *      - Operador last() retorna o ultimo arquivo
 */

obs
.pipe(
  /* map((texto) => {
    return texto.split(' ')[0]
  }),
  map((palavra) => { // no segundo map vc tem o resultado obtido pelo do map anterior
    return palavra.length
  }) */
 /*  filter((txt) => {
    return  (!isHTML.test(txt) && !isCSS.test(txt))
  }) */
  // take(4)
 /*  first((txt) => {
    return isHTML.test(txt)
  }) */
)
.subscribe((conteudoLido) => {
  console.log('---------- Arquivo lido com sucesso ----------')
  console.log(conteudoLido) 
  console.log('----------------------------------------------\n\n')
}, (erro) => {
  console.log('OCORREU UM ERRO NA EXECUÇÃO DO OBSERVABLE')
  console.log(erro)
}, () => {
  console.log('TODOS OS ARQUIVOS FORAM LIDOS COM SUCESSO')
}
)

/* obs.subscribe((conteudoLido) => {
  console.log(`Este arquivo possui: ${conteudoLido.length} caracteres` )
}) */