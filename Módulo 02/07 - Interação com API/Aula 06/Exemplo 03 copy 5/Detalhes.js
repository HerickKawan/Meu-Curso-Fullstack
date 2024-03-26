async function buscar(){
    let busca = await fetch("lista.json")
    let produto = await busca.json()

    let parametro = new URLSearchParams(window.location.search)
    let parametroID = parametro.get("produto-id")

    let indicePro 
    for(let x of produto){
        if(produto[x].id == parametroID){
            indicePro = x
        }
    }

    document.body.innerHTML = `
    <div class="card-Detalhes">
        <h1>${produto[indicePro].nome}</h1>
        <img src="${produto[indicePro].img}" width="250" height="200">
        <div class="valores">
            <span class="valorCom"> R$ ${produto[indicePro].valorComDesconto.toFixed(2).replace(".",",")}</span>
            <span class="valorSem"> R$ ${produto[indicePro].valorSemDesconto.toFixed(2).replace(".",",")}</span>
        </div>
    </div>
    
    `




}
buscar()