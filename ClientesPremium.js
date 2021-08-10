function solucao(precos) {
    //seu codigo aqui
let soma = 0;
let valor = precos[0];
    let vip = 0;
    let nor = 0;
    let pre = 0;
   
    
for (const preco of precos){
    soma = soma + preco;}
    if (soma < 1000){
        console.log("NORMAL")
    } else if (precos[0] < 200){
        console.log("VIP")
    } else {
        console.log ("PREMIUM")
    }

}