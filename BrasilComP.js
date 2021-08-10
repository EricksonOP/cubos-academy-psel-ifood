function solucao(primeiraLetra, segundaLetra, palavras) {
    var r = false
        for (let letra of palavras){
            if (letra[0] === primeiraLetra && letra[1] === segundaLetra){
                console.log(letra);
                r =true;
                
                } 
                } if (!r){
                    console.log("NENHUMA");
                }
                
    
    } 