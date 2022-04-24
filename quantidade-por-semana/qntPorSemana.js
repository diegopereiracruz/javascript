var qntPerDay = [7,2,4,9,0,2,7,0,7,5,2,1,9,0,7,2,4,9,0,2,7,0,7,5,2,1,9,0]; // Quantidade por dia
var daysWeek = 7; // Dias por semana
var numWeek = qntPerDay.length / daysWeek; // Qnt. de semanas
var cont = 0;
var totalOfWeeks = {}; // Estoque de semanas
var week = 2; // Semana escolhida

for (var i = 0; i < qntPerDay.length; i += daysWeek) {
    var chunk = qntPerDay.slice(i, i + daysWeek);
    cont++;
    totalOfWeeks["semana" + cont] = chunk;
}

console.log(totalOfWeeks["semana" + week]);
