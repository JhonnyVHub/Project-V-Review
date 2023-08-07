function imc() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso / (altura^2);

    if (imc < 18.5) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "MAGREZA"!!!`);
    }
    if (imc >= 18.5 && imc < 24.99) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "NORMAL"...`);
    }
    if (imc >= 25 && imc < 29.99) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "SOBREPESO"...`);
    }
    if (imc >= 30 && imc < 34.99) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "OBESIDADE 1"!!!`);
    }
    if (imc >= 35 && imc < 39.99) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "OBESIDADE 2"!!!`);
    }
    if (imc > 39) {
        alert(`O valor do seu IMC: ${parseInt(imc)}`)
        alert(`Devo dizer que você está na gategoria "OBESIDADE 3"!!!`);
    }
}

function jurosC() {
    let produto = document.querySelector("#produtoVal").value;
    let parc = document.querySelector("#parcelas").value;
    let taxa = document.querySelector("#taxam").value;

    let final = produto * Math.pow((1+ (taxa/100)),parc);
    alert(`Valor final a ser pago pelo cliente será: R$${parseInt(final)},00`);
}

function compPreco() {
    let precoC = parseFloat(document.querySelector("#precoC").value);
    let lucro = parseFloat(document.querySelector("#lucro").value);
    let transporte = parseFloat(document.querySelector("#transporte").value);
    let armazenagem = parseFloat(document.querySelector("#armazenagem").value);
    let comissao = parseFloat(document.querySelector("#comissao").value);

    let porc = 1+ ((lucro + transporte + armazenagem + comissao) /100);
    let finalCp = Math.round(precoC * porc, 2);

    console.log(porc);

    alert(`O preço de venda deste produto: R$${finalCp}`);
}

function darkT() {
    let body = document.body;
    body.classList.add(`darkTh`);

    let navDeL = document.querySelector("#navDeL");
    navDeL.classList.remove(`bg-light`);
    navDeL.classList.remove(`navbar-light`);
    navDeL.classList.add(`bg-dark;`)
    navDeL.classList.add(`navbar-dark`);
    
}

function lightT() {
    let body = document.body;
    body.classList.remove(`darkTh`);

    let navDeL = document.querySelector("#navDeL");
    navDeL.classList.add(`bg-light`);
    navDeL.classList.add(`navbar-light`);
    navDeL.classList.remove(`bg-dark;`)
    navDeL.classList.remove(`navbar-dark`);
}