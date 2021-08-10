function solucao(obras) {
	//seu codigo aqui

const max = obras.reduce((a,b)=>{
    if(b.valor > a.valor) a = b;
    return a;
});
    console.log(max.nome)
          
    
}
