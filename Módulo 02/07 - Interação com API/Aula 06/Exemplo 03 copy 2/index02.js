async function buscar02(){
    let busca = await fetch("lista.json")
    let produtos = await busca.json()

    let parametros = new URLSearchParams(window.location.href)
    let parametroID = parametros.get("produto-id")


    let indicePro
    for(let x in produtos){
        if(produtos[x].id == parametroID){
            indicePro = x
        }
    }


    document.body.innerHTML =`
        <div =class="card">
            <h3>${produtos[indicePro].nome}</h3>
            <img src="${produtos[indicePro].img}">
            <><>


        </div>
    `
}
buscar02()