async function mercado(){
    let compras = await fetch("mercado.json")
    let converter = await compras.json()

    let grupoDiv = document.getElementById("lista-card")
    
    for(let x of converter){
        grupoDiv.innerHTML += `
        <div class="card">
            <h2>${x.produto}</h2>
            <img src="${x.img}" width="200" height="200">
            <p>${x.marca}</p>
            <p>${x.kilo}</p>
            <p>${x.preço}</p>
        </div>
        ` 
    }
}
mercado()