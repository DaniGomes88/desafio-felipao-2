var prompt = require('prompt-sync')();

console.log ('Seja bem vindo Herói! Agora vamos calcular seu saldo de Rankeadas e descobrir em que nível você se encontra!');
let nomeDeUsuario = prompt ('Por favor, digite seu nome: ');
let vitorias = prompt ('Digite sua quantidade de Vitórias: ');
let derrotas = prompt ('Digite sua quantidade de Derrotas: ');
let saldoDeRankeadas = calcularSaldoDeVitorias (vitorias, derrotas);
let nivelHeroi = definirNivelHeroi(saldoDeRankeadas);
console.log (`${nomeDeUsuario}, seu saldo de Rankeadas é de ${saldoDeRankeadas} e você está no nível ${nivelHeroi}!!!`)


function calcularSaldoDeVitorias(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas;
    return saldoDeVitorias;

}

function definirNivelHeroi(saldoDeRankeadas) {
    if (saldoDeRankeadas <= 10){
        return nivel = "Ferro"
     } else if (saldoDeRankeadas > 10 && saldoDeRankeadas <= 20){
        return nivel = "Bronze"
     } else if (saldoDeRankeadas > 20 && saldoDeRankeadas <= 50){
        return nivel = "Prata"
     } else if (saldoDeRankeadas > 50 && saldoDeRankeadas <= 80){
        return nivel = "Ouro"
     } else if (saldoDeRankeadas > 81 && saldoDeRankeadas <= 90){
        return nivel = "Diamante"
     } else if (saldoDeRankeadas > 90 && saldoDeRankeadas <= 100){
        return nivel = "Lendário"
     } else if (saldoDeRankeadas > 100){
        return nivel = "Imortal"
     }
}

