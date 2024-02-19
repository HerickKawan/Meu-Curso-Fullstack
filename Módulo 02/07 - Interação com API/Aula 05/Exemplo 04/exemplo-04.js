async function resolver(){
    let busca1 = await fetch("tarefas.json")
    let lista = await busca1.json()
    
    for (let x in lista){

        document.body.innerHTML += `<h1> ${lista[x]} </h1>`
      

   }
    
    
}
resolver()