//modelo do objeto lanche

export interface Food {
    ID: number;
    NOME: string;
    PRECO: number;
    QUANTITY?: number;
    sauces?: string[]; // Molhos selecionados
    observations?: string; // Observações
}
