function solucao(cor1, cor2) {
	//seu codigo aqui
const tipo = ["azul", "amarelo", "vermelho"];

if (tipo[0] === cor1){
        if (tipo[0] === cor2)
            console.log ("azul")
        if (tipo[1] === cor2)
            console.log("verde")
        else if (tipo[2] === cor2)
            console.log("roxo");
}
if (tipo[1] === cor1){
        if (tipo[0] === cor2)
            console.log ("verde")
        if (tipo[1] === cor2)
            console.log("amarelo")
        else if (tipo[2] === cor2)
            console.log("laranja");
}
if (tipo[2] === cor1){
        if (tipo[0] === cor2)
            console.log ("roxo")
        if (tipo[1] === cor2)
            console.log("laranja")
        else if (tipo[2] === cor2)
            console.log("vermelho");
}


}
