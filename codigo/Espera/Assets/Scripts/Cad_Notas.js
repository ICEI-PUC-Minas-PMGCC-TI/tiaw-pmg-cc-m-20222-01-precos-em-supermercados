var imported = document.createElement('script');
imported.src = '/Assets/Scripts/Bancos.js';
document.head.appendChild(imported);

var idMercadoNota;
var nameMercadoNota
var tamNota = 0;
var user;

function listarMercados(str) {
    const selectMercados = document.getElementById("returnMercados");
    let mercados = carregarMercados();
    let nomePesqUP = str.toUpperCase();
    selectMercados.innerHTML = ""

    mercados.forEach(element => {

        let mercadoNome = element.nomeMercado.toUpperCase();
        let enderecoMercado = element.endereco.toUpperCase();

        let tagP = document.querySelector(".mercadoNaoEncontrado")

        if (mercadoNome.indexOf(nomePesqUP) >= 0) {
            if (tagP != null) tagP.style.display = "none"
            selectMercados.innerHTML += `<p class="buscaMercado" onclick="selecionaMercado(${element.idMercado}, '${element.nomeMercado}')">${element.nomeMercado}<br>${element.endereco}</p>`
        } else if (selectMercados.children.length == 0) {
            selectMercados.innerHTML = `<p class="mercadoNaoEncontrado">Mercado não encontrado,<a href="/Modules/Cad_Mercados/Cad_Mercados.html?id=${user}">Clique Aqui<a/> para cadastra-lo!</p>`
        }

    });


}

function selecionaMercado(id, mercado) {
    let modal = document.querySelector('.modalMercado');
    let mercadoS = document.getElementById("nameMercado")
    mercadoS.value = mercado;
    idMercadoNota = id;
    nameMercadoNota = mercado
    exibirModal(false, modal)
}


function exibirModal(exibirModal, modal) {
    const selectProdutos = document.getElementById("returnOptions");
    if (exibirModal) {
        textPesquisa.value = " ";
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
        selectProdutos.innerText = " ";
    }
}


function listarProdutos(str) {
    const selectProdutos = document.getElementById("returnOptions");
    let produto = carregarDadosProdutos();
    let nomePesqUP = str.toUpperCase();
    selectProdutos.innerHTML = ""
    
    produto.forEach(element => {
        let produtoNome = element.nomeProduto.toUpperCase();
        let descricaoProduto = element.DescricaoProduto.toUpperCase();

        let tagP = document.querySelector(".produtoNaoEncontrado")
        
        if (produtoNome.indexOf(nomePesqUP) >= 0 || descricaoProduto.indexOf(nomePesqUP) >= 0) {
            if (tagP != null) tagP.style.display = "none"
            selectProdutos.innerHTML += `<p class="buscaProdutos" onclick="selecionaProdutos(${element.idProduto}, '${element.nomeProduto}', '${element.DescricaoProduto}')">${element.nomeProduto}<br>${element.DescricaoProduto}</p>`
        } else if (selectProdutos.children.length == 0) {
            selectProdutos.innerHTML = `<p class="produtoNaoEncontrado">Produto não encontrado,<a href="#" onclick=cadastraProduto()>Clique Aqui<a/> para cadastra-lo!</p>`
        }
    });
}

function idPresente(id) {
    let idJaPresente = false;
    let div = document.getElementById('conteudoLista')

    div.childNodes.forEach(produt => {
        idAtual = produt.id;

        if (idAtual == "ListaVazia") {
            div.removeChild(produt);
        } else if (produt.id != undefined) {
            if (produt.firstChild.id == id) {
                idJaPresente = true;
            }
        }
    })

    return idJaPresente;
}


function cadastraProduto() {
    persisteDadosNota()
    location.replace("/Modules/Cad_Produto/Cad_Produtos.html?id=" + user);
}

