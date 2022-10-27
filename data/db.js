var produtos_db = [
    {
        "descricao": "Blusa Básica Preta Masculina M",
        "preco": 39.99,
        "estoque": 7,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Blusa Básica Vermelha Masculina M",
        "preco": 39.99,
        "estoque": 10,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Blusa Básica Vermelha Feminina P",
        "preco": 29.99,
        "estoque": 5,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Blusa Básica Azul Feminina P",
        "preco": 29.99,
        "estoque": 3,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Calça Jeans Branca Masculina 42",
        "preco": 119.99,
        "estoque": 2,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Bermuda Slim Preta Masculina 46",
        "preco": 84.99,
        "estoque": 8,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Vestido Regata Infantil",
        "preco": 98.9,
        "estoque": 15,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Kit 4 Cuecas G",
        "preco": 80,
        "estoque": 5,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Kit 2 Calcinha M",
        "preco": 45,
        "estoque": 12,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Camisa Polo Rosa G",
        "preco": 75,
        "estoque": 20,
        "unidadeMedida": "Unidade",
        "categoria": "Roupas"
    },
    {
        "descricao": "Mouse",
        "preco": 89.5,
        "estoque": 7,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Teclado",
        "preco": 110.2,
        "estoque": 15,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Monitor",
        "preco": 1200.00,
        "estoque": 1,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Mousepad",
        "preco": 59.6,
        "estoque": 3,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Headphone",
        "preco": 350.00,
        "estoque": 6,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Celular",
        "preco": 2500.00,
        "estoque": 3,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Notebook",
        "preco": 5999.99,
        "estoque": 2,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Microfone",
        "preco": 72.5,
        "estoque": 18,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Powerbank",
        "preco": 210,
        "estoque": 32,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "TV",
        "preco": 3499.5,
        "estoque": 5,
        "unidadeMedida": "Unidade",
        "categoria": "Eletrônicos"
    },
    {
        "descricao": "Arroz",
        "preco": 4.36,
        "estoque": 35,
        "unidadeMedida": "Kg",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Feijão",
        "preco": 5.55,
        "estoque": 28,
        "unidadeMedida": "Kg",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Leite",
        "preco": 8.55,
        "estoque": 13,
        "unidadeMedida": "Caixa",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Bolacha Recheado Morango",
        "preco": 2.39,
        "estoque": 23,
        "unidadeMedida": "Unidade",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Bolacha Recheado Chocolate",
        "preco": 2.39,
        "estoque": 7,
        "unidadeMedida": "Unidade",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Carne Bovina",
        "preco": 49,
        "estoque": 10,
        "unidadeMedida": "Kg",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Macarrão",
        "preco": 2.3,
        "estoque": 8,
        "unidadeMedida": "Unidade",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Manteiga",
        "preco": 5.1,
        "estoque": 3,
        "unidadeMedida": "Unidade",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Maçã",
        "preco": 7.1,
        "estoque": 6,
        "unidadeMedida": "Kg",
        "categoria": "Alimentos"
    },
    {
        "descricao": "Café",
        "preco": 9.9,
        "estoque": 4,
        "unidadeMedida": "Unidade",
        "categoria": "Alimentos"
    }
]

var produtos = localStorage.getItem('produtos')
if(produtos == null){
    produtos = produtos_db
    localStorage.setItem('produtos', JSON.stringify(produtos))
} else{
    produtos = JSON.parse(produtos)
}

var carrinho = localStorage.getItem('carrinho')
if(carrinho == null){
    carrinho = []
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
} else{
    carrinho = JSON.parse(carrinho)
}
