const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const btn = document.querySelector("#btn");
const valornatela = document.querySelector(".deltaValor");


const bhaskara = function () {
    const bQuadrado = b.value * b.value;
    const mAeC = a.value * c.value;
    const meno4 = -4 * mAeC;

    const result = bQuadrado + meno4;

   valornatela.innerHTML = `${result}`;
}

btn.addEventListener("click", bhaskara);

