var x = undefined;

while (x != "q") {
    x = prompt("A Conjectura de Collatz\nwiki: O que é?\nq: Sair\n\nDê o valor inicial");
    
    switch (x){
        case "wiki":
            window.open("http://pt.wikipedia.org/wiki/Conjectura_de_Collatz", "_blank");
            
            x = undefined;
            break;
            
        case x == Number(x):
            
            
            x = undefined;
            break;
        
        case "q":
            x = "q";
            break;
        
        default:
            if (x == Number()) {
                while (x) {
                    if (x == 4) {
                        alert("Caiu no loop");
                        break;
                    }
                    else if (x % 2 == 1) {
                        alert(x = x * 3 + 1);
                    } else {
                        alert(x = x / 2);
                    }
                }
            } else {
                alert("Apenas número ou wiki!");
                x - undefined;
            }
            
            break;
    }
    
}

