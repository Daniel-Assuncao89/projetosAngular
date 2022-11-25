import { Book } from 'src/app/interfaces/book';

export interface Emprestimo{
    id?: string,
    leitor: string
    email: string
    telefone: string
    status: string
    livro: Book
}
