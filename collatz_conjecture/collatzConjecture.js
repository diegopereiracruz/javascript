var x = undefined;
var repetitions = 0;

while (x != "q") {
    x = prompt("Conjectura de Collatz\na: O que é?\nq: Sair\n\nDigite um número natural inteiro (ex.: 7):");
    
    switch (x){
        case "a":
            y = prompt("A Conjectura de Collatz ou também é conhecido como Problema 3x + 1, é um problema matemático proposto pelo matemático alemão Lothar Collatz, em 1937.\n\nO problema consiste em obter qualquer número natural inteiro, caso o mesmo seja par, será dividido por 2 (x / 2), caso seja impar, será multiplicado por 3 e adicionado 1 (x * 3 + 1).\nEntretanto, qualquer número natural inteiro, eventualmente chegará a 4, que se converte em 2 e terminando em 1, entrando em uma sequência de 4, 2, 1 infinitamente.\n\nwiki: ver na wikipédia.\nqualquer tecla: voltar");
            if (y == "wiki" || y == "Wiki" || y == "WIKI") {
                window.open("http://pt.wikipedia.org/wiki/Conjectura_de_Collatz", "_blank");
            } else {
                x = undefined;
                y = undefined;
                break;
            }
            
            break;
        
        case "q":
            x = "q";
            break;
        
        default:
            if (!Number.isNaN(x)) {
                while (x) {
                    if (x == 1) {
                        repetitions++;
                        alert(x = x * 3 + 1);
                        
                        if (repetitions == 2) {
                            alert(x / 2);
                            alert("Caiu no loop");
                            break;
                        }
                    }
                    else if (x % 2 == 1) {
                        alert(x = x * 3 + 1);
                    } else {
                        alert(x = x / 2);
                    }
                }
            } else if (Number.inNaN(x)) {
                alert("Entrada inválida!\nInsira um número ou um comando.");
                x = undefined;
            }
            
            break;
    }
}
