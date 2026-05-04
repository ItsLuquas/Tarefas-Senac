//Exercícios Fáceis

function caixinha() {
    alert("Olá mundo");
    let nome = "Lucas Lima Ferreira";
    alert(nome);
    let numero1 = 17;
    let numero2 = 50;
    let soma = numero1 + numero2;
    alert(soma);
}

function mudartexto() {
    document.getElementById("textin").textContent = "Mas prefiro slipknot";
}


function cordiv() {
    document.getElementById("divizinha").style.background = "#79a0e9";

}

function voceclicou() {
    document.getElementById("paragrafonovo").textContent = "Você Clicou!";
}

function limpartexto() {
    document.getElementById("paragrafoinvisivel").textContent = "";
}


//Exercícios Médios

function funcao() {
    let par = document.getElementById("paragrafo");
    let cax = document.getElementById("caixa");
    let escrita = par.textContent;
    cax.value = escrita;
}

function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado =  Number(num1) + Number(num2);
    let local = document.getElementById("result");
    local.textContent = resultado;
}

function fundo() {
    document.body.style.background = "#598fc2"
}

function tamanhopar() {
    document.getElementById("risada").style.fontSize = "200%";
}

function mudarcor() {
    document.getElementById("corzinha").style.color = "#0ca30cee";
}

function altconteudo() { 
    document.getElementById("elemento1").textContent = "Contra fatos não há argumentos.";
    document.getElementById("elemento1").style.color = "#a30c69ee";
    document.getElementById("elemento1").style.fontSize = "200%";
    document.getElementById("elemento2").textContent = "É apenas verdades."
    document.getElementById("elemento2").style.color = "#a3670cee";
    document.getElementById("elemento2").style.fontSize = "200%";
}

function trielementos() {
    document.getElementById("element1").textContent = "Sad Statue/Question!.";
    document.getElementById("element2").textContent = "Dead Memories/The Devil in I."
    document.getElementById("element3").textContent = "From the Inside/The Emptiness Machine."
}


//Exercícios Dificéis

function textoquemudatudo() {
    document.getElementById("alterou").textContent = "Uououou sweet child o' mine.";
    document.getElementById("alterou").style.color = "#e6d437ee";
    document.getElementById("alterou").style.fontSize = "200%";
}

function transferencia() {
    let caixa1 = document.getElementById("transferencia1");
    let caixa2 = document.getElementById("transferencia2");
    let par = document.getElementById("parlegal").textContent;
    caixa1.value = par;
    caixa2.value = par;
}

    function troquemeutexto() {
        document.getElementById("personalizavel").textContent = "Eu disse que sou totalmente personalizavel";
    }
    function troqueminhacor() {
        document.getElementById("personalizavel").style.color = "#37e64eee";
    }
    function troquemeutamanho() {
        document.getElementById("personalizavel").style.fontSize = "200%";
    }

function mudardivs() {
    document.getElementById("div1").style.padding = "50px";
    document.getElementById("div1").style.backgroundColor = "#72b6d6";
    document.getElementById("div2").style.padding = "50px";
    document.getElementById("div2").style.backgroundColor = "#d67972";
}

function copiador() {
    document.getElementById("colar");
    document.getElementById("resultadov").textContent = colar.value;
    document.getElementById("resultadov").style.color = "red";
}

    function somab1() {
        let somabb1 = Number(document.getElementById("numero6").value);
        let somabb2 = Number(document.getElementById("numero62").value);
        let soma12 = somabb1 + somabb2
        document.getElementById("resultadodasoma").textContent = soma12;
    }

    function nadab1(){
        let r = document.getElementById("resultadodasoma").textContent = "";
    }

function geral(){
    let geral1 = document.getElementById("personalizavel").style.fontSize = "200%";
    let geral2 = document.getElementById("numero6").style.backgroundColor = "red";
    let geral3 = document.getElementById("numero62").style.backgroundColor = "blue";
    let geral4 = document.getElementById("resultadodasoma").style.backgroundColor = "#d92bfc";
}