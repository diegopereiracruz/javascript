var birdsPerDay = [7,2,4,9,0,2,7,0,7,5,2,1,9,0]; // 14 days; 2 weeks
var week = 2; // Semana escolhida
var daysWeek = 7; // Dias por semana
var numWeek = birdsPerDay.length / daysWeek; // Qnt. de semanas
var total = 0; // Total de pássaros por semana

var arrayWeeks = [];
var temp = []; // Array temporário

// PROCESSAMENTO

for (var j = 0; j < numWeek; j++) {
    arrayWeeks[j] = 1 + j; // ATENÇÃO! 0 = 1
    //console.log(arrayWeeks[j]);
}

if (week == arrayWeeks[week - 1]) { // ATENÇÃO! 2 = 1
    if 
    
} else console.log("Erro: if (week == arrayWeeks)");

/*

for (var i = 0; i <= birdsPerDay.length; i++) {
    
    while (i < daysWeek) {
        temp[i] = birdsPerDay[i];
        total += i;
        break;
    }
    while (i > 6 && i <) {
        week1[i] = birdsPerDay[i];
        break;
    }
}

console.log(temp);
console.log(total);*/
