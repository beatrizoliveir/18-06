const numeros = [6.0, 7.5, 8.0, 8.5, 9.0];
let soma = 0;

let media;

for(i = 0; i < 4; i ++){
    soma = soma + numeros[i];
}
media = soma/numeros.length
console.log(media);