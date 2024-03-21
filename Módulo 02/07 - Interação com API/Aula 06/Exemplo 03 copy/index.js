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
    
    for(let card of divsCards){
        // Add em cada Div Card um evento que escuta quando 
        // o usuario clica nele, e chama uma função.
        card.addEventListener("click", clicou) 
    }
}

// É chamada essa função quando o usuário clicou
// em um card que contém o evento de Escuta.
function clicou(){
    // coleta o valor do atributo "data-id" do elemento 
    // HTML que aciona o evento de Escuta.
    let elementoId = this.getAttribute("data-id")
    //
    window.location.href = "detalhes.html?produto-id=" + elementoId

}


buscar()