function carregarNota(){
    let nota = carregarTemporarioNota()

    if(nota.idMercado != null){
        
        idMercadoNota = nota.idMercado
        nameMercadoNota = nota.nomeMercado.toString()

        nameMercado.value = nameMercadoNota
        nameMercado.disabled = true

        nota.itens.forEach(element=>{
            selecionaProdutos(parseFloat(element.id), element.nome, element.descricao)
        })

        let valores = document.querySelectorAll('.qtdProduto')
       
        for(let i = 0; i < valores.length; i++){
            valores[i].lastElementChild.value = nota.itens[i].valor
        }
    }   
}

function persisteDadosNota() {
    let itens = []
    let notaTemp = carregarTemporarioNota()
    let divId = document.querySelectorAll('.itemLista')
    let divPD = document.querySelectorAll('.produto')
    let valores = document.querySelectorAll('.qtdProduto')

    for (let i = 0; i < divId.length; i++) {
        let item = {
            id: divId[i].id,
            nome: divPD[i].firstElementChild.innerText,
            descricao: divPD[i].lastElementChild.innerText,
            valor: valores[i].lastElementChild.value
        }

        itens.push(item)
    }

    let novaNota = {
        idMercado: idMercadoNota,
        nomeMercado: nameMercadoNota,
        itens: itens
    }

    notaTemp = novaNota

    localStorage.setItem("Nota", JSON.stringify(notaTemp))
}


function selecionaProdutos(id, nome, descricaoProduto) {
    let modal = document.querySelector('.modalPesquisaItem')
    let div = document.getElementById('conteudoLista')
    if (!idPresente(id)) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = `<div id="${id}" class="input-group itemLista">
                            <div name="itemLista" class="marcarProduto">
                                <input type="checkbox" name="${id}" id="Check${id}}">
                            </div>
                            <div class="produto">
                                <h5>${nome}</h5>
                                <p>${descricaoProduto}</p>
                            </div>
                            <div class="qtdProduto">
                                <strong>R$</strong>
                                <input class="form-control preco" autocomplete="on" type="number" step="0.01" min="0.01" name="QTD${id}" id="QTD${id}">
                            </div>
                        </div>`

        div.appendChild(newDiv)
    }
    exibirModal(false, modal)
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
        document.getElementById(list[i]).parentNode.remove();
    }
}

function limparForm() {
    let conjuntoItens = document.getElementsByName("itemLista")
    let todos = [];
    conjuntoItens.forEach((item) => {
        let element = item.firstElementChild;
        todos[todos.length] = element.name
    })
    removeItem(todos);

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

    localStorage.setItem("Nota", JSON.stringify(Nota))
}

function criarVetorJsonNota() {
    let vetor = []
    let vetDiv = document.querySelectorAll(".itemLista")
    for (let i = 0; i < vetDiv.length; i++) {
        let valorItem = parseFloat(document.getElementById("QTD" + vetDiv[i].id).value)

        let itemNota = {
            idProduto: parseFloat(vetDiv[i].id),
            valor: parseFloat(valorItem.toFixed(2))
        }
        vetor.push(itemNota)
    }
    return vetor;
}

function atualizarBancoDados() {
    let mercados = carregarMercados();

    let i = 0
    let mercadoSelecionado = mercados[i]

    while ((mercadoSelecionado.idMercado != idMercadoNota) && (i < mercados.length)) {
        mercadoSelecionado = mercados[++i];
    }

    adiconarItensAtualizados(criarVetorJsonNota(), mercados[i]);

    localStorage.setItem("Mercados", JSON.stringify(mercados))
}

function adiconarItensAtualizados(notaFiscal, mercado) {
    notaFiscal.forEach(itemNota => {
        mercado.produtos.forEach(produto => {
            if (itemNota.idProduto == produto.idProduto) {
                mercado.produtos.splice(mercado.produtos.indexOf(produto), 1)
            }
        })
        mercado.produtos.push(itemNota)
    })
}

function limparForm() {
    alterarMercado.onclick()
    let mercado = document.getElementById("nameMercado")
    mercado.value = ""

    let conjuntoItens = document.getElementsByName("itemLista")
    let todos = [];
    conjuntoItens.forEach((item) => {
        let element = item.firstElementChild;
        todos[todos.length] = element.name
    })
    removeItem(todos);
}

