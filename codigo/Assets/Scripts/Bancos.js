function carregarDadosClientes() {
    let Clientes = JSON.parse(localStorage.getItem("Clientes"));

    if (!Clientes) {
        Clientes = [
            {
                idCliente: 1,
                nomeUsuario: "Wallace",
                idade: 24,
                endereco: "Rua x, 2212",
                email: 'wallace@gmail.com',
                senha: 'senhaTeste123',
                Listas: [
                    {
                        nomeLista: "Lista Semanal",
                        melhorSemana: 1,
                        receberNotificacao: true,
                        MercadosFavoritos: [402, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 5,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 1,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 3,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Mensal",
                        melhorSemana: 2,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 2,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 8,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 1,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Fim de Mes",
                        melhorSemana: 3,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 212, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 4,
                            },
                            {
                                idProduto: 7,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 5,
                            }
                        ],
                    }
                ]
            },
            {
                idCliente: 2,
                nomeUsuario: "Jerson",
                idade: 24,
                endereco: "Rua j, 2212",
                email: 'jerson@gmail.com',
                senha: 'senhaTeste123',
                Listas: [
                    {
                        nomeLista: "Lista Jerson",
                        melhorSemana: 1,
                        receberNotificacao: true,
                        MercadosFavoritos: [402, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 5,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 1,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 3,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Mensal",
                        melhorSemana: 2,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 2,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 8,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 1,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Fim de Mes",
                        melhorSemana: 3,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 212, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 4,
                            },
                            {
                                idProduto: 7,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 5,
                            }
                        ],
                    },
                ]
            },
            {
                idCliente: 3,
                nomeUsuario: "Henrique",
                idade: 24,
                endereco: "Rua h, 2212",
                email: 'henrique@gmail.com',
                senha: 'senhaTeste123',
                Listas: [
                    {
                        nomeLista: "Lista Semanal",
                        melhorSemana: 1,
                        receberNotificacao: true,
                        MercadosFavoritos: [402, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 5,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 1,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 3,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Mensal",
                        melhorSemana: 2,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 2,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 8,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 1,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Fim de Mes",
                        melhorSemana: 3,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 212, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 4,
                            },
                            {
                                idProduto: 7,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 5,
                            }
                        ],
                    },
                ]
            },
            {
                idCliente: 4,
                nomeUsuario: "Joao",
                idade: 24,
                endereco: "Rua j2, 2212",
                email: 'joao@gmail.com',
                senha: 'senhaTeste123',
                Listas: [
                    {
                        nomeLista: "Lista Semanal",
                        melhorSemana: 1,
                        receberNotificacao: true,
                        MercadosFavoritos: [402, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 5,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 1,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 3,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Mensal",
                        melhorSemana: 2,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 2,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 8,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 1,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Fim de Mes",
                        melhorSemana: 3,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 212, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 4,
                            },
                            {
                                idProduto: 7,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 5,
                            }
                        ],
                    },
                ]
            },
            {
                idCliente: 5,
                nomeUsuario: "Lucas",
                idade: 24,
                endereco: "Rua j, 2212",
                email: 'lucas@gmail.com',
                senha: 'senhaTeste123',
                Listas: [
                    {
                        nomeLista: "Lista Semanal",
                        melhorSemana: 1,
                        receberNotificacao: true,
                        MercadosFavoritos: [402, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 5,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 1,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 3,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Mensal",
                        melhorSemana: 2,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 210, 101],
                        ItensLista: [
                            {
                                idProduto: 2,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 4,
                                Quantidade: 8,
                            },
                            {
                                idProduto: 9,
                                Quantidade: 5,
                            },
                            {
                                idProduto: 1,
                                Quantidade: 1,
                            }
                        ],
                    },
                    {
                        nomeLista: "Lista Fim de Mes",
                        melhorSemana: 3,
                        receberNotificacao: true,
                        MercadosFavoritos: [500, 212, 101],
                        ItensLista: [
                            {
                                idProduto: 3,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 4,
                            },
                            {
                                idProduto: 7,
                                Quantidade: 2,
                            },
                            {
                                idProduto: 6,
                                Quantidade: 3,
                            },
                            {
                                idProduto: 8,
                                Quantidade: 5,
                            }
                        ],
                    },
                ]
            },
        ]
    }

    return Clientes;
}

