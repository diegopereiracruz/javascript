var x = undefined;
var arrayDeValores = [];

while (x != "Q") {
    x = prompt("Conjectura de Collatz\n\na: o que é?\nc: créditos\nq: sair\n\nDigite um número natural inteiro:");
    
    x = x.toUpperCase();
    
    switch (x){
        case "A":
            x = prompt("A Conjectura de Collatz ou também é conhecido como Problema 3x + 1, é um problema matemático proposto pelo matemático alemão Lothar Collatz, em 1937.\n\nO problema consiste em obter qualquer número natural inteiro, caso o mesmo seja par, será dividido por 2 (x / 2), caso seja impar, será multiplicado por 3 e adicionado 1 (x * 3 + 1).\n\nEntretanto, qualquer número natural inteiro, eventualmente chegará a 4, que se converte em 2 e terminando em 1, entrando em uma sequência de 4, 2, 1 infinitamente.\n\nwiki: ver na Wikipédia\nqualquer tecla: voltar");
            if (x.toUpperCase() == "WIKI") {
                window.open("http://pt.wikipedia.org/wiki/Conjectura_de_Collatz", "_blank");
            } else {
                x = undefined;
            }
            
            break;
        
        case "C":
            x = prompt("Script feito por: Diego Pereira Cruz\ngithub.com/diegopereiracruz\n\nDecidi fazer este script após ver um vídeo do assunto no canal do YouTube Veritasium, além também de testar meu conhecimento em JavaScript.\n\ngithub: meu perfil do Github\nvideo: vídeo do Veritasium no qual me referi\nqualquer tecla: voltar");
            if (x.toUpperCase() == "GITHUB") {
                window.open("https://github.com/diegopereiracruz", "_blank");
            } else if (x.toUpperCase() == "VIDEO" || x.toUpperCase() == "VÍDEO") {
                window.open("https://youtu.be/094y1Z2wpJg", "_blank");
            } else {
                x = undefined;
            }
            
            break;
        
        case "Q":
            break;
        
        default:
            arrayDeValores.push(Number(x));
            
            while (arrayDeValores.length != 0) {
                if (arrayDeValores.slice(arrayDeValores.length - 1) == 1) {
                    x = prompt("Total de sequências: " + arrayDeValores.length + "\n\nTodos os valores:\n" + arrayDeValores.join(" | ") + "\n\n4, 2, 1 se repetirá infinitamente\n\nqualquer tecla: voltar");
                    arrayDeValores = [];
                    x = undefined;
                    break;
                    
                } else if (arrayDeValores.slice(arrayDeValores.length - 1) % 2 == 1 && arrayDeValores.slice(arrayDeValores.length - 1) > 0) {
                    alert(arrayDeValores.slice(arrayDeValores.length - 1) + "\n\nImpar\n" + arrayDeValores.slice(arrayDeValores.length - 1) + " * 3 + 1\n\nSequência:\n" + arrayDeValores.join(" | "));
                    arrayDeValores.push(arrayDeValores.slice(arrayDeValores.length - 1) * 3 + 1);
                    
                } else if (arrayDeValores.slice(arrayDeValores.length - 1) % 2 == 0 && arrayDeValores.slice(arrayDeValores.length - 1) != 0 && arrayDeValores.slice(arrayDeValores.length - 1) > 0) {
                    alert(arrayDeValores.slice(arrayDeValores.length - 1) + "\n\nPar\n" + arrayDeValores.slice(arrayDeValores.length - 1) + " / 2\n\nSequência:\n" + arrayDeValores.join(" | "));
                    arrayDeValores.push(arrayDeValores.slice(arrayDeValores.length - 1) / 2);
                    
                } else {
                    alert("Entrada inválida!\n\nInsira um número natural inteiro positivo ou um comando.\nNão será válido 0 (zero), números negativos ou símbolos.");
                    arrayDeValores = [];
                    x = undefined;
                    break;
                }
            }
            
            break;
    }
}
