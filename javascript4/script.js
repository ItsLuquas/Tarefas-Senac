let produtos = [];
let precos = [];
let posicao = 0;
let quantidade = 0;

function cadastro(){
    let nome = document.getElementById("produto").value;
    let valor = document.getElementById("preco").value;
    if (valor == "" || nome == "") {
        document.getElementById("mensagem").textContent = "Preencha todos os campos";
        document.getElementById("mensagem").style.color = "red";
    }

        else {
        produtos.push(nome);
        precos.push(valor);
        quantidade = quantidade + 1;
        document.getElementById("mensagem").textContent = "Produto cadastrado com sucesso";
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("quantidade").textContent = "Quantidade de produtos cadastrados: " + quantidade;
        document.getElementById("produto").value = "";
        document.getElementById("preco").value = "";
    }
}

function mostrar(){
    if (produtos.length === 0) {
        document.getElementById("itens").textContent = "Nenhum produto cadastrado";
        return;
    }
    let itensTexto = "";
    let i = 0;
    while (i < produtos.length) {
        itensTexto += produtos[i] + ", R$: " + precos[i] + "  |  ";
        i++;
    }
    document.getElementById("itens").textContent = itensTexto;
    posicao = produtos.length;
        let total = 0;
}

    function apagar(){
    if (produtos.length > 0) {
        produtos.pop();
        precos.pop();
        quantidade = quantidade - 1;
        let itensTexto = "";
        let i = 0;
        while (i < produtos.length) {
            itensTexto += produtos[i] + ", R$: " + precos[i] + "  |  ";
            i++;
        }
        document.getElementById("itens").textContent = itensTexto || "Nenhum produto cadastrado";
        document.getElementById("quantidade").textContent = "Quantidade de produtos cadastrados: " + quantidade;
    }
}