function carregarDadosProdutos() {
    let Produtos = JSON.parse(localStorage.getItem("Produtos"));

    if (!Produtos) {
        Produtos = [
            {
                idProduto: 1,
                nomeProduto: "KitKat",
                DescricaoProduto: "Chocolate Ao Leite 41,5g Nestlé"
            },
            {
                idProduto: 2,
                nomeProduto: "Arroz Prato Fino",
                DescricaoProduto: "Arroz Intergral - Tipo I - 5kg "
            },
            {
                idProduto: 3,
                nomeProduto: "Leite Itambé",
                DescricaoProduto: "Leite Integral 1 Litro"
            },
            {
                idProduto: 4,
                nomeProduto: "Café 3 Corações",
                DescricaoProduto: "Café Moido Extra Forte - Tipo 1 - 1kg"
            },
            {
                idProduto: 5,
                nomeProduto: "Feijão Carioca",
                DescricaoProduto: "Tipo 1 - 1kg"
            },
            {
                idProduto: 6,
                nomeProduto: "Leite Moça",
                DescricaoProduto: "Leite Condensado - Nestlé - 250g"
            },
            {
                idProduto: 7,
                nomeProduto: "Macarrão Instantâneo",
                DescricaoProduto: "Nissin Miojo - Picanha - 100g"
            },
            {
                idProduto: 8,
                nomeProduto: "Biscoito Oreo",
                DescricaoProduto: "Biscoito Recheado - 90g"
            },
            {
                idProduto: 9,
                nomeProduto: "Cappucino 3 Corações",
                DescricaoProduto: "Café Soluvel Extra Cremoso - 400g"
            },
            {
                idProduto: 10,
                nomeProduto: "Queijo Canastra",
                DescricaoProduto: "Porto Alegre - 1kg"
            }
        ];
    }
    return Produtos;
}

