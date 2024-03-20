async function buscar(){
    let busca = await fetch("lista.json")
    let converter = await busca.json()

    let DivLista = document.getElementById("lista-card")

    for( let produto of converter){
        DivLista.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <h1>${produto.nome}</h1>
                <img src="${produto.img}" width="250" height="200">
                <div class="valores">
                    <span class="valorCom"> R$ ${(produto.valorComDesconto.toFixed(2)).replace(".",",")} </span>
                    <span class="valorSem"> R$ ${(produto.valorSemDesconto.toFixed(2)).replace(".",",")} </span>
                </div>
            </div>
        
        `
    }
    // Busca por todos elementos HTML que contém  "card"
    // como valor do parâmetro "class".
    let divsCards = document.getElementsByClassName("card")
    // Add em cada Div Card um evento que escuta quando 
    // o usuario clica nele, e chama uma função.
    for(let card of divsCards){
        card.addEventListener("click", clicou) // chamar a função clicou
    }
}


function clicou(){
    let elementoId = this.getAttribute("data-id")
    window.location.href = "detalhes.html?produto-id=" + elementoId
}

5
buscar()

