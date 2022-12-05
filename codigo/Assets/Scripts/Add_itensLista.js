var imported = document.createElement('script');
imported.src = '/Assets/Scripts/Bancos.js';
document.head.appendChild(imported)


var user;
var listaNomeURL;


function listarOpcProdutos(textAtual) {
    const selectProdutos = document.getElementById("returnOptions");
    const Produtos = carregarDadosProdutos();
    let nomePesqUP = textAtual.toUpperCase();
    selectProdutos.innerHTML = " "

    Produtos.forEach((produtoAtual) => {
        let novo = document.createElement('label');
        let nomeProdutoUP = produtoAtual.nomeProduto.toUpperCase();
        let descricaoProdutoUP = produtoAtual.DescricaoProduto.toUpperCase();

        if (nomeProdutoUP.indexOf(nomePesqUP) >= 0) {
            novo = `<label for="${produtoAtual.nomeProduto}" class="opc"></label>
                <input type="radio" value="${produtoAtual.idProduto}" id="${produtoAtual.nomeProduto}" name="selecao">
                ${produtoAtual.nomeProduto}
                </label>`
            selectProdutos.innerHTML += novo;
        } else if (descricaoProdutoUP.indexOf(nomePesqUP) >= 0) {
            novo = `<label for="${produtoAtual.nomeProduto}" class="opc"></label>
                <input type="radio" value="${produtoAtual.idProduto}" id="${produtoAtual.nomeProduto}" name="selecao" >
                ${produtoAtual.nomeProduto}
                </label>`
            selectProdutos.innerHTML += novo;
        }
    });
}

function exibirModal(exibirModal) {
    const selectProdutos = document.getElementById("returnOptions");
    let modal = document.querySelector('.modalPesquisaItem');
    if (exibirModal) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
        selectProdutos.innerText = " ";
    }
}

function adicionarItemLista(idProduto, qnt) {
    let listaAtual = document.getElementById("conteudoLista");
    let item = buscarProduto(idProduto);
    let idJaPresente = false;

    listaAtual.childNodes.forEach((produtoLista) => {
        let id = produtoLista.id;

        if (id == "ListaVazia") {
            listaAtual.removeChild(produtoLista);
        } else if (id != undefined) {
            if (produtoLista.id == idProduto) {
                idJaPresente = true;
            }
        }

    })

    if (!idJaPresente) {

        listaAtual.innerHTML = listaAtual.innerHTML + `<div id="${idProduto}" class="input-group itemLista">
                                <div name="itemLista" class="marcarProduto">
                                    <input type="checkbox" name="${idProduto}" id="Check${idProduto}}">
                                </div>
                                <div class="produto">
                                    <h5>${item.nomeProduto}</h5>
                                    <p>${item.DescricaoProduto}</p>
                                </div>
                                <div class="qtdProduto">
                                    <strong>QTD:</strong>
                                    <input class="form-control preco" autocomplete="on" type="number" min=1 value=${parseInt(qnt, 10)} name="QTD${idProduto}" id="QTD${idProduto}">
                                </div>
                            </div>`;



    } else {
        let nameDiv = ("QTD" + idProduto);
        let inputValue = document.getElementById(nameDiv);
        let qntAtual = parseInt(inputValue.value);
        inputValue.value = qntAtual + 1;
    }
}

function buscarProduto(idItem) {
    let Produtos = carregarDadosProdutos();
    let ProdutoSelect;

    Produtos.forEach((item) => {
        if (item.idProduto == idItem) {
            ProdutoSelect = item;
        }
    });

    return ProdutoSelect;
}

function removerSelecionados() {
    let conjuntoItens = document.getElementsByName("itemLista");
    let listaRemove = [];

    conjuntoItens.forEach((item) => {
        let element = item.firstElementChild;
        if (element.checked) {
            listaRemove[listaRemove.length] = element.name
        }
    })
    removeItem(listaRemove)
}

function removeItem(list) {
    let lista = document.getElementById("conteudoLista")
    for (i = 0; i < list.length; i++) {
        lista.removeChild(document.getElementById(list[i]));
    }
}

function obterArraySemClienteAtual(clienteAtual) {
    let tdsClientes = carregarDadosClientes();
    let i = 0

    while (tdsClientes[i].idCliente != clienteAtual.idCliente && i < tdsClientes.length) {
        i++
    }

    tdsClientes.splice(i, 1)

    return tdsClientes;
}

function salvarItensLista() {
    let Cliente = obterClienteAtual();
    let arrayParaSet = obterArraySemClienteAtual(Cliente)
    let Lista = obterLista(Cliente);
    let ArrayList = obterArrayProdutos();

    if (Lista) {
        Lista.ItensLista = []

        ArrayList.forEach((item) => {
            Lista.ItensLista.push(item);
        })
    }

    arrayParaSet.push(Cliente)
    localStorage.setItem("Clientes", JSON.stringify(arrayParaSet));
}

function obterQTD(index) {
    let elemento = document.getElementById(("QTD" + index));
    return elemento.value;
}

function obterArrayProdutos() {
    let lista = document.getElementById("conteudoLista").childNodes;
    let ArrayProdutos = [];

    lista.forEach((item) => {
        if (item.id == "ListaVazia") {

        } else if (item.id != undefined) {
            let itemLista = {
                idProduto: item.id,
                Quantidade: obterQTD(item.id)
            }

            ArrayProdutos[ArrayProdutos.length] = itemLista;
        }
    })

    return ArrayProdutos;
}

function limparForm() {
    let conjuntoItens = document.getElementsByName("itemLista")
    let todos = [];
    conjuntoItens.forEach((item) => {
        let element = item.firstElementChild;
        todos[todos.length] = element.name
    })
    removeItem(todos);
}

