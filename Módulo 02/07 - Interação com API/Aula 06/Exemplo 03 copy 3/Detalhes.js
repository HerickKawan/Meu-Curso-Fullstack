async function bsucar(){
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    let parametro = new URLSearchParams(window.location.search)
    let parametroID = parametro.get("produto-id")

    let indicePro
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indicePro = x
        }
    }

    document.body.innerHTML = `
     <div class="card-detalhes">
        <h1>${produtos[indicePro].nome}</h1>
        <img src="${produtos[indicePro].img}" width="250" height="200">
        <div class="valores">
            <span class="valorCom"> R$  ${produtos[indicePro].valorComDesconto.toFixed(2).replace(".",",")}</span>
            <span class="valorSem"> R$  ${produtos[indicePro].valorSemDesconto.toFixed(2).replace(".",",")}</sapn>
        </div>
     </div>
    
    `




}
bsucar()