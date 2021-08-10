function solucao(sequencia) {
	//seu codigo aqui
   
   let indice = 0;
    let volta = 0;
    let ida = 6;



        
for (item of sequencia){
    if (item == ">"){
        indice += 1
        
    } else if (item == "<") {
        indice -= 1
     
} if (indice < 0){
    
            indice = ida 
    

} if  (indice > 6){
    indice = volta
            
        }  
    

}
       
   
console.log(indice)
     

}