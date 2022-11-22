export interface Collaborator {
    id?: string;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    cargo: string;
    setor: string;
    salario: number;
    estado: string;
    cidade: string;
    email: string;
    fotoUrl?: string
}
