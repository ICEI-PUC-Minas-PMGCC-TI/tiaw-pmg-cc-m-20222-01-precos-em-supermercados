const MAX_MERCADOS = 3;
var mercadosSelectFavoritados = 1;

var imported = document.createElement('script');
imported.src = '/Assets/Scripts/Bancos.js';
document.head.appendChild(imported)

var user;

function removerMercado() {
    let div = document.getElementById("mercadosSelecionados");
    let lastChild = div.lastChild;
    div.removeChild(lastChild);
    mercadosSelectFavoritados--;
    document.getElementById("adicionarMercado").innerHTML = " + ";
}

function carregarOpcMercados() {
    const selectMercados = document.getElementById("mercado");
    const optionsMercados = carregarMercados();

    optionsMercados.forEach((language) => {
        option = new Option(language.nomeMercado, language.idMercado);
        selectMercados.options[selectMercados.options.length] = option;
    });
}

function obterArrayMercadosSelecionados() {
    let ArrayMercados = [];
    let id = "mercado";
    let divatual;


    divatual = document.getElementById(id).childNodes;
    divatual.forEach((select) => {
        if (select.value == "select") {
            ArrayMercados[ArrayMercados.length] = "Nenhuma Opção"
        } else if (select.value != undefined) {
            ArrayMercados[ArrayMercados.length] = parseInt(divatual.value, 10);
        }
    });


    return ArrayMercados;
}

function obterArrayListaProdutosSelecionados() {
    let ArrayProdutos = [];
    return ArrayProdutos;
}

function obterClienteAtual(){
    let Clientes = carregarDadosClientes();
    let i = 0
    while(Clientes[i].idCliente != parseInt(user, 10) && i < Clientes.length){
        i++;
    }

    return Clientes[i];
}


function obterArraySemClienteAtual(clienteAtual){
  let tdsClientes = carregarDadosClientes();
  let i = 0
  
  while (tdsClientes[i].idCliente != clienteAtual.idCliente && i < tdsClientes.length) {
    i++
  }
  
  tdsClientes.splice(i, 1)
  
  return tdsClientes;
}


function inserirDadosLista() {
    let Cliente = obterClienteAtual();
    let arraySet = obterArraySemClienteAtual(Cliente)
    let nomeLista = document.getElementById("nameList").value;
    let melhorSemana = parseInt(document.getElementById("semana").value, 10);
    let receberNotificacao = (document.getElementById('notifique').checked);

    var novaLista = {
        nomeLista: nomeLista,
        melhorSemana: melhorSemana,
        receberNotificacao: receberNotificacao,
        MercadosFavoritos: obterArrayMercadosSelecionados(),
        ItensLista: obterArrayListaProdutosSelecionados()
    };
    Cliente.Listas.push(novaLista);

    arraySet.push(Cliente)
    localStorage.setItem("Clientes", JSON.stringify(arraySet));
    location.replace("/Modules/Cad_Listas/Add_ItensLista.html?id=" + user + "&lista=" + novaLista.nomeLista);
}

function limparCadastro() {
    document.getElementById("titleList").innerHTML = "NOVA LISTA";
    document.getElementById("nameList").value = "";
    document.getElementById("semana").value = 0;
    for (i = mercadosSelectFavoritados; i > 1; i--) {
        removerMercado();
    }
    document.getElementById("mercado").value = "select";
    document.getElementById("notifique").checked = false;
}

function favoritarMercado() {
    mercadosSelectFavoritados++;
    let mercadoSelecionado = document.getElementById("mercado");
    let novoMercado = document.createElement('div');
    novoMercado.innerHTML = `<div class="input-group divMercado">
                        
                            <label class="labelSelect" name="mercado" id="mercado${mercadosSelectFavoritados}"value="${mercadoSelecionado.value}">
                               ${mercadoSelecionado.children[mercadoSelecionado.selectedIndex].textContent}
                            </label>
                            <button class="removerMercado" onclick=removerMercado() = name="removerMercado" id="removerMercado${mercadosSelectFavoritados}" type="button">-</button>
                            </div>`;
    return novoMercado;
}
/** `<div class="input-group">
                            <label style="min-width: 100px" for="mercado" class="input-group-text">Favorito N° ${mercadosSelectFavoritados}</label>
                            <select style="min-width: 280px; margin-right: 5px;" name="mercado" id="mercado${mercadosSelectFavoritados}">
                                <option value="${mercadoSelecionado.value}" disabled selected>${mercadoSelecionado.children[mercadoSelecionado.selectedIndex].textContent}</option>
                            </select>
                            <button style="border: none; border-radius: 5px; min-width: 25px;" onclick=removerMercado() = name="removerMercado" id="removerMercado${mercadosSelectFavoritados}" type="button"> - </button>
                            </div>` */

function capturaIdentificacaoUser(){
    const params = new URLSearchParams(window.location.search)
    user = params.get("id");
}

function atulizarHeader(){
     let home = document.querySelectorAll(".linkHome")
  let link0 = document.querySelectorAll(".link0")
  let link1 = document.querySelectorAll(".link1")
  let link2 = document.querySelectorAll(".link2")
  let sobre = document.querySelectorAll(".linkSobre")
  let perfil = document.querySelectorAll(".linkPerfil")
   
    if(user.length < 14){
        for(let i=0; i < 2; i++){
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
    }else{
        for(let i=0; i < 2; i++){
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

    criarLocalStorage()
    capturaIdentificacaoUser()
    atulizarHeader()
    carregarOpcMercados();

    nameList.oninput = () => {
        let caractersInvalidos = "!@#$%¨6*()+=§[{}]ºª|\<>,.:;";
        let title = document.getElementById("titleList");
        let ultimoCaracter = nameList.value.charAt(nameList.value.length - 1);

        if (caractersInvalidos.indexOf(ultimoCaracter) >= 0 || nameList.value.length > 20 ) {
            nameList.value = nameList.value.substr(0, nameList.value.length - 1);
        };
        
        if (nameList.value != '') {
            title.innerHTML = nameList.value.toUpperCase();
        } else {
            title.innerHTML = "Nova Lista".toUpperCase();
        }
    };

    adicionarMercado.onclick = () => {


        if (mercadosSelectFavoritados < MAX_MERCADOS) {
            document.getElementById("mercadosSelecionados").appendChild(favoritarMercado());
        } else {
            document.getElementById("adicionarMercado").innerHTML = " # ";
        };
    };

    btn_continue.onclick = () => {
        inserirDadosLista();
    };

    btn_cancel.onclick = () => {
        limparCadastro();
    }

};



