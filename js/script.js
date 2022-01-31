const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const btn = document.querySelector("#btn");
const valornatela = document.querySelector(".deltaValor");
const x1 = document.querySelector(".x1");
const x2 = document.querySelector(".x2");


const bhaskara = function () {
    const bQuadrado = b.value * b.value;
    const mAeC = a.value * c.value;
    const meno4 = -4 * mAeC;

    const result = bQuadrado + meno4;

    valornatela.innerHTML = `${result}`;

    if (result >= 0) {
        const div = 2 * a.value;
        const bneg = -b.value;
        const quadradaDelta = Math.sqrt(result);

        const x1calc = (bneg + quadradaDelta) / div;
        const x2calc = (bneg - quadradaDelta) / div;

        x1.innerHTML = `O x1 é igual a: ${x1calc}`;
        x2.innerHTML = `O x2 é igual a: ${x2calc}`;
    }else{
        x1.innerHTML = `Não existe raiz de Número negativo.`;
    }
}

btn.addEventListener("click", bhaskara);




