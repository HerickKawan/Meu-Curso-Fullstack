async function buscarDetalhes(){
  
    let busca = await fetch("produtos.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")

   
    let indiceProd 
    for(let x in produtos){
       
        if(produtos[x].id == parametroID){
           indiceProd = x
        }
    }

    
    document.getElementById("detalhes").innerHTML += `
        <h3>${produtos[indiceProd].nome}</h3>
        <div class="pg-compra"> 
        
            <div class="card-Detalhes">
                <img src="${produtos[indiceProd].img[0]}" id="frame" width="300" height="250">
                <div class="miniaturas" id="miniaturas"></div>
            </div>
            <div class="valoresDetalhes">
                <span class="valorCom"> R$ ${produtos[indiceProd].valorComDesconto.toFixed(2).replace(".",",")}</span>
                <span class="valorSem"> R$ ${produtos[indiceProd].valorSemDesconto.toFixed(2).replace(".",",")}</span>
            </div>
            
        </div>
        <span class="descriçao">${produtos[indiceProd].descricao}</span>
    `
   
    

    let divMiniaturas = document.getElementById("miniaturas")
    for(let y of produtos[indiceProd].img){
        divMiniaturas.innerHTML += `
            <img src="${y}" class="mini" width="80" height="80"; border-radius: 10px">
        
        `
    }

    let minizinhas = document.getElementsByClassName("mini")
    for(let a of minizinhas){
        a.addEventListener("mouseover", deslize)
    }

}

function deslize(){
    document.getElementById("frame").src = this.src
}

buscarDetalhes()