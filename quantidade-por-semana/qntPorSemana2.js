var input = undefined;
var numSemana = 1;
var numDia = 1;
var semana = [];
var totalDeSemanas = {};

while (input != "q") {
    input = prompt("Escreva um número de 0-9\nr = aleatório\nq = finalizar\n\n" + "[Semana " + numSemana + "]\nDia " + numDia);
    if (input == Number(input)) {
        if (numDia < 7) {
            numDia++;
            semana.push(input);
        } else {
            semana.push(input);
            totalDeSemanas["semana" + numSemana] = semana;
            numDia = 1;
            numSemana++;
            semana = [];
        }
    }
}

var keys = Object.keys(totalDeSemanas);
keys.forEach((keys, index) => {
    console.log(`${keys}: ${totalDeSemanas[keys]}`);
});
