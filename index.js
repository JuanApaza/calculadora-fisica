const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
var calcularPerimetroCuadrado = () =>{
    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = perimetroDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
const perimetroDelCirculo = (radioDelCirculo) => (2 * Math.PI * radioDelCirculo).toFixed(4);
const areaDelCirculo = (radioDelCirculo) =>(Math.PI * Math.pow(radioDelCirculo,2)).toFixed(4);
var calcularAreaCirculo = () => {

    const radioDelCirculo = document.querySelector("#radio-circulo").value;
    const resultado = areaDelCirculo(radioDelCirculo)
    document.querySelector("#resultado-circulo").innerHTML = resultado
}
var calcularPerimetroCirculo= () =>{
    const radioDelCirculo = document.querySelector("#radio-circulo").value;
    const resultado = perimetroDelCirculo(radioDelCirculo)
    document.querySelector("#resultado-circulo").innerHTML = resultado
}
const perimetroDelTriangulo = (baseDelTriangulo,alturaDelTriangulo) => {
    const ladosIsoseles = Math.pow( Math.pow(baseDelTriangulo/2,2) + Math.pow(alturaDelTriangulo,2) ,0.5)
    const perimetroDelTriangulo = Math.round( 2*ladosIsoseles+baseDelTriangulo*100)/100;
    return perimetroDelTriangulo
}

const areaDelTriangulo = (baseDelTriangulo,alturaDelTriangulo) => baseDelTriangulo * alturaDelTriangulo /2;
var calcularAreaTriangulo = () => {
    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = areaDelTriangulo(baseDelTriangulo, alturaDelTriangulo)
    document.querySelector("#resultado-triangulo").innerHTML = resultado
}
var calcularPerimetroTriangulo = () => {
    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = perimetroDelTriangulo(baseDelTriangulo, alturaDelTriangulo)
    document.querySelector("#resultado-triangulo").innerHTML = resultado
}

const perimetroDelRectangulo = (baseDelRectangulo,alturaDelRectangulo) => 2 * baseDelRectangulo + alturaDelRectangulo * 2;
const areaDelRectangulo = (baseDelRectangulo,alturaDelRectangulo) => baseDelRectangulo * alturaDelRectangulo;
var calcularAreaRectangulo= () => {
    const baseDelRectangulo = document.querySelector("#base-rectangulo").value;
    const alturaDelRectangulo = document.querySelector("#altura-rectangulo").value;
    const resultado = areaDelRectangulo(baseDelRectangulo, alturaDelRectangulo)
    document.querySelector("#resultado-rectangulo").innerHTML = resultado
}
var calcularPerimetroRectangulo= () => {
    const baseDelRectangulo = document.querySelector("#base-rectangulo").value;
    const alturaDelRectangulo = document.querySelector("#altura-rectangulo").value;
    const resultado = perimetroDelRectangulo(baseDelRectangulo, alturaDelRectangulo)
    document.querySelector("#resultado-rectangulo").innerHTML = resultado
}

const perimetroDelTrapecio = (baseInferiorDelTrapecio, baseSuperiorDelTrapecio, alturaDelTrapecio) => {
    const trianguloBase = Math.abs(baseInferiorDelTrapecio- baseSuperiorDelTrapecio)/2;
    const ladoIgual = Math.pow( Math.pow(trianguloBase,2) + Math.pow(alturaDelTrapecio,2) ,0.5)
    const resultado=ladoIgual*2+baseInferiorDelTrapecio+baseSuperiorDelTrapecio
    return resultado
}
const areaDelTrapecio = (baseInferiorDelTrapecio, baseSuperiorDelTrapecio, alturaDelTrapecio) => baseInferiorDelTrapecio*baseSuperiorDelTrapecio*alturaDelTrapecio/2;
var calcularAreaTrapecio = () => {
    const baseInferiorDelTrapecio = document.querySelector("#basei-trapecio").value;
    const baseSuperiorDelTrapecio = document.querySelector("#bases-trapecio").value;
    const alturaDelTrapecio = document.querySelector("#altura-trapecio").value;
    const resultado = areaDelTrapecio(baseInferiorDelTrapecio, baseSuperiorDelTrapecio, alturaDelTrapecio)
    document.querySelector("#resultado-trapecio").innerHTML = resultado
}
var calcularPerimetroTrapecio = () => {
    const baseInferiorDelTrapecio = document.querySelector("#basei-trapecio").value;
    const baseSuperiorDelTrapecio = document.querySelector("#bases-trapecio").value;
    const alturaDelTrapecio = document.querySelector("#altura-trapecio").value;
    const resultado = Math.round(perimetroDelTrapecio(baseInferiorDelTrapecio, baseSuperiorDelTrapecio, alturaDelTrapecio)*100)/100;
    document.querySelector("#resultado-trapecio").innerHTML = resultado
}

const perimetroDelParalelogramo = (baseDelParalelogramo,alturaDelParalelogramo) => 2 * baseDelParalelogramo + alturaDelParalelogramo * 2;
const areaDelParalelogramo = (baseDelParalelogramo,alturaDelParalelogramo) => baseDelParalelogramo * alturaDelParalelogramo;
var calcularAreaParalelogramo= () => {
    const baseDelParalelogramo = document.querySelector("#base-paralelogramo").value;
    const alturaDelParalelogramo = document.querySelector("#altura-paralelogramo").value;
    const resultado = areaDelParalelogramo(baseDelParalelogramo, alturaDelParalelogramo)
    document.querySelector("#resultado-paralelogramo").innerHTML = resultado
}
var calcularPerimetroParalelogramo= () => {
    const baseDelParalelogramo = document.querySelector("#base-paralelogramo").value;
    const alturaDelParalelogramo = document.querySelector("#altura-paralelogramo").value;
    const resultado = perimetroDelParalelogramo(baseDelParalelogramo, alturaDelParalelogramo)
    document.querySelector("#resultado-paralelogramo").innerHTML = resultado
}