function capturaIdentificacaoUser() {
    const params = new URLSearchParams(window.location.search)
    user = params.get("id");
}

function atulizarHeader() {
    let link0 = document.querySelectorAll(".link0")
    let link1 = document.querySelectorAll(".link1")
    let link2 = document.querySelectorAll(".link2")

    if (user.length < 14) {
        for (let i = 0; i < 2; i++) {
            link0[i].innerText = "Listas"
            link1[i].innerText = "Cadastrar Lista"
            link2[i].innerText = "Cadastrar Nota"

            link0[i].href = "#"
            link1[i].href = "/Modules/Cad_Listas/Cad_Listas.html?id=" + user
            link2[i].href = "/Modules/Cad_Notas/Cad_Notas.html?id=" + user
        }
    } else {
        for (let i = 0; i < 2; i++) {
            link0[i].innerText = "Filiais"
            link1[i].innerText = "Cadastrar Produtos"
            link2[i].innerText = "Cadastrar Filial"

            link0[i].href = "#"
            link1[i].href = "/Modules/Cad_Produtos/Cad_Produtos.html?id=" + user
            link2[i].href = "/Modules/Cad_Mercados/Cad_Mercados.html?id=" + user
        }
    }

}

window.onload = () => {
    var nomeAlterado = false

    carregarNota()
    capturaIdentificacaoUser()
    atulizarHeader();


    nameMercado.oninput = () => {
        let modal = document.querySelector('.modalMercado');
        exibirModal(true, modal)

        let caractersInvalidos = "!@#$%¨6*()+=§[{}]ºª|\<>,.:;";
        let ultimoCaracter = nameMercado.value.charAt(nameMercado.value.length - 1);
        let strPesquisa = nameMercado.value.trim();

        if (caractersInvalidos.indexOf(ultimoCaracter) >= 0) {
            nameMercado.value = nameMercado.value.substr(0, nameMercado.value.length - 1);
        };

        if (nameMercado.value != '') {
            listarMercados(strPesquisa);
            nomeAlterado = true
        } else {
            exibirModal(false, modal);
            nomeAlterado = false
        }
    }

    nameMercado.onblur = () =>{
        if(nomeAlterado) nameMercado.disabled = true;
    }

    alterarMercado.onclick = () => {
        let mercadoS = document.getElementById("nameMercado")
        mercadoS.disabled = false;
        nomeAlterado = true
        nameMercado.focus()
    }

    textPesquisa.oninput = () => {
        let caractersInvalidos = "!@#$%¨6*()+=§[{}]ºª|\<>,.:;";
        let strPesquisa = textPesquisa.value.trim();


        let ultimoCaracter = textPesquisa.value.charAt(textPesquisa.value.length - 1);

        if (caractersInvalidos.indexOf(ultimoCaracter) >= 0) {
            textPesquisa.value = textPesquisa.value.substr(0, textPesquisa.value.length - 1);
        }

        if (textPesquisa.value != '') {
            listarProdutos(strPesquisa);
        }
    }

    newItem.onclick = () => {
        if(nameMercado.disabled == true){
            let modal = document.querySelector('.modalPesquisaItem')
            exibirModal(true, modal)
        }else{
            window.alert("Selecione o mercado primeiro!!")
            nameMercado.focus()
        }
    }

    dropItem.onclick = () => {
        removerSelecionados();
        let div = document.getElementById("conteudoLista");
        if (div.childElementCount < 1) {
            div.innerHTML = `<h3 id="ListaVazia">Nota Fiscal Vazia!<br>Adicione Itens Clicando <br>Em Novo Item</h3>`;
        }
    }

    sairModal.onclick = () => {
        let modal = document.querySelector('.modalPesquisaItem')
        exibirModal(false, modal);
    }

    salvarLista.onclick = () => {
        atualizarBancoDados()
        limparForm()
    }

}