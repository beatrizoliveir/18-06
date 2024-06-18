const numeros = [6.0, 7.5, 8.0, 8.5, 9.0];
let soma = 0;

let media;

for(let valor of numeros) {
    soma = soma + valor
}
media = Math.round(soma/numeros.length)
console.log(media);


