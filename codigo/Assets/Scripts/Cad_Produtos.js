var imported = document.createElement('script');
imported.src = '/Assets/Scripts/Bancos.js';
document.head.appendChild(imported);

var user;
var nome
var descricao

function capturaIdentificacaoUser() {
    const params = new URLSearchParams(window.location.search)
    user = params.get("id");
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
      
            home[i].href = "https://home.olivwallace.repl.co/?id=" +user
            link0[i].href = "https://lista.olivwallace.repl.co/?id=" + user
            link1[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Listas/Cad_Listas.html?id=" + user
            link2[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Cad_Notas/Cad_Notas.html?id=" + user
            sobre[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Sobre/sobre.html?id=" + user
            perfil[i].href = "https://melhorprecofinal.olivwallace.repl.co/Modules/Perfil/perfil.html?id=" + user

        }
        let sel = document.querySelector('#form-cadProduto')
            sel.innerHTML += `<a href="/Modules/Cad_Notas/Cad_Notas.html?id=${user}" id="salvarProduto" type="button" class="btnSalvar"">Salvar</a>`
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

function bloqueiaInput(input, bool) {
    input.disabled = bool;
}

function retornaSubStr(input, maxTam) {
    let caractersInvalidos = "!@#$%¨*()+=§[{}]ºª|<>,.:;";
    let strPesquisa = input.value.trim();

    let ultimoCaracter = input.value.charAt(input.value.length - 1);

    if (caractersInvalidos.indexOf(ultimoCaracter) >= 0 || input.value.length > maxTam) {
        input.value = input.value.substr(0, input.value.length - 1);
    } else if (ultimoCaracter == " " && input.value.length == 1) {
        input.value = input.value.substr(0, input.value.length - 1);
    }

    return strPesquisa
}

function validarSalvamento(){
    return (nameProduto.disabled == true && descricaoProduto.disabled == true)
}

window.onload = () => {
    var nomeAlterado
    var descricaoAlterado

    capturaIdentificacaoUser()
    atulizarHeader();

    nameProduto.oninput = () => {
        let str = retornaSubStr(nameProduto, 35)
        if(str.length < 1){
            nomeAlterado = false   
        }else{
            nome = str
            nomeAlterado = true  
        }
    }

    descricaoProduto.oninput = () => {
        let str = retornaSubStr(descricaoProduto, 45) 
        
        if(str.length < 1){
            descricaoAlterado = false   
        }else{
            descricao = str
            descricaoAlterado = true 
        }

    }

    nameProduto.onchange = () => {
        if(nomeAlterado) setTimeout(bloqueiaInput(nameProduto, true), 5);
        nomeAlterado = true
    }

    descricaoProduto.onchange = () =>{
        if(descricaoAlterado) setTimeout(bloqueiaInput(descricaoProduto, true), 5);
        descricaoAlterado = true
    }

    alterarNome.onclick = () => {
        bloqueiaInput(nameProduto, false)
        nameProduto.focus()
        nomeAlterado = false
    }

    alterarDescricao.onclick = () =>{
        bloqueiaInput(descricaoProduto, false)
        descricaoProduto.focus()
        descricaoAlterado = false
    }

    salvarProduto.onclick = () =>{
        let Produtos = carregarDadosProdutos()

        if(validarSalvamento()){
            let item = {
                idProduto: (Produtos.length + 1),
                nomeProduto: nome,
                DescricaoProduto: descricao
            }
            
            Produtos.push(item)
        }

        localStorage.setItem("Produtos", JSON.stringify(Produtos))
    }


}