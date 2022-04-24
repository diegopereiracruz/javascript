var input = undefined;
var numSemana = 1;
var numDia = 1;
var semana = [];
var totalDeSemanas = {};
var operador = undefined;
var printAlert;

while (operador != "s") {
    operador = prompt("Quantidade por Semana\n[c] Criar\n[e] Exibir (beta)\n[m] Modificar (inexistente)\n[s] Sair\n\nFeito por: Diego Pereira Cruz");
    switch (operador) {
        case "c":
            while (input != "q") {
                input = prompt("Insira um valor:\n[r] aleatório\n[q] finalizar\n\n" + "[Semana " + numSemana + "]\nDia " + numDia);
                if (input == "r") input = Math.floor(Math.random() * 20) + 1;
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
            break;
        
        case "e":
            if (totalDeSemanas == undefined) break;
            var keys = Object.keys(totalDeSemanas);
            keys.forEach((keys, index) => {
                printAlert += `${keys}: ${totalDeSemanas[keys]}\n`;
            });
            alert(printAlert);
            break;
        
        case "s":
            operador = "s";
            break;
        
        default:
            alert("Ação inválida!");
            break;
    }
}
operador = undefined;

var keys = Object.keys(totalDeSemanas);
keys.forEach((keys, index) => {
    console.log(`${keys}: ${totalDeSemanas[keys]}`);
});