function carregarMercados() {
    let Mercados = JSON.parse(localStorage.getItem("Mercados"));

    if (!Mercados) {
        Mercados = [{
            idMercado: 500,
            nomeMercado: "Supermecado Verdemar",
            endereco: " Av. Presidente Tancredo Neves, 2700 - Castelo",
            cnpj: '12345678912345',
            produtos: [{
                idProduto: 1,
                valor: 3.50
            },
            {
                idProduto: 2,
                valor: 21.80
            },
            {
                idProduto: 3,
                valor: 4.80
            },
            {
                idProduto: 4,
                valor: 15.80
            },
            {
                idProduto: 5,
                valor: 8.20
            },
            {
                idProduto: 6,
                valor: 3.20
            },
            {
                idProduto: 7,
                valor: 3.45

            },
            {
                idProduto: 8,
                valor: 3.10
            },
            {
                idProduto: 9,
                valor: 22.15

            },
            {
                idProduto: 10,
                valor: 56.70
            }]
        },
        {
            idMercado: 210,
            nomeMercado: "Super Nosso",
            endereco: "R. Dom José Pereira Lara, 33 - Coração Eucarístico",
            cnpj: '12345678912341',
            produtos: [{
                idProduto: 1,
                valor: 3.20
            },
            {
                idProduto: 2,
                valor: 20.80
            },
            {
                idProduto: 3,
                valor: 4.20
            },
            {
                idProduto: 4,
                valor: 12.80
            },
            {
                idProduto: 5,
                valor: 6.20
            },
            {
                idProduto: 6,
                valor: 2.70
            },
            {
                idProduto: 7,
                valor: 3.55

            },
            {
                idProduto: 8,
                valor: 2.80
            },
            {
                idProduto: 9,
                valor: 20.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        },
        {
            idMercado: 212,
            nomeMercado: "Super Nosso",
            endereco: "Rua André Cavalcanti, 223 - Gutierrez",
            cnpj: '12345678912342',
            produtos: [{
                idProduto: 1,
                valor: 3.15
            },
            {
                idProduto: 2,
                valor: 20.80
            },
            {
                idProduto: 3,
                valor: 4.20
            },
            {
                idProduto: 4,
                valor: 11.80
            },
            {
                idProduto: 5,
                valor: 6.20
            },
            {
                idProduto: 6,
                valor: 2.70
            },
            {
                idProduto: 7,
                valor: 3.55

            },
            {
                idProduto: 8,
                valor: 2.70
            },
            {
                idProduto: 9,
                valor: 20.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        },
        {
            idMercado: 101,
            nomeMercado: "Epa Plus",
            endereco: "Av. João XXIII, 495 - Alípio de Melo, Belo Horizonte - MG, 30820-660",
            cnpj: '12345678912343',
            produtos: [{
                idProduto: 1,
                valor: 2.60
            },
            {
                idProduto: 2,
                valor: 19.80
            },
            {
                idProduto: 3,
                valor: 3.80
            },
            {
                idProduto: 4,
                valor: 11.80
            },
            {
                idProduto: 5,
                valor: 6.50
            },
            {
                idProduto: 6,
                valor: 2.65
            },
            {
                idProduto: 7,
                valor: 3.50

            },
            {
                idProduto: 8,
                valor: 2.70
            },
            {
                idProduto: 9,
                valor: 22.15

            },
            {
                idProduto: 10,
                valor: 50.70
            }]
        },
        {
            idMercado: 102,
            nomeMercado: "Epa Plus",
            endereco: "Rua Úrsula Paulino, 1321 - Betânia",
            cnpj: '12345678912344',
            produtos: [{
                idProduto: 1,
                valor: 2.60
            },
            {
                idProduto: 2,
                valor: 19.80
            },
            {
                idProduto: 3,
                valor: 3.80
            },
            {
                idProduto: 4,
                valor: 11.80
            },
            {
                idProduto: 5,
                valor: 6.50
            },
            {
                idProduto: 6,
                valor: 2.65
            },
            {
                idProduto: 7,
                valor: 3.50

            },
            {
                idProduto: 8,
                valor: 2.70
            },
            {
                idProduto: 9,
                valor: 22.15

            },
            {
                idProduto: 10,
                valor: 50.70
            }]
        },
        {
            idMercado: 105,
            nomeMercado: "Epa Plus",
            endereco: "Avenida Teresa Cristina, 2940 - Padre Eustáquio",
            cnpj: '12345678912346',
            produtos: [{
                idProduto: 1,
                valor: 2.70
            },
            {
                idProduto: 2,
                valor: 20.00
            },
            {
                idProduto: 3,
                valor: 3.80
            },
            {
                idProduto: 4,
                valor: 12.80
            },
            {
                idProduto: 5,
                valor: 6.50
            },
            {
                idProduto: 6,
                valor: 2.45
            },
            {
                idProduto: 7,
                valor: 3.50

            },
            {
                idProduto: 8,
                valor: 2.70
            },
            {
                idProduto: 9,
                valor: 22.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        },
        {
            idMercado: 301,
            nomeMercado: "Supermecado BH",
            endereco: "Av. Afonso Vaz de Melo, 465 - Barreiro",
            cnpj: '12345678912347',
            produtos: [{
                idProduto: 1,
                valor: 2.60
            },
            {
                idProduto: 2,
                valor: 19.80
            },
            {
                idProduto: 3,
                valor: 3.70
            },
            {
                idProduto: 4,
                valor: 12.80
            },
            {
                idProduto: 5,
                valor: 7.20
            },
            {
                idProduto: 6,
                valor: 2.45
            },
            {
                idProduto: 7,
                valor: 3.55

            },
            {
                idProduto: 8,
                valor: 2.75
            },
            {
                idProduto: 9,
                valor: 21.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        },
        {
            idMercado: 305,
            nomeMercado: "Supermecado BH",
            endereco: "Rua Padre Eustáquio, 2763 - Padre Eustáquio",
            cnpj: '12345678912348',
            produtos: [{
                idProduto: 1,
                valor: 2.60
            },
            {
                idProduto: 2,
                valor: 19.80
            },
            {
                idProduto: 3,
                valor: 3.70
            },
            {
                idProduto: 4,
                valor: 12.80
            },
            {
                idProduto: 5,
                valor: 6.75
            },
            {
                idProduto: 6,
                valor: 2.35
            },
            {
                idProduto: 7,
                valor: 3.55

            },
            {
                idProduto: 8,
                valor: 2.65
            },
            {
                idProduto: 9,
                valor: 21.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        },
        {
            idMercado: 402,
            nomeMercado: "Apoio Mineiro",
            endereco: "Avenida Silva Lobo, 900 - Nova Suíça",
            cnpj: '12345678912349',
            produtos: [{
                idProduto: 1,
                valor: 3.75
            },
            {
                idProduto: 2,
                valor: 19.80
            },
            {
                idProduto: 3,
                valor: 3.70
            },
            {
                idProduto: 4,
                valor: 12.80
            },
            {
                idProduto: 5,
                valor: 7.20
            },
            {
                idProduto: 6,
                valor: 3.25
            },
            {
                idProduto: 7,
                valor: 3.35

            },
            {
                idProduto: 8,
                valor: 3.65
            },
            {
                idProduto: 9,
                valor: 22.15

            },
            {
                idProduto: 10,
                valor: 52.70
            }]
        }];
    }
    return Mercados;
}

function carregarTemporarioNota() {
    let Nota = JSON.parse(localStorage.getItem("Nota"));

    if (!Nota) {
        Nota = {
            idMercado: null,
            nomeMercado: null,
            itens: [{
                id: null,
                nome: null,
                descricao: null,
                valor: null
            }]
        }
    }

    return Nota
}

function criarLocalStorage() {
    let mercados = carregarMercados();
    let clientes = carregarDadosClientes();
    let produtos = carregarDadosProdutos();

    localStorage.setItem("Clientes", JSON.stringify(clientes))
    localStorage.setItem("Mercados", JSON.stringify(mercados))
    localStorage.setItem("Produtos", JSON.stringify(produtos))
}
