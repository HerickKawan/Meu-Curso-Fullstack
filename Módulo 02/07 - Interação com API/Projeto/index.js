async function buscar(){
    let busca = await fetch("produtos.json")
    let converter = await busca.json()

    let divLista = document.getElementById("lista-card")

    for( let produto of converter){
        divLista.innerHTML +=`
            <div class="card" data-id="${produto.id}">
                <h3>${produto.nome}</h3>
                <img src="${produto.img[0]}" width="250" height="200">
                <div class="valores">
                    <span class="valorCom"> R$ ${(produto.valorComDesconto.toFixed(2)).replace(".",",")}</span>
                    <span class="valorSem"> R$ ${(produto.valorSemDesconto.toFixed(2)).replace(".",",")}</span>
                </div>
            </div>
        
        `
    }

    let divsCards = document.getElementsByClassName("card")

    for(let card of divsCards){
        card.addEventListener("click", clicou)
    }
}

function clicou(){
        let elementoId = this.getAttribute("data-id")
        window.location.href = "detalhes.html?produto-id=" + elementoId
    }



buscar()