function obterClienteAtual() {
    let Clientes = carregarDadosClientes();
    let i = 0

    console.log(Clientes)
    while (Clientes[i].idCliente != parseInt(user, 10) && i < Clientes.length) {
        i++;
    }

    return Clientes[i];
}

function obterLista(cliente) {
    let i = 0
    console.log(cliente)
    while (cliente.Listas[i].nomeLista != listaNomeURL && cliente.Listas.length) {
        i++
    }

    return cliente.Listas[i];
}

function exibirDados() {
    let Title = document.getElementById("titleList");
    let Cliente = obterClienteAtual();
    let Lista = obterLista(Cliente)

    if (Lista) {
        let Produtos = Lista.ItensLista;

        Title.innerHTML = Lista.nomeLista;
        Produtos.forEach((itemLista) => {
            adicionarItemLista(itemLista.idProduto, itemLista.Quantidade);
        })
    }
}

function deletarLista(nameLista) {
    let Cliente = obterClienteAtual();
    let arrayParaSet = obterArraySemClienteAtual(Cliente)
    let Listas = Cliente.Listas;
    console.log(Listas)
    let Permanecem = [];

    Listas.forEach((listaAtual) => {
        if (listaAtual.nomeLista != nameLista) {
            Permanecem[Permanecem.length] = listaAtual;
        }
    })

    Cliente.Listas = []

    Permanecem.forEach((lista) => {
        Cliente.Listas.push(lista);
    })

    arrayParaSet.push(Cliente)
    localStorage.setItem("Clientes", JSON.stringify(arrayParaSet));
}

function capturaIdentificacaoUser() {
    const params = new URLSearchParams(window.location.search)
    user = params.get("id");
    listaNomeURL = params.get("lista");
}


function atulizarHeader() {
     let home = document.querySelectorAll(".linkHome")
  let link0 = document.querySelectorAll(".link0")
  let link1 = document.querySelectorAll(".link1")
  let link2 = document.querySelectorAll(".link2")
  let sobre = document.querySelectorAll(".linkSobre")
  let perfil = document.querySelectorAll(".linkPerfil")

    if (user.length < 14) {
        for (let i = 0; i < 2; i++) {

            home[i].innerText = "Home"
            link0[i].innerText = "Listas"
            link1[i].innerText = "Cadastrar Lista"
            link2[i].innerText = "Cadastrar Nota"
            sobre[i].innerText = "Sobre"
            perfil[i].alt = "imgPerfil"

            home[i].href = "https://home.olivwallace.repl.co/?id=" + user
            link0[i].href = "https://lista.olivwallace.repl.co/?id=" + user
            link1[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Listas/Cad_Listas.html?id=" + user
            link2[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Notas/Cad_Notas.html?id=" + user
            sobre[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Sobre/sobre.html?id=" + user
            perfil[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Perfil/perfil.html?id=" + user

        }
    } else {
        for (let i = 0; i < 2; i++) {
            home[i].innerText = "Home"
            link0[i].innerText = "Listas"
            link1[i].innerText = "Cadastrar Lista"
            link2[i].innerText = "Cadastrar Nota"
            sobre[i].innerText = "Sobre"
            perfil[i].alt = "imgPerfil"
      
            home[i].href = "https://home.olivwallace.repl.co/?id=" +user
            link0[i].href = "https://lista.olivwallace.repl.co/?id=" + user
            link1[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Listas/Cad_Listas.html?id=" + user
            link2[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Notas/Cad_Notas.html?id=" + user
            sobre[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Sobre/sobre.html?id=" + user
            perfil[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Perfil/perfil.html?id=" + user
        }
    }
}

window.onload = () => {

    capturaIdentificacaoUser()
    atulizarHeader()
    exibirDados();

    novoItem.onclick = () => {
        exibirModal(true);
        textPesquisa.value = ""
        textPesquisa.oninput = () => {
            let caractersInvalidos = "!@#$%¨6*()+=§[{}]ºª|\<>,.:;";
            let ultimoCaracter = textPesquisa.value.charAt(textPesquisa.value.length - 1);

            if (caractersInvalidos.indexOf(ultimoCaracter) >= 0) {
                textPesquisa.value = textPesquisa.value.substr(0, textPesquisa.value.length - 1);
            };

            if (textPesquisa.value != '') {
                listarOpcProdutos(textPesquisa.value);
            }
        }
    }

    sairModal.onclick = () => {
        exibirModal(false);
    }

    select.onclick = () => {
        let Possiveis = document.getElementsByName('selecao');
        Possiveis.forEach((itens) => {
            if (itens.checked) {
                adicionarItemLista(itens.value, 1);
                exibirModal(false);
            }
        })
    }

    DeletarItem.onclick = () => {
        removerSelecionados();
        let div = document.getElementById("conteudoLista");
        if (div.childElementCount < 1) {
            div.innerHTML = `<h3 id="ListaVazia">Lista Vazia!<br>Adicione Itens Clicando <br>Em Novo Item</h3>`;
        }
        salvarItensLista();
    }

    salvarLista.onclick = () => {
        salvarItensLista();
        limparForm();

        let div = document.getElementById("conteudoLista");
        if (div.childElementCount < 1) {
            div.innerHTML = `<h3 id="ListaVazia">Lista Criada Com Sucesso!<br> Para Voltar a Tela Inicial<br><a href="#"> CLIQUE AQUI</a> `;
        }
    }

    DeletarLista.onclick = () => {
        deletarLista(document.getElementById("titleList").innerText);
        exibirDados();
    }


}