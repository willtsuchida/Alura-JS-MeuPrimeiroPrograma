console.log(`\nTrabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Erro");
}

for (let i = 0; contador < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
    contador++;
}