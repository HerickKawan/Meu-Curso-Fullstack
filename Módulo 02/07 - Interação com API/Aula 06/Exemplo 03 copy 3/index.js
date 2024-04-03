async function buscar(){
    let busca = await fetch("lista.json")
    let converter = await busca.json()

    let DivLista = document.getElementById("lista-card")

    for( let produto of converter){
        DivLista.innerHTML += `
            <div class="card" data-id="${produto.id}">
                <h3>${produto.nome}</h3>
                <img src="${produto.img}" width="250" height="200">
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
 function clicou(){
        let elementoID = this.getAttribute("data-id")
        window.location.href = "Detalhes.html?produto-id=" + elementoID
    }
buscar()