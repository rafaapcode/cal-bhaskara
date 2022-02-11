const a = $("#a");
const b = $("#b");
const c = $("#c");
const btn = $("#btn");
const valornatela = $(".deltaValor");
const x1 = $(".x1");
const x2 = $(".x2");


const bhaskara = function () {
    const bQuadrado = b.val() * b.val();
    const mAeC = a.val() * c.val();
    const meno4 = -4 * mAeC;

    const result = bQuadrado + meno4;

    valornatela.text(`${result}`);

    if (result >= 0) {
        const div = 2 * a.val();
        const bneg = -b.val();
        const quadradaDelta = Math.sqrt(result);

        const x1calc = (bneg + quadradaDelta) / div;
        const x2calc = (bneg - quadradaDelta) / div;

        x1.text(`O x1 é igual a: ${Math.round(x1calc)}`);
        x2.text(`O x2 é igual a: ${Math.round(x2calc)}`);
        x2.css("display", "block");
    }else{
        x1.text(`Não existe raiz de Número negativo.`);
        x2.css("display", "none")
    }
}



btn.click(bhaskara);




