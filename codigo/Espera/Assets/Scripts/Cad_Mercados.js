var imported = document.createElement('script');
imported.src = '/Assets/Scripts/Bancos.js';
document.head.appendChild(imported);

var user;
var nome
var endereco
var cnpj

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

            link0[i].href = "/Modules/API_map_list/lista.html?id=" + user
            link1[i].href = "/Modules/Cad_Listas/Cad_Listas.html?id=" + user
            link2[i].href = "/Modules/Cad_Notas/Cad_Notas.html?id=" + user
        }

        let sel = document.querySelector('#form-cadMercado')
        sel.innerHTML += `<a href="/Modules/Cad_Notas/Cad_Notas.html?id=${user}" id="salvarMercado" type="button" class="btnSalvar">Salvar</ba>`
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

function bloqueiaInput(input, bool) {
    input.disabled = bool;
}

function retornaSubStr(input, maxTam) {
    let caractersInvalidos = "!@#$%¨*()+=§[{}]ºª|\<>,.:;";
    let strPesquisa = input.value.trim();

    let ultimoCaracter = input.value.charAt(input.value.length - 1);

    if (caractersInvalidos.indexOf(ultimoCaracter) >= 0 || input.value.length > maxTam) {
        input.value = input.value.substr(0, input.value.length - 1);
    } else if (ultimoCaracter == " " && input.value.length == 1) {
        input.value = input.value.substr(0, input.value.length - 1);
    }

    return strPesquisa
}

function retornaSubStrCNPJ(input, maxTam){
    let caractersInvalidos = "!@#$%¨*()+=§[{}]ºª|\<>,.:;qwertyuiop´[]~çlk\"\'jhgfdsa\zxcvbnm,.;_^?/°¹²³£¢¬§ª°?/º₢&¨%%$POIUYTREWQASDFGHJKLÇ^}:><MNBVCXZ";
    let strPesquisa = input.value.trim();

    let ultimoCaracter = input.value.charAt(input.value.length - 1);

    if (caractersInvalidos.indexOf(ultimoCaracter) >= 0 || input.value.length > maxTam) {
        input.value = input.value.substr(0, input.value.length - 1);
    } else if (ultimoCaracter == " " && input.value.length == 1) {
        input.value = input.value.substr(0, input.value.length - 1);
    }

    return strPesquisa
}

function validarSalvamento() {
    return (nameMercado.disabled == true && enderecoMercado.disabled == true && cnpjMercado.disabled == true)
}

function salvarNovoMercado(){
    let presente = false
    let mercadosSistema = carregarMercados();
    console.log(mercadosSistema)
    
    mercadosSistema.forEach(element => {
        if(element.cnpj == cnpj){
            presente = true
        }
    });

    if(!presente){
        let novo = {
            idMercado: (mercadosSistema.length + 1),
                    nomeMercado: nome,
                        endereco: endereco,
                            cnpj: cnpj,
                                produtos: []
        }

        mercadosSistema.push(novo)
    }

    localStorage.setItem('Mercados', JSON.stringify(mercadosSistema))
}


window.onload = () => {
    var nomeAlterado
    var enderecoAlterado
    var cnpjAlterado

    capturaIdentificacaoUser()
    atulizarHeader()

    nameMercado.oninput = () => {
        let str = retornaSubStr(nameMercado, 35)
        if (str.length < 1) {
            nomeAlterado = false
        } else {
            nome = str
            nomeAlterado = true
        }
    }

    enderecoMercado.oninput = () => {
        let str = retornaSubStr(enderecoMercado, 60)

        if (str.length < 1) {
            enderecoAlterado = false
        } else {
            endereco = str
            enderecoAlterado = true
        }

    }

   cnpjMercado.oninput = () => {

        let str = retornaSubStrCNPJ(cnpjMercado, 14)

        if (str.length < 1) {
            cnpjAlterado = false
        } else {
            cnpj = str
            cnpjAlterado = true
        }
    }

    nameMercado.onchange = () => {
        if (nomeAlterado) setTimeout(bloqueiaInput(nameMercado, true), 5);
        nomeAlterado = true
    }

    enderecoMercado.onchange = () => {
        if (enderecoAlterado) setTimeout(bloqueiaInput(enderecoMercado, true), 5);
        enderecoAlterado = true
    }

    cnpjMercado.onchange = () => {
        if (cnpjAlterado) setTimeout(bloqueiaInput(cnpjMercado, true), 5);
        cnpjAlterado = true
    }


    alterarNome.onclick = () => {
        bloqueiaInput(nameMercado, false)
        nameMercado.focus()
        nomeAlterado = false
    }

    alterarEndereco.onclick = () => {
        bloqueiaInput(enderecoMercado, false)
        enderecoMercado.focus()
        enderecoAlterado = false
    }

    alteraCNPJ.onclick = () => {
        bloqueiaInput(cnpjMercado, false)
        cnpjMercado.focus()
        cnpjAlterado = false
    }

    salvarMercado.onclick = () =>{
        if(validarSalvamento()) salvarNovoMercado()
    }

}