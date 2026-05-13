function VerificarIdade() {
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");
    if (idade == "" || idade <= 0) {
        resultado.textContent = "Idade inválida";
    }
    else if (idade < 12) {
        resultado.textContent = "Você é criança";
    }
    else if (idade >= 18 && idade <= 59) {
        resultado.textContent = "Você é adulto";
    }
    else if (idade >= 60) {
        resultado.textContent = "Você é idoso";
    }
    else if (idade >= 12 && idade <= 17) {
        resultado.textContent = "Você é adolescente";
    }
}

function Hooh() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let resultado2 = document.getElementById("resultado2");
    if (usuario == "admin" && senha == "1234") {
        resultado2.textContent = "Login realizado com sucesso";
    }

    else if (usuario == "professor" && senha == "senac"){
        resultado2.textContent = "Bem-vindo, professor";
    }

    else if (usuario == "" && senha == ""){
        resultado2.textContent = "Preencha todos os campos";
    }

    else {
        resultado2.textContent = "Usuário ou senha incorretos"
    }
}

function pikachu() {
    let valor = document.getElementById("valorProduto").value;
    let vip = document.getElementById("vip").value;
    let cupom = document.getElementById("cupom").value;
    let resultado3 = document.getElementById("pDesconto")
    if (valor == "" && vip == "" && cupom == "" || valor <= 0 ) {
        resultado3.textContent = "erro";
    }

    else if (valor >= 500 && vip == "sim") {
        resultado3.textContent = valor - (valor/20);
    }

    else if (valor >= 300 && cupom == "sim") {
        resultado3.textContent = valor - (valor/10)
    }

    else if (valor >= 300 && cupom == "") {
        resultado3.textContent = "erro";
    }
}


function Avaliar() {
    let nota = document.getElementById("nota").value;
    let freq = document.getElementById("frequencia").value;
    let resultado4 = document.getElementById("resultado4");
    if (nota >=  60 &&  nota <= 100 && freq >= 75 && freq <=100) {
        Texto.textContent = "Aprovado";
    }

    if (nota >= 40 && Nota <= 59 && freq >= 75) {
        Texto.textContent = "Recuperação";
    }

    if (nota <= 40 && freq <= 75) {
        Texto.textContent = "Reprovado";
    }

    if (nota == "" && freq == "") {
        Texto.textContent = "Obrigatório preencher o campo";
    }

    if (nota >= 101 && freq >=101) {
        Texto.textContent = "Valores inválidos";
    }
}