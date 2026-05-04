//Exercícios Fáceis
let number = 10;
if (number == 10) {
    alert("O número é 10");
}

let nome = "Lucas Lima";
if (nome == "Lucas Lima") {
    alert("Lucas Lima");
}

function averiguar() {
    let ok = document.getElementById("ok").value;
    if (ok == "ok") {
        alert("Ok");
    }
}

function vernum5() {
    let n5 = document.getElementById("num5").value;
    if (n5 == 5) {
        alert("O número é 5");
    }
}

function veradmsupremo(){
    let adm = document.getElementById("admsupremo").value;
    if (adm == "admin") {
        document.getElementById("resultadoadm").textContent = "Correto";
    }
}

function alterartexto() {
    let texto = document.getElementById("testar").value;
    if (texto == "teste") {
        document.getElementById("elemuda").textContent = "Você testou!"
    }
}

function mudarcor() {
    let cor = document.getElementById("divazul").value;
    if (cor == "azul") {
        document.getElementById("divzinha").style.backgroundColor = "#2dabffee";
        document.getElementById("divzinha").style.padding = "20px";
    }
}

//Exercícios Médios

function numbermaiorque10() {
    let num = document.getElementById("averiguarnumero10").value;
    if (num > 10) {
        alert("O número é maior que 10");
    }
}

function numbermenorque50() {
    let num = document.getElementById("menor50").value;
    if (num < 50) {
        alert("O número é menor que 50");
    }
}

function versenha() {
    let senha = document.getElementById("versenha").value;
    if (senha == "senha") {
        document.getElementById("resultadosenha").textContent = "Senha correta!";
    }
}

function mudarfundo() {
    let corfundo = document.getElementById("fundoescuro").value;
    if (corfundo == "escuro") {
        document.body.style.backgroundColor = "#6a7277ee";
    }
}

function lucas2() {
    let rodrigo = document.getElementById("cld").value;
    if (rodrigo == 22) {
        document.getElementById("ldc3").textContent = "ADS ta me chamando";
        document.getElementById("ldc3").style.color = "red";
    }
}

function slaoxe() {
    let x = document.getElementById("LucasLima").value;
    if (x == "ok") {
        document.getElementById("resultadosenha").style.color = "red";
        document.getElementById("resultadosenha").style.fontSize = "50px";
    }
}

function rayquaza() {
    let num = Number(document.getElementById("charizard").value);
    if (num >= 20) {
        document.getElementById("blastoise").style.fontSize = "200%";
    }
}

//Exercícios Difíceis


function pikachu() {
    let adm = document.getElementById("pichu").value;
    if (adm = "admin") {
        alert("Bem-Vindo!");
    }
}

function gabite() {
    let valor = document.getElementById("gible").value;
    if (valor = "garchomp") { 
        document.getElementById("garchomp").textContent = "Garchomp!";
        document.getElementById("garchomp").style.color = "red";   
        document.getElementById("garchomp").style.fontSize = "40px";
    }
}

function transmorfo() {
    let muda3 = document.getElementById("voumudar").value;
    if (muda3 === "aviso") {
        let elemento = document.getElementById("avisando");
        elemento.textContent = "Eu avisei";
        elemento.style.background = "#639ec2ee";
        elemento.style.padding = "15px";
        elemento.style.color = "white";
    }
}

function querodormir() {
    let valor = document.getElementById("tocansadochefe").value;
    if (Number(valor) > 100) {
        document.body.style.backgroundColor = "#b8e9ddee";
    }
}

function socorroo() {
    let slakakaka = document.getElementById("meudeus");
    let colarcopiar = document.getElementById("tenhoprovaamanha");
    if (colarcopiar.value === "copiar") {
        slakakaka.textContent = colarcopiar.value;
    }
}

function silksongebom() {
    let valorInput = document.getElementById("querojogar").value;
    let divv1 = document.getElementById("HK1");
    let divv2 = document.getElementById("HK2");
    if (Number(valorInput) > 10) {
        divv1.textContent = "valor alto";
        divv1.style.backgroundColor = "lightgreen";
        divv2.textContent = "valor baixo";
        divv2.style.backgroundColor = "red";
    }
}

function L() {
    let valor222 = document.getElementById("M").value; 
    if (Number(valor222) > 29) {
        document.getElementById("LM").textContent = "Eu quero zerar hogwarts legacy logo";
        document.getElementById("LM").style.color = "green";
    }
}