async function buscarDetalhes(){
    let parametros = new URLSearchParams(window.location.search)
    let parametroID = parametros.get("produto-id")

    let busca 
    if(parametroID >= 7){
        busca = await fetch("produtos02.json")
    }else{
        busca = await fetch("produtos.json")
    }
        
    let produtos = await busca.json()

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
                <span class="descriçao">${produtos[indiceProd].descricao}</span>
            </div>
            <div class="valoresDetalhes">
                <span class="valorCom"> R$ ${produtos[indiceProd].valorComDesconto.toFixed(2).replace(".",",")}</span>
                <span class="valorSem"> R$ ${produtos[indiceProd].valorSemDesconto.toFixed(2).replace(".",",")}</span>
                <br>
                <input type="button" class="cor01">
                <input type="button" class="cor02">
                <input type="button" class="cor03">
                <input type="button" class="cor04">
            </div>
            <div class="botoes">
                <button class="botao-compra">
                    <a href="compra.html">
                    Comprar
                    </a>
                </button>
                <button class="botao-retira">
                    Retira Rapido
                </button>
                <button class="botao-add-carrinho">
                    Adicionar ao Carrinho
                </button>
            </div>

           
        </div>
        
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