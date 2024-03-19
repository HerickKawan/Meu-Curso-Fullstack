async function buscar(){
    let busca = await fetch("lista.json")
    let converter = await busca.json()

    let DivLista = document.getElementById("lista-card")

    for( let produto of converter){
        DivLista.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <h1>${produto.nome}</h1>
                <img>
                <div class="valores">
                    <span class="valorCom"> R$ ${(produto.valorComDesconto.toFixed(2)).replace(".",",")} </span>
                    <span class="valorSem"> R$ ${(produto.valorSemDesconto.toFixed(2)).replace(".",",")} </span>
                </div>
            </div>
        
        `
    }

    let divsCards = document.getElementsByClassName("card")
    for(let card of divsCards){
        card.addEventListener("click", clicou)
    }
}

buscar()

function clicou(){
    let elementoId = this.getAttribute("data-id")
    alert(elementoId)
